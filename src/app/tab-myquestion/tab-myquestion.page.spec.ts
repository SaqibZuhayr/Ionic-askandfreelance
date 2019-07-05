import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMyquestionPage } from './tab-myquestion.page';

describe('TabMyquestionPage', () => {
  let component: TabMyquestionPage;
  let fixture: ComponentFixture<TabMyquestionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabMyquestionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabMyquestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
