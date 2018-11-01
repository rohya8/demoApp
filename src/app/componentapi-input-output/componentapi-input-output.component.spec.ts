import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentapiInputOutputComponent } from './componentapi-input-output.component';

describe('ComponentapiInputOutputComponent', () => {
  let component: ComponentapiInputOutputComponent;
  let fixture: ComponentFixture<ComponentapiInputOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentapiInputOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentapiInputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
