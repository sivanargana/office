import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsrTableComponent } from './msr-table.component';

describe('MsrTableComponent', () => {
  let component: MsrTableComponent;
  let fixture: ComponentFixture<MsrTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsrTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsrTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
