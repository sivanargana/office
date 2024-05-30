import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsrTableColumnBodyComponent } from './msr-table-column-body.component';

describe('MsrTableColumnBodyComponent', () => {
  let component: MsrTableColumnBodyComponent;
  let fixture: ComponentFixture<MsrTableColumnBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsrTableColumnBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsrTableColumnBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
