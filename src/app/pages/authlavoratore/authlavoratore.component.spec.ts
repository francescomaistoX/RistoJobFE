import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthlavoratoreComponent } from './authlavoratore.component';

describe('AuthlavoratoreComponent', () => {
  let component: AuthlavoratoreComponent;
  let fixture: ComponentFixture<AuthlavoratoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthlavoratoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthlavoratoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
