import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'msr-table-column-header',
  templateUrl: './msr-table-column-header.component.html',
  styleUrls: ['./msr-table-column-header.component.scss'],
  host:{class:'column-header'}
})
export class MsrTableColumnHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
