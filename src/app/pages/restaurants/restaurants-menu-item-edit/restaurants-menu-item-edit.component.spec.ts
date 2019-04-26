import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsMenuItemEditComponent } from './restaurants-menu-item-edit.component';

describe('RestaurantsMenuItemEditComponent', () => {
  let component: RestaurantsMenuItemEditComponent;
  let fixture: ComponentFixture<RestaurantsMenuItemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantsMenuItemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsMenuItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
