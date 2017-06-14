import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactiveformstest',
  templateUrl: './reactiveformstest.component.html',
  styleUrls: ['./reactiveformstest.component.scss']
})
export class ReactiveformstestComponent implements OnInit {

  form: FormGroup;
  bannedUsers = ['amackzie@gmail.com', 'someone@example.com', 'janedhoe@gnmail.com'];
  emailBanned = false;

  constructor() { }

  ngOnInit() {
      this.form = new FormGroup({
          emailField: new FormControl('', Validators.compose([ Validators.required, this.blockCertainUser])),
          passwordField: new FormControl('', Validators.compose([ Validators.required, Validators.minLength(7)])),
      });
  }

  validateEmail() {
      return this.form.get('emailField').valid || this.form.get('emailField').untouched;
  }

  validatePassword() {
      return this.form.get('passwordField').valid || this.form.get('passwordField').untouched;
  }

  private blockCertainUser(control: FormControl): {[key: string]: string} {
    return control.value.includes('amackzie@gmail.com') ? {'error': 'The email address provided has been banned from accessing our services'} : null;
  }

  login(formValue) {
      console.log(formValue);
  }

}
