import { Component } from '@angular/core';
import { AuthaziendaService } from '../../Service/authazienda.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAzienda } from '../../Models/userazienda';

@Component({
  selector: 'app-dashboard-azienda',
  templateUrl: './dashboard-azienda.component.html',
  styleUrl: './dashboard-azienda.component.scss'
})
export class DashboardAziendaComponent {

  constructor( private aziendaSvc:AuthaziendaService,  private router:Router,
    private route:ActivatedRoute){}
    name: string | null = null;
    email: string | null = null;

ngOnInit(){
  const userData = localStorage.getItem('accessData')


  if (userData) {
    // Parsa i dati JSON
    const parsedData = JSON.parse(userData);


    // Estrae il nome e l'email
    this.name = parsedData.user.nome;
    this.email = parsedData.user.email;

}
  }
  logout(){
    this.aziendaSvc.logout()
  }

}
