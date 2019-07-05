import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowjobsPage } from './showjobs.page';

describe('ShowjobsPage', () => {
  let component: ShowjobsPage;
  let fixture: ComponentFixture<ShowjobsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowjobsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowjobsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
