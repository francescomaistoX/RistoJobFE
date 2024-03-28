import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardlavoratoreComponent } from './dashboardlavoratore.component';
import { HomelComponent } from './homel/homel.component';
import { AnnunciolComponent } from './annunciol/annunciol.component';
import { CandidaturaComponent } from './candidatura/candidatura.component';
import { ModificaProfiloComponent } from './modifica-profilo/modifica-profilo.component';

const routes: Routes = [{ path: '', component: DashboardlavoratoreComponent },
{ path: 'homel', component: HomelComponent ,
children:[
  {path:':id',component:AnnunciolComponent},
  {path:':id/candidatura',component:CandidaturaComponent}
]},
{path:'modifica',component:ModificaProfiloComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardlavoratoreRoutingModule { }
