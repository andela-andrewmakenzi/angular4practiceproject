import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesSubjectsComponent } from './directives-subjects.component';

describe('DirectivesSubjectsComponent', () => {
  let component: DirectivesSubjectsComponent;
  let fixture: ComponentFixture<DirectivesSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
