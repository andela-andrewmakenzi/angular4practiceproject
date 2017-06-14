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
          emailfield: new FormControl('', Validators.required, this.blockCertainUser),
          passwordfield: new FormControl('', Validators.required, Validators.minLength(7)),
          usernamefield: new FormControl('', [ Validators.required])
      });
  }

  validateEmail() {
      return this.form.get('emailfield').valid || this.form.get('emailfield').untouched;
  }

  validatePassword() {
      return this.form.get('passwordfield').valid || this.form.get('passwordfield').untouched;
  }

  private blockCertainUser(control: FormControl): {[key: string]: string} {
      this.bannedUsers.map((bannedUser) => {
          bannedUser.match(control.value) ? this.emailBanned = false : '';
      });

      return this.emailBanned ? {'errors': 'The email address provided has been banned from accessing our services'} : null;
  }

  login(formValue) {
      console.log(formValue);
  }

}
