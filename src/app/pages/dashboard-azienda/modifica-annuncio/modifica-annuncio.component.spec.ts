import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaAnnuncioComponent } from './modifica-annuncio.component';

describe('ModificaAnnuncioComponent', () => {
  let component: ModificaAnnuncioComponent;
  let fixture: ComponentFixture<ModificaAnnuncioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModificaAnnuncioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModificaAnnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
