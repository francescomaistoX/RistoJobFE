import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthaziendaRoutingModule } from './authazienda-routing.module';
import { AuthaziendaComponent } from './authazienda.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AuthaziendaComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthaziendaRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AuthaziendaModule { }
