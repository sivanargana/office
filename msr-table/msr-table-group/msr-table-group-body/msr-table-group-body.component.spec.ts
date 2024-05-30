import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsrTableGroupBodyComponent } from './msr-table-group-body.component';

describe('MsrTableGroupBodyComponent', () => {
  let component: MsrTableGroupBodyComponent;
  let fixture: ComponentFixture<MsrTableGroupBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsrTableGroupBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsrTableGroupBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
