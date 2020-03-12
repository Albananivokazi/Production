import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  productionJobs$ = new  BehaviorSubject<any[]>([]);
  productionJobsLoading$ = new BehaviorSubject<boolean>(false);
  private productionJobsSnapshot: any[];

  products$ = new BehaviorSubject<any>([]);
  private productSnapshot: any[];

  constructor(
    private httpClient: HttpClient
  ) {}

  loadProductionJobs(): void {
    if (this.productionJobsSnapshot) {
      return;
    }

    this.productionJobsLoading$.next(true);
    
    this.httpClient.get<any[]>('../../assets/data/production-job.json')
      .subscribe({
        next: (data: any[]) => {
          this.productionJobsSnapshot = data;
          this.productionJobs$.next(
            data.sort((a, b) => {
              const nameA = a?.properties.name;
              const nameB = b?.properties.name;
              return nameA.localeCompare(nameB);
            })
          );
          this.productionJobsLoading$.next(false);
      }});
  }

  loadProducts(reload?: boolean): void {

    if (this.productSnapshot && !reload) {
      return;
    }

    this.httpClient.get('../../assets/data/ProductionJob.json')
      .subscribe({
        next: (data: any) => {
          this.productSnapshot = data.products;
          this.products$.next(this.productSnapshot);
        },
        error: (err) => console.log('Error', err)
      });
  }

  saveProduct(product: any): void {
    const idx = this.productSnapshot.findIndex(p => p.id === product.id);

    if (idx > -1) {
      this.productSnapshot.splice(idx, 1, product);
      this.products$.next([ ...this.productSnapshot ]);
    }
  }
}
