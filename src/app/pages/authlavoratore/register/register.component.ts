import { Component } from '@angular/core';
import { Registlavoratore } from '../../../Models/registlavoratore';
import { AuthlavoratoreService } from '../../../Service/authlavoratore.service';
import { Router } from '@angular/router';
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

  constructor(private authlavoratoreSvc:AuthlavoratoreService,private router:Router){}
  registerDate:Registlavoratore={
    nome: "",
    email: "",
    password: "",
    comune: '',
    regione: regioniData[0].nome,
    cognome: ''
  }



  saveR(){
    this.authlavoratoreSvc.singUp(this.registerDate)
    .subscribe(data=>{
      this.router.navigate(["/authlavoratore/login"])
    })
  }
}
