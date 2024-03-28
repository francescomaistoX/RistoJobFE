import { Component } from '@angular/core';
import regioniData from '../../../../../regioni.json'
import { UserAzienda } from '../../../Models/userazienda';
import { Router } from '@angular/router';
import { AuthaziendaService } from '../../../Service/authazienda.service';
interface Regione {
  nome: string;
}
@Component({
  selector: 'app-modifica-profilo',
  templateUrl: './modifica-profilo.component.html',
  styleUrl: './modifica-profilo.component.scss'
})
export class ModificaProfiloComponent {
  regioni: Regione[] = regioniData;
  azienda:UserAzienda={
    id: 0,
    nome: '',
    email: '',
    password: '',
    comune: '',
    regione: ''
  }
constructor( private router:Router,private aziendaSvc:AuthaziendaService){}

ngOnInit(){
  const userData = localStorage.getItem('accessData')


  if (userData) {

    const parsedData = JSON.parse(userData);
    this.aziendaSvc.getByIdDTO(parsedData.user.id).
    subscribe(res=>this.azienda=res
    )

}
  }
  aggiorna(idLavoratore:number){
    this.aziendaSvc.aggiorna(this.azienda.id,this.azienda).
    subscribe(res=>{
      setTimeout(() => {
        this.router.navigate(['dashboardazienda']);
        }, 4000)
    }
    )
  }
}
