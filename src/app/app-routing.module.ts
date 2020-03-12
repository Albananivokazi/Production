import { NgModule, Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailViewComponent } from './containers/detail-view/detail-view.component';
import { ListViewComponent } from './containers/list-view/list-view.component';
import { HomeComponent } from './containers/home/home.component';
import { ProductionJobComponent } from './containers/production-job/production-job.component';


const routes: Routes = [{
      path: '',
      component: HomeComponent
  }, {
      path: 'list-view',
      component: ListViewComponent,
      children: [{
          path: ':id',
          component: DetailViewComponent
      }]
  }, {
    path: 'production-jobs',
    component: ProductionJobComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

