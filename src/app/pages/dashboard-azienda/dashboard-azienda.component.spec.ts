import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAziendaComponent } from './dashboard-azienda.component';

describe('DashboardAziendaComponent', () => {
  let component: DashboardAziendaComponent;
  let fixture: ComponentFixture<DashboardAziendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardAziendaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardAziendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
