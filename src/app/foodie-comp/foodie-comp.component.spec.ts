import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodieCompComponent } from './foodie-comp.component';

describe('FoodieCompComponent', () => {
  let component: FoodieCompComponent;
  let fixture: ComponentFixture<FoodieCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodieCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodieCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
