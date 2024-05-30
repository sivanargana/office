import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsrTableColumnHeaderComponent } from './msr-table-column-header.component';

describe('MsrTableColumnHeaderComponent', () => {
  let component: MsrTableColumnHeaderComponent;
  let fixture: ComponentFixture<MsrTableColumnHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsrTableColumnHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsrTableColumnHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
