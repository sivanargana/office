import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'msr-table-column',
  templateUrl: './msr-table-column.component.html',
  styleUrls: ['./msr-table-column.component.scss'],
  host:{class:'column'}
})
export class MsrTableColumnComponent implements OnInit {
  @Input() rows:any = [];
  @Input() column:any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
