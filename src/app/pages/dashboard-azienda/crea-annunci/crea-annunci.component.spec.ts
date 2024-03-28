import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaAnnunciComponent } from './crea-annunci.component';

describe('CreaAnnunciComponent', () => {
  let component: CreaAnnunciComponent;
  let fixture: ComponentFixture<CreaAnnunciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreaAnnunciComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreaAnnunciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
