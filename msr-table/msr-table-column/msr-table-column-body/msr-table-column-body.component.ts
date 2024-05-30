import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'msr-table-column-body',
  templateUrl: './msr-table-column-body.component.html',
  styleUrls: ['./msr-table-column-body.component.scss'],
  host:{class:'column-body'}
})
export class MsrTableColumnBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
