import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegesTableComponent } from './colleges-table.component';

describe('CollegesTableComponent', () => {
  let component: CollegesTableComponent;
  let fixture: ComponentFixture<CollegesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollegesTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollegesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
