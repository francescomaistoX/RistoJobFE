import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {  path:'',
     redirectTo: '/home',
     pathMatch: 'full'
},{
  path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'authlavoratore', loadChildren: () => import('./pages/authlavoratore/authlavoratore.module').then(m => m.AuthlavoratoreModule)
   },
  {
     path: 'authazienda', loadChildren: () => import('./pages/authazienda/authazienda.module').then(m => m.AuthaziendaModule),
    },
  { path: 'dashboardAzienda', loadChildren: () => import('./pages/dashboard-azienda/dashboard-azienda.module').then(m => m.DashboardAziendaModule) },
  { path: 'dashboardlavoratore', loadChildren: () => import('./pages/dashboardlavoratore/dashboardlavoratore.module').then(m => m.DashboardlavoratoreModule) },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
