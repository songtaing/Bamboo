import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjMgmtDashboardComponent } from './proj-mgmt-dashboard.component';

describe('ProjMgmtDashboardComponent', () => {
  let component: ProjMgmtDashboardComponent;
  let fixture: ComponentFixture<ProjMgmtDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjMgmtDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjMgmtDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
