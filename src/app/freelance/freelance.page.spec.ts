import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancePage } from './freelance.page';

describe('FreelancePage', () => {
  let component: FreelancePage;
  let fixture: ComponentFixture<FreelancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
