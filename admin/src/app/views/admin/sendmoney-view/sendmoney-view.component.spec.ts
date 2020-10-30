import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendmoneyViewComponent } from './sendmoney-view.component';

describe('SendmoneyViewComponent', () => {
  let component: SendmoneyViewComponent;
  let fixture: ComponentFixture<SendmoneyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendmoneyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendmoneyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
