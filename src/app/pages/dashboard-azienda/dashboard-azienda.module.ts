import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAziendaRoutingModule } from './dashboard-azienda-routing.module';
import { DashboardAziendaComponent } from './dashboard-azienda.component';
import { AnnunciComponent } from './annunci/annunci.component';
import { CreaAnnunciComponent } from './crea-annunci/crea-annunci.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AnnuncioComponent } from './annuncio/annuncio.component';
import { ModificaAnnuncioComponent } from './modifica-annuncio/modifica-annuncio.component';
import { ModificaProfiloComponent } from './modifica-profilo/modifica-profilo.component';



@NgModule({
  declarations: [
    DashboardAziendaComponent,
    AnnunciComponent,
    CreaAnnunciComponent,
    AnnuncioComponent,
    ModificaAnnuncioComponent,
    ModificaProfiloComponent,

  ],
  imports: [
    CommonModule,
    DashboardAziendaRoutingModule,
    FormsModule,
    HttpClientModule,

  ]
})
export class DashboardAziendaModule { }
