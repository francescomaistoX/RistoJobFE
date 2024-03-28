import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AnnuncioService } from '../../../Service/annuncio.service';
import { Annuncio } from '../../../Models/annuncio';


@Component({
  selector: 'app-annuncioh',
  templateUrl: './annuncioh.component.html',
  styleUrl: './annuncioh.component.scss'
})
export class AnnunciohComponent {
  idAnnuncio!:number
annuncio:any={
  id: 0,
  idAzienda: 0,
  giornoInizioLavoro: new Date,
  giornoFineLavoro: new Date,
  oraInizioLavoro: new Date,
  OraFineLavoro: new Date,
  titolo: '',
  descrizione: '',
  nomeStruttura: '',
  numeroCandidati: 0,
  paga: 0,
  comune: '',
  regione: ''
}



  constructor(private route:ActivatedRoute,private annuncioSvs:AnnuncioService){}



  ngOnInit(){
    this.route.params.subscribe(params => {
      this.idAnnuncio = +params['id']
      console.log(this.idAnnuncio);
      this.annuncio = this.annuncioSvs.getById(this.idAnnuncio).
      subscribe(res=>this.annuncio=res)
     })
  }
}
