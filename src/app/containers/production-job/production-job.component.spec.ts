import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionJobComponent } from './production-job.component';

describe('ProductionJobComponent', () => {
  let component: ProductionJobComponent;
  let fixture: ComponentFixture<ProductionJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
