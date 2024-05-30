import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsrTableGroupHeaderComponent } from './msr-table-group-header.component';

describe('MsrTableGroupHeaderComponent', () => {
  let component: MsrTableGroupHeaderComponent;
  let fixture: ComponentFixture<MsrTableGroupHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsrTableGroupHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsrTableGroupHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
