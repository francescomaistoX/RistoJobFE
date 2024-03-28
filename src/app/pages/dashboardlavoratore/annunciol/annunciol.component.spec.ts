import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnunciolComponent } from './annunciol.component';

describe('AnnunciolComponent', () => {
  let component: AnnunciolComponent;
  let fixture: ComponentFixture<AnnunciolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnnunciolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnnunciolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
