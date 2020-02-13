import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as ProductionJob from '../../assets/Productionjson/ProductionJob.json';
@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  id: any;
  products: any = (ProductionJob as any).default.products;
  product: any;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.product = this.products.find(item => item.id === +this.id)
  }
}
