import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaseHijoComponent } from './clase-hijo.component';

describe('ClaseHijoComponent', () => {
  let component: ClaseHijoComponent;
  let fixture: ComponentFixture<ClaseHijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaseHijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaseHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
