import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  formSignup = this.fb.group({
    username: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirmPassword: ['']
  })

  constructor(private fb: FormBuilder, private back: Router, private auth: AuthService) {

  }
  onHandleSubmit() {
    if (this.formSignup.valid) {
      this.auth.signup(this.formSignup.value).subscribe(data => {
        console.log(data);
        this.back.navigate(['', 'signin'])
      })
    }
  }
}
