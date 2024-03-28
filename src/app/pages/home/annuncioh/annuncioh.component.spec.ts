import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnunciohComponent } from './annuncioh.component';

describe('AnnunciohComponent', () => {
  let component: AnnunciohComponent;
  let fixture: ComponentFixture<AnnunciohComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnnunciohComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnnunciohComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
