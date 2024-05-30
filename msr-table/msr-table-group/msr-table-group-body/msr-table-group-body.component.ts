import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'msr-table-group-body',
  templateUrl: './msr-table-group-body.component.html',
  styleUrls: ['./msr-table-group-body.component.scss'],
  host:{class:"group-body"}
})
export class MsrTableGroupBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
