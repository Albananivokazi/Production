import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {
  @Input() selected: any;
  @Input() products: any[];
  @Output() select = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
