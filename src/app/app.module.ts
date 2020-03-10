import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DataService } from './services/data.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';


import { ListViewComponent } from './containers/list-view/list-view.component';
import { DetailViewComponent } from './containers/detail-view/detail-view.component';
import { HomeComponent } from './containers/home/home.component';
const CONTAINERS: Type<any>[] = [
  ListViewComponent,
  DetailViewComponent,
  HomeComponent
]


import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
const COMPONENTS: Type<any>[] = [
  ProductListComponent,
  ProductDetailComponent,
  ProductFormComponent
]


@NgModule({
  declarations: [
    AppComponent,
    ...CONTAINERS,
    ...COMPONENTS
  ],
  entryComponents: [
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatListModule,
    MatPaginatorModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
