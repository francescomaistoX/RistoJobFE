import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardlavoratoreComponent } from './dashboardlavoratore.component';

describe('DashboardlavoratoreComponent', () => {
  let component: DashboardlavoratoreComponent;
  let fixture: ComponentFixture<DashboardlavoratoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardlavoratoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardlavoratoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
