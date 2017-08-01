import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BallfollowmouseComponent } from './ballfollowmouse.component';

describe('BallfollowmouseComponent', () => {
  let component: BallfollowmouseComponent;
  let fixture: ComponentFixture<BallfollowmouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallfollowmouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallfollowmouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
