import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'msr-table-group-header',
  templateUrl: './msr-table-group-header.component.html',
  styleUrls: ['./msr-table-group-header.component.scss'],
  host:{class:"group-header"}
})
export class MsrTableGroupHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
