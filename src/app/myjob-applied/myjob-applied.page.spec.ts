import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyjobAppliedPage } from './myjob-applied.page';

describe('MyjobAppliedPage', () => {
  let component: MyjobAppliedPage;
  let fixture: ComponentFixture<MyjobAppliedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyjobAppliedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyjobAppliedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
