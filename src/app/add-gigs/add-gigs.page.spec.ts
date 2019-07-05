import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGigsPage } from './add-gigs.page';

describe('AddGigsPage', () => {
  let component: AddGigsPage;
  let fixture: ComponentFixture<AddGigsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGigsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGigsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
