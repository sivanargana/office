import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'msr-table-group',
  templateUrl: './msr-table-group.component.html',
  styleUrls: ['./msr-table-group.component.scss'],
  host:{class:"group"}
})
export class MsrTableGroupComponent implements OnInit {
  @Input() rows:any = [];
  @Input() column:any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
