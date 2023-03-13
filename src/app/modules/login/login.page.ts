import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email:string = '';
  public password:string = '';
  constructor(
    private authService:AuthService,
  ) { }

  ngOnInit() {

  }


  /**
   * Login
   */
  public Login() {
    this.authService.GetUser(this.email,this.password).subscribe(v =>{
      const user:User = (<any>(v.data)).getUser;
      alert(`Your name is ${user.name}`)
    })
  }

  /**
   * Register
   */
  public Register() {
    this.authService.CreateUser({email:this.email,password:this.password,name:'Example User'}).subscribe(v=>{
      console.log(v);
    })
  }
}
