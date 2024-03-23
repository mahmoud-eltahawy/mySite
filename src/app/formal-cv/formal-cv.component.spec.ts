import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormalCvComponent } from './formal-cv.component';

describe('FormalCvComponent', () => {
  let component: FormalCvComponent;
  let fixture: ComponentFixture<FormalCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormalCvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormalCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
