import { Component, OnInit, HostBinding } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: firebase.User;

  constructor(
    private service:LoginService
    ) { }

  ngOnInit() {
    this.service.getLoggedInUser()
    .subscribe(user =>{
      console.log(user);
      this.user = user;
    })
    
  }


  loginGoogle(){
    console.log('Login...');
    this.service.login();
  }

  logout(){
    this.service.logout();
  }
}
