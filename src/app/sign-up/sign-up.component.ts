import { Component, OnInit } from '@angular/core';
import { User } from 'src/user';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  //Property for gender
  public gender!: string[];
  //Proprty for user
  public user!: User;

  constructor() { }

  ngOnInit(): void {

    this.gender = ['Male', 'Female', 'Others'];

    //Create new user object
    this.user = new User({
      email: "", pwd: "", confirmPwd: "", gender: this.gender[0], terms: false

    });

  }
}
