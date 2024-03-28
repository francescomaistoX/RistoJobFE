import { Component } from '@angular/core';
import { Userlavoratore } from '../../../Models/userlavoratore';
import { Router } from '@angular/router';
import { AuthlavoratoreService } from '../../../Service/authlavoratore.service';
import regioniData from '../../../../../regioni.json'
interface Regione {
  nome: string;
}
@Component({
  selector: 'app-modifica-profilo',
  templateUrl: './modifica-profilo.component.html',
  styleUrl: './modifica-profilo.component.scss'
})
export class ModificaProfiloComponent {
  lavoratore:Userlavoratore={
    id: 0,
    nome: '',
    cognome: '',
    comune: '',
    regione: '',
    email: '',
    password: '',
    cv: ''
  }
  regioni: Regione[] = regioniData;
 constructor( private lavoratoreSvc:AuthlavoratoreService,  private router:Router,){}
 ngOnInit(){
  const userData = localStorage.getItem('accessData')


  if (userData) {

    const parsedData = JSON.parse(userData);
    this.lavoratoreSvc.getByIdDTO(parsedData.user.id).
    subscribe(res=>this.lavoratore=res
    )

}
  }
  aggiorna(idLavoratore:number){
    this.lavoratoreSvc.aggiorna(this.lavoratore,this.lavoratore.id).
    subscribe(res=>{
      setTimeout(() => {
        this.router.navigate(['dashboardlavoratore']);
        }, 4000)
    }
    )
  }

}
