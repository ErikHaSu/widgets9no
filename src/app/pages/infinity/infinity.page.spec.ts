import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfinityPage } from './infinity.page';

describe('InfinityPage', () => {
  let component: InfinityPage;
  let fixture: ComponentFixture<InfinityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfinityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfinityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
