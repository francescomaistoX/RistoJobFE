
import { Component } from '@angular/core';
import { Registerazienda } from '../../../Models/registerazienda';
import { Router } from '@angular/router';
import { AuthaziendaService } from '../../../Service/authazienda.service';
import regioniData from '../../../../../regioni.json'
interface Regione {
  nome: string;
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  
  regioni: Regione[] = regioniData;

  constructor(private authaziendaSvc:AuthaziendaService,private router:Router){}
  registerDate:Registerazienda={
    nome:"",
    email: "",
    password: "",
    comune: '',
    regione: regioniData[0].nome
  }



  saveR(){
    this.authaziendaSvc.singUp(this.registerDate)
    .subscribe(data=>{
      this.router.navigate(["/authazienda/login"])
    })
  }

}
