import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExampleComponent } from './work-example.component';

describe('WorkExampleComponent', () => {
  let component: WorkExampleComponent;
  let fixture: ComponentFixture<WorkExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
