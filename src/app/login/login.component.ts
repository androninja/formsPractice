import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  "loginForm":FormGroup;
  isSumbitted=false;


  constructor(private router:Router,private formBuilder:FormBuilder,
    private service:AuthService) { }

  ngOnInit(): void {
    this.loginForm =this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  get formControls(){
    return this.loginForm.controls;
  }

  login(){
    this.isSumbitted=true;
    if(this.loginForm.invalid){
      return;
    }
    this.service.login();
    this.router.navigateByUrl("admin");
  }

}
