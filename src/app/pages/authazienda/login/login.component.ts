import { Component } from '@angular/core';
import { Login } from '../../../Models/login';
import { AuthaziendaService } from '../../../Service/authazienda.service';
import { Router } from '@angular/router';

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
constructor(private authaziendaSvc:AuthaziendaService,private router:Router){}
saveLogin(){
  this.authaziendaSvc.login(this.loginData)
  .subscribe(data => {
   const aziendaId= data.user.id
    this.router.navigate(['dashboardAzienda'])
  })

}
}
