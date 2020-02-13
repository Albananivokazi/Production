import { NgModule, Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { ListViewComponent } from './list-view/list-view.component';


const routes: Routes = [
  { path: 'list-view', component: ListViewComponent },
  { path: 'detail-view/:id', component: DetailViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

