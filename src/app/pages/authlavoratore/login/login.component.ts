import { Component } from '@angular/core';
import { AuthlavoratoreComponent } from '../authlavoratore.component';
import { AuthlavoratoreService } from '../../../Service/authlavoratore.service';
import { Router } from '@angular/router';
import { Login } from '../../../Models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginData:Login={
    email:'',
    password:''
  }
constructor(private authalavoratoreSvc:AuthlavoratoreService,private router:Router){}
saveLogin(){
  this.authalavoratoreSvc.login(this.loginData)
  .subscribe(data => {
   const Id= data.user.id
    this.router.navigate(['dashboardlavoratore'])
  })

}
}
