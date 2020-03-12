import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionJobTableComponent } from './production-job-table.component';

describe('ProductionJobTableComponent', () => {
  let component: ProductionJobTableComponent;
  let fixture: ComponentFixture<ProductionJobTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionJobTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionJobTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
