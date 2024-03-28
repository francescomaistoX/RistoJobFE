import { ActivatedRoute, Router } from '@angular/router';
import { AnnuncioService } from '../../../Service/annuncio.service';
import { Annuncio } from './../../../Models/annuncio';
import { Component } from '@angular/core';
import regioniData from '../../../../../regioni.json'

interface Regione {
  nome: string;
}

@Component({
  selector: 'app-modifica-annuncio',
  templateUrl: './modifica-annuncio.component.html',
  styleUrl: './modifica-annuncio.component.scss'
})
export class ModificaAnnuncioComponent {
  annuncio:any

  regioni: Regione[] = regioniData;
  idAnnuncio!:number

  constructor(private route:ActivatedRoute,private annuncioSvs:AnnuncioService,private router:Router){
  }

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.idAnnuncio = +params['id']
      console.log(this.idAnnuncio);
      this.annuncio = this.annuncioSvs.getById(this.idAnnuncio).
      subscribe(res=>{this.annuncio=res
     this.annuncio.idAzienda
      }
      )

     } )
    }
    aggiorna(idAzienda:number){
   this.annuncioSvs.aggiorna(this.annuncio,this.idAnnuncio,this.annuncio.idAzienda)
      .subscribe(res => {
        setTimeout(() => {
          this.router.navigate(['dashboardAzienda/annunci/',this.idAnnuncio]);
          }, 4000)


        })

      }

    }


