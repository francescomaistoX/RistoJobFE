import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomelComponent } from './homel.component';

describe('HomelComponent', () => {
  let component: HomelComponent;
  let fixture: ComponentFixture<HomelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
