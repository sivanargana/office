import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'msr-table-cell',
  templateUrl: './msr-table-cell.component.html',
  styleUrls: ['./msr-table-cell.component.scss'],
  host:{class:'cell'}
})
export class MsrTableCellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
