import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparacionHijoComponent } from './preparacion-hijo.component';

describe('PreparacionHijoComponent', () => {
  let component: PreparacionHijoComponent;
  let fixture: ComponentFixture<PreparacionHijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparacionHijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparacionHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
