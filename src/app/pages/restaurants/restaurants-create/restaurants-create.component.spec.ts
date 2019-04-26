import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsCreateComponent } from './restaurants-create.component';

describe('RestaurantsCreateComponent', () => {
  let component: RestaurantsCreateComponent;
  let fixture: ComponentFixture<RestaurantsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
