import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  credentials !: FormGroup;
  constructor(
    private authService : AuthService,
    private router : Router,
    private formBuilder : FormBuilder
  ) { }

  get email () {return this.credentials.get('email');}
  get password ()  {return this.credentials.get('password');}
  
  ngOnInit() {
    this.credentials = this.formBuilder.group({
      email:['', Validators.required, Validators.email],
      password:['', Validators.required, Validators.minLength(6)]
    })
  }

}
