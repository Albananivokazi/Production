import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  products$ = new BehaviorSubject<any>([]);
  private productSnapshot: any[];

  private counter = 0;

  constructor(
    private httpClient: HttpClient
  ) {
    
  }

  loadProducts(reload?: boolean): void {

    if (this.productSnapshot && !reload) {
      return;
    }


    this.httpClient.get('../../assets/data/ProductionJob.json')
      .subscribe({
        next: (data: any) => {
          this.productSnapshot = data.products.slice(this.counter);
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
