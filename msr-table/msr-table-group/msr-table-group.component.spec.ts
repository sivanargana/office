import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsrTableGroupComponent } from './msr-table-group.component';

describe('MsrTableGroupComponent', () => {
  let component: MsrTableGroupComponent;
  let fixture: ComponentFixture<MsrTableGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsrTableGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsrTableGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
