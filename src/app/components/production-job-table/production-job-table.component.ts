import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-production-job-table',
  templateUrl: './production-job-table.component.html',
  styleUrls: ['./production-job-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProductionJobTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name'];
  expandedElement: any;

  @Input() set productionJobs(value: any[]) {
    this.dataSource.data = value;
  }

  public dataSource = new MatTableDataSource<any[]>();

  constructor() { }

  ngOnInit(): void {
  }

}
