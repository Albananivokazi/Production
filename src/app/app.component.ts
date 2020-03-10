import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './services/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  show: boolean;
  name = 'Welcome to my app';

  sidenavOpened = true;

  constructor(
    public router: Router,
    private dataService: DataService
  ) {
  }

  ngOnInit(){
    this.dataService.loadProducts();
  }

  toggleSidenav(): void {
    this.sidenavOpened = !this.sidenavOpened;
  }
}
