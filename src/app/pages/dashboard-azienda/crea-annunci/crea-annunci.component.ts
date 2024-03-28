import { Time } from '@angular/common';
import { AnnuncioService } from './../../../Service/annuncio.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import regioniData from '../../../../../regioni.json'
import { Annuncio } from '../../../Models/annuncio';
interface Regione {
  nome: string;
}

@Component({
  selector: 'app-crea-annunci',
  templateUrl: './crea-annunci.component.html',
  styleUrl: './crea-annunci.component.scss'
})
export class CreaAnnunciComponent {
  regioni: Regione[] = regioniData;
  constructor(private route: ActivatedRoute,private annuncioSvc:AnnuncioService,private router:Router) { }
  annuncioData:Partial<Annuncio>={
     regione: regioniData[0].nome,
     giornoInizioLavoro:new Date(),
     giornoFineLavoro:new Date(),
     oraInizioLavoro:new Date(),
     OraFineLavoro:new Date(),
    }
   salvato:boolean=true;
   idAzienda!: number;


  ngOnInit(): void {


    const userData = localStorage.getItem('accessData')


    if (userData) {
      // Parsa i dati JSON
      const parsedData = JSON.parse(userData);
      console.log(parsedData.user.id);

      this.idAzienda= parsedData.user.id;


  }
    };

save(){

  this.annuncioSvc.create(this.annuncioData,this.idAzienda)
  .subscribe(res => {console.log(res)
    this.salvato=false

    setTimeout(() => {
    this.router.navigate(['dashboardAzienda']);
    }, 5000);

  })

}


}


