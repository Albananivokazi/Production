import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { PageEvent } from '@angular/material/paginator';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ProductFormComponent } from 'src/app/components/product-form/product-form.component';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html'
})
export class ListViewComponent implements OnInit {
  p = 1;
  products: any[];
  selected: any;

  pageEvent$ = new BehaviorSubject<PageEvent>({
    pageIndex: 0,
    pageSize: 5,
    length: 0
  });

  pagedProducts$ = combineLatest(
     this.dataService.products$,
     this.pageEvent$
  ).pipe(
    map(([products, pageEvent]) => {
      const start = pageEvent.pageSize * pageEvent.pageIndex;
      return products.slice(start, start + pageEvent.pageSize);
    })
  )
  
  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public dataService: DataService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.dataService.products$.subscribe(products => {
      this.pageEvent$.next(
        {
          ...this.pageEvent$.getValue(),
          length: products.length    
        }
      );
    })
  }

  page(pageEvent: PageEvent): void {
    this.pageEvent$.next(pageEvent);
  }

  select(product: any): void {
    this.selected = product;

    this.router.navigate([ product.id ], {
      relativeTo: this.route
    })
  }

  edit(product: any = this.selected): void {

    this.dialog.open(ProductFormComponent, {
      data: product
    }).beforeClosed().subscribe(result => {
      console.log('DialogClose', result);
    })

    

    // this.dataService.saveProduct(newProduct);
  }
}

