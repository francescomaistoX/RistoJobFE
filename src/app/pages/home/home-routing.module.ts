import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AnnunciohComponent } from './annuncioh/annuncioh.component';
import { CandidaturaComponent } from '../dashboardlavoratore/candidatura/candidatura.component';

const routes: Routes = [{ path: '', component: HomeComponent,
children:[
  {path:':id',component:AnnunciohComponent}
]}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
