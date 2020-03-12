import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-production-job',
  templateUrl: './production-job.component.html',
  styleUrls: ['./production-job.component.css']
})
export class ProductionJobComponent implements OnInit, OnDestroy {

  selected: any;

  private subscriptions: Subscription[] = [];

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit(): void {
    console.log('ProductionJobComponent onInit');
    this.dataService.loadProductionJobs();

    this.subscriptions.push(
      this.dataService.productionJobs$.subscribe(x => console.log(x))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
    console.log('ProductionJobComponent onDestroy');
  }

  select(productionJob: any): void {
    this.selected = productionJob;
  }

}
