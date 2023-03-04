import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName = "";
  passWord = "";
  errorMsg = "";

  constructor(private auth : AuthService , private router : Router){

  }

  ngOnInit(): void{

  }


  login(){
    if(this.userName.trim().length === 0){
      this.errorMsg  =  "UserName is required !";
    }else if(this.passWord.trim().length === 0){
      this.errorMsg  =  "PassWord is required !";
  }else{
    this.errorMsg = "";
    let res = this.auth.login(this.userName , this.passWord);
    if(res === 200){
      this.router.navigate(['home'])
    }
    if(res === 403){
      this.errorMsg = "Invalid Credintials"
    }
  }
  }
}
