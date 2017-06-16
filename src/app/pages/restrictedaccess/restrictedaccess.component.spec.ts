import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictedaccessComponent } from './restrictedaccess.component';

describe('RestrictedaccessComponent', () => {
  let component: RestrictedaccessComponent;
  let fixture: ComponentFixture<RestrictedaccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestrictedaccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrictedaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
