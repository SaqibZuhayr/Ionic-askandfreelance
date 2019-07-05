import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostquestionPage } from './postquestion.page';

describe('PostquestionPage', () => {
  let component: PostquestionPage;
  let fixture: ComponentFixture<PostquestionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostquestionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostquestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
