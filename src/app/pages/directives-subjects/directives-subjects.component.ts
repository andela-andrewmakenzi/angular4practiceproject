import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-directives-subjects',
  templateUrl: './directives-subjects.component.html',
  styleUrls: ['./directives-subjects.component.scss']
})
export class DirectivesSubjectsComponent implements OnInit {
  myColor: string;

  constructor() { }

  ngOnInit() {
  }

}
