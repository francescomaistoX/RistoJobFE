import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardlavoratoreRoutingModule } from './dashboardlavoratore-routing.module';
import { DashboardlavoratoreComponent } from './dashboardlavoratore.component';
import { HomelComponent } from './homel/homel.component';
import { AnnunciolComponent } from './annunciol/annunciol.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CandidaturaComponent } from './candidatura/candidatura.component';
import { ModificaProfiloComponent } from './modifica-profilo/modifica-profilo.component';


@NgModule({
  declarations: [
    DashboardlavoratoreComponent,
    HomelComponent,
    AnnunciolComponent,
    CandidaturaComponent,
    ModificaProfiloComponent
  ],
  imports: [
    CommonModule,
    DashboardlavoratoreRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class DashboardlavoratoreModule { }
