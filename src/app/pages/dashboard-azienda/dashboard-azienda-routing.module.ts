import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAziendaComponent } from './dashboard-azienda.component';
import { AnnunciComponent } from './annunci/annunci.component';
import { CreaAnnunciComponent } from './crea-annunci/crea-annunci.component';

import { AnnuncioComponent } from './annuncio/annuncio.component';
import { ModificaAnnuncioComponent } from './modifica-annuncio/modifica-annuncio.component';
import { ModificaProfiloComponent } from './modifica-profilo/modifica-profilo.component';


const routes: Routes = [

 {path: '',
  component: DashboardAziendaComponent,},


  { path: 'annunci', component: AnnunciComponent,
children:[
  { path: ':id', component: AnnuncioComponent},
{ path: 'modifica/:id', component: ModificaAnnuncioComponent }
] },
  { path: 'creaAnnuncio', component: CreaAnnunciComponent },
  { path: 'modificaP', component: ModificaProfiloComponent },

]






@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAziendaRoutingModule { }
