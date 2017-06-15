import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformstestComponent } from './reactiveformstest.component';

describe('ReactiveformstestComponent', () => {
  let component: ReactiveformstestComponent;
  let fixture: ComponentFixture<ReactiveformstestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveformstestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveformstestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
