import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthguardtestComponent } from './authguardtest.component';

describe('AuthguardtestComponent', () => {
  let component: AuthguardtestComponent;
  let fixture: ComponentFixture<AuthguardtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthguardtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthguardtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
