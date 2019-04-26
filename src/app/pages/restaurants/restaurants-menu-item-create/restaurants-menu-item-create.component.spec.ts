import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsMenuItemCreateComponent } from './restaurants-menu-item-create.component';

describe('RestaurantsMenuItemCreateComponent', () => {
  let component: RestaurantsMenuItemCreateComponent;
  let fixture: ComponentFixture<RestaurantsMenuItemCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantsMenuItemCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsMenuItemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
