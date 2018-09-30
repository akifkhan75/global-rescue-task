import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentProcessComponent } from './enrollment-process.component';

describe('EnrollmentProcessComponent', () => {
  let component: EnrollmentProcessComponent;
  let fixture: ComponentFixture<EnrollmentProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollmentProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmentProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
