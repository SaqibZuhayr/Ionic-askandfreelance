import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MygigsPage } from './mygigs.page';

describe('MygigsPage', () => {
  let component: MygigsPage;
  let fixture: ComponentFixture<MygigsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MygigsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MygigsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
