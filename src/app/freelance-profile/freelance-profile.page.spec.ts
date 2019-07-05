import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelanceProfilePage } from './freelance-profile.page';

describe('FreelanceProfilePage', () => {
  let component: FreelanceProfilePage;
  let fixture: ComponentFixture<FreelanceProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelanceProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelanceProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
