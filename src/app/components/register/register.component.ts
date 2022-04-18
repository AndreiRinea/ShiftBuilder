import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor() { }

  ngOnInit(): void {
  }

  get username() {
    let usernameControl = this.registerForm.get("username") as FormControl;
    return usernameControl.value;
  }

  register() {
    console.log(this.username);
    console.log(this.registerForm.invalid);
  }
}
