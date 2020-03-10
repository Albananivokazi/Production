import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html'
})
export class DetailViewComponent implements OnInit {
  product$: Observable<any>;

  constructor(
      private route: ActivatedRoute,
      private dataService: DataService
  ) { }


  ngOnInit() {

    this.product$ = combineLatest(
      this.dataService.products$,
      this.route.params
    ).pipe(
      map(([products, params]) => products.find(p => p.id === +params.id))
    )


    this.product$.subscribe(p => console.log('P', p));

  }
}
