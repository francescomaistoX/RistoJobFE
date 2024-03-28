import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthaziendaComponent } from './authazienda.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '', component: AuthaziendaComponent
   },
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthaziendaRoutingModule { }
