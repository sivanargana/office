import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsrTablePanelComponent } from './msr-table-panel.component';

describe('MsrTablePanelComponent', () => {
  let component: MsrTablePanelComponent;
  let fixture: ComponentFixture<MsrTablePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsrTablePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsrTablePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
