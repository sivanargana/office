import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsrTableComponent } from './msr-table.component';
import { MsrTableColumnComponent } from './msr-table-column/msr-table-column.component';
import { MsrTableGroupComponent } from './msr-table-group/msr-table-group.component';
import { MsrTableCellComponent } from './msr-table-cell/msr-table-cell.component';
import { MsrTableColumnHeaderComponent } from './msr-table-column/msr-table-column-header/msr-table-column-header.component';
import { MsrTableColumnBodyComponent } from './msr-table-column/msr-table-column-body/msr-table-column-body.component';
import { MsrTableGroupHeaderComponent } from './msr-table-group/msr-table-group-header/msr-table-group-header.component';
import { MsrTableGroupBodyComponent } from './msr-table-group/msr-table-group-body/msr-table-group-body.component';
import { MsrTablePanelComponent } from './msr-table-panel/msr-table-panel.component';



@NgModule({
  declarations: [
    MsrTableComponent,
    MsrTableColumnComponent,
    MsrTableGroupComponent,
    MsrTableCellComponent,
    MsrTableColumnHeaderComponent,
    MsrTableColumnBodyComponent,
    MsrTableGroupHeaderComponent,
    MsrTableGroupBodyComponent,
    MsrTablePanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MsrTableComponent
  ]
})
export class MsrTableModule { }
