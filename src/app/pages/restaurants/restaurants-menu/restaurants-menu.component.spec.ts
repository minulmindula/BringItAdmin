import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsMenuComponent } from './restaurants-menu.component';

describe('RestaurantsMenuComponent', () => {
  let component: RestaurantsMenuComponent;
  let fixture: ComponentFixture<RestaurantsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
