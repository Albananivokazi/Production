import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-production-job',
  templateUrl: './production-job.component.html',
  styleUrls: ['./production-job.component.css']
})
export class ProductionJobComponent implements OnInit {

  selected: any;

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.loadProductionJobs();
  }

  select(productionJob: any): void {
    this.selected = productionJob;
  }

}
