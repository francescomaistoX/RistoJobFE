import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthaziendaComponent } from './authazienda.component';

describe('AuthaziendaComponent', () => {
  let component: AuthaziendaComponent;
  let fixture: ComponentFixture<AuthaziendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthaziendaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthaziendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
