import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyjobsPage } from './myjobs.page';

describe('MyjobsPage', () => {
  let component: MyjobsPage;
  let fixture: ComponentFixture<MyjobsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyjobsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyjobsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
