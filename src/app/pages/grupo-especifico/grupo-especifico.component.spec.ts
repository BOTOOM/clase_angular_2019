import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoEspecificoComponent } from './grupo-especifico.component';

describe('GrupoEspecificoComponent', () => {
  let component: GrupoEspecificoComponent;
  let fixture: ComponentFixture<GrupoEspecificoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoEspecificoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoEspecificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
