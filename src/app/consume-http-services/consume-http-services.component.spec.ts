import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeHttpServicesComponent } from './consume-http-services.component';

describe('ConsumeHttpServicesComponent', () => {
  let component: ConsumeHttpServicesComponent;
  let fixture: ComponentFixture<ConsumeHttpServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumeHttpServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumeHttpServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
