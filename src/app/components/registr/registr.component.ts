import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../models/user";

@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.css']
})
export class RegistrComponent implements OnInit {
  ngOnInit() {
  }
  user = new User();
  constructor(private router: Router , private auth: AuthService) {}
  // onRegister(): void {
  //   this.auth.register(this.user)
  //     .then((user) => {
  //       localStorage.setItem('token', user.json().auth_token);
  //       this.router.navigateByUrl('/status');
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

}
