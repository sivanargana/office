import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsrTableColumnComponent } from './msr-table-column.component';

describe('MsrTableColumnComponent', () => {
  let component: MsrTableColumnComponent;
  let fixture: ComponentFixture<MsrTableColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsrTableColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsrTableColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
