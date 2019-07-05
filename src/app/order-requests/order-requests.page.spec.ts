import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderRequestsPage } from './order-requests.page';

describe('OrderRequestsPage', () => {
  let component: OrderRequestsPage;
  let fixture: ComponentFixture<OrderRequestsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderRequestsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderRequestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
