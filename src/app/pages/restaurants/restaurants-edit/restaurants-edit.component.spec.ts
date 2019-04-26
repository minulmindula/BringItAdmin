import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsEditComponent } from './restaurants-edit.component';

describe('RestaurantsEditComponent', () => {
  let component: RestaurantsEditComponent;
  let fixture: ComponentFixture<RestaurantsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
