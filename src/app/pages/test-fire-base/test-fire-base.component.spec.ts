import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFireBaseComponent } from './test-fire-base.component';

describe('TestFireBaseComponent', () => {
  let component: TestFireBaseComponent;
  let fixture: ComponentFixture<TestFireBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFireBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFireBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
