import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendmoneyAddComponent } from './sendmoney-add.component';

describe('SendmoneyAddComponent', () => {
  let component: SendmoneyAddComponent;
  let fixture: ComponentFixture<SendmoneyAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendmoneyAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendmoneyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
