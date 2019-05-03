import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentMensajeComponent } from './component-mensaje.component';

describe('ComponentMensajeComponent', () => {
  let component: ComponentMensajeComponent;
  let fixture: ComponentFixture<ComponentMensajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentMensajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentMensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
