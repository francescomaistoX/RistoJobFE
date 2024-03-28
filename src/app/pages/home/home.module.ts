import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CandidaturaComponent } from '../dashboardlavoratore/candidatura/candidatura.component';
import { AnnunciohComponent } from './annuncioh/annuncioh.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    AnnunciohComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule

  ]
})
export class HomeModule {

}
