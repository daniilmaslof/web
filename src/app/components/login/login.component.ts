import { Component, OnInit, ViewChild } from '@angular/core';
import {ReactiveFormsModule, ValidatorFn, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Lecture} from "../../models/lecture";
import {User} from "../../models/user";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  form1: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) {
    this.form1 = this.fb.group(
      {
        mail: ['', Validators.required],
        password: ['', Validators.required]
      });
  }
  login() {
    if (this.form1.valid) {
      const val = this.form1.value;
this.auth.login(val.mail, val.password).subscribe(
  () => { this.router.navigateByUrl('/');
  }
);
    }
  }
  ngOnInit() {
  }

}
