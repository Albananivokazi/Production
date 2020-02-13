import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  show: boolean;
  name = 'Wellcome to my app';

  constructor(public router: Router) {
  }

  ngOnInit(){
}
}
