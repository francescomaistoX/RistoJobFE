import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthlavoratoreRoutingModule } from './authlavoratore-routing.module';
import { AuthlavoratoreComponent } from './authlavoratore.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthlavoratoreComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthlavoratoreRoutingModule,
    FormsModule
  ]
})
export class AuthlavoratoreModule { }
