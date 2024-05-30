import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'msr-table-panel',
  templateUrl: './msr-table-panel.component.html',
  styleUrls: ['./msr-table-panel.component.scss'],
  host:{class:"panel"}
})
export class MsrTablePanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
