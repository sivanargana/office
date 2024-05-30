import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsrTableCellComponent } from './msr-table-cell.component';

describe('MsrTableCellComponent', () => {
  let component: MsrTableCellComponent;
  let fixture: ComponentFixture<MsrTableCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsrTableCellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsrTableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
