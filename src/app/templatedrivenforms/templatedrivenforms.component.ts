import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatedrivenforms',
  templateUrl: './templatedrivenforms.component.html',
  styleUrls: ['./templatedrivenforms.component.scss']
})
export class TemplatedrivenformsComponent implements OnInit {

  emailaddress: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

  login(form) {
      console.log(form);
  }

}
