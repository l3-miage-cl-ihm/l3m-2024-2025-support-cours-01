import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreCollegeComponent } from './filtre-college.component';

describe('FiltreCollegeComponent', () => {
  let component: FiltreCollegeComponent;
  let fixture: ComponentFixture<FiltreCollegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltreCollegeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltreCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
