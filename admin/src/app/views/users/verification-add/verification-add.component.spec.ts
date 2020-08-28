import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationAddComponent } from './verification-add.component';

describe('VerificationAddComponent', () => {
  let component: VerificationAddComponent;
  let fixture: ComponentFixture<VerificationAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
