import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import * as ProductionJob from '../../assets/Productionjson/ProductionJob.json';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
})
export class ListViewComponent implements OnInit {
  p = 1;
  products: any = (ProductionJob as any).default.products;
  constructor(public router: Router) {
  }

  ngOnInit() {

  }
}

