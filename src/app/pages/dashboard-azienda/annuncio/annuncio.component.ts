import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AnnuncioService } from '../../../Service/annuncio.service';
import { Annuncio } from '../../../Models/annuncio';
import { Candidatura } from '../../../Models/candidatura';
import { CandidaturaService } from '../../../Service/candidatura.service';
import { AuthlavoratoreService } from '../../../Service/authlavoratore.service';
import { ProfiloCandidato } from '../../../Models/profilo-candidato';
import { Recensione } from '../../../Models/recensione';
import { RecensioneService } from '../../../Service/recensione.service';
import { Userlavoratore } from '../../../Models/userlavoratore';

@Component({
  selector: 'app-annuncio',
  templateUrl: './annuncio.component.html',
  styleUrl: './annuncio.component.scss'
})
export class AnnuncioComponent {
  idAnnuncio!:number
  annuncio:any
  candidature:Candidatura[]=[]
   profiloUtente:ProfiloCandidato={
     id: 0,
     nome: '',
     cognome: '',
     cv: '',
     comune: '',
     regione: '',
     email: ''
   }
   recensione:Partial<Recensione>={
     id: 0,
     testo: '',
     data: new Date,
     utenteRecensore: 0,
     utenteRecensito: 0
   }
   recensioni:Recensione[]=[];


  constructor(private route:ActivatedRoute,private annuncioSvs:AnnuncioService,private candidaturaSvc:CandidaturaService,private utenteSvc:AuthlavoratoreService,private recensioneSvc:RecensioneService,private router:Router){}
  ngOnInit(){
    this.route.params.subscribe(params => {
      this.idAnnuncio = +params['id']
      console.log(this.idAnnuncio);
      this.annuncio = this.annuncioSvs.getById(this.idAnnuncio).
      subscribe(res=>this.annuncio=res
      )
      this.candidaturaSvc.getAllForIdAnnuncio(this.idAnnuncio).
      subscribe(res=>{this.candidature=res
      this.candidature.forEach(c=> this.utenteSvc.getByIdDTO(c.idCollaboratore).
      subscribe(res=>this.profiloUtente=res
      )
      )}
      )
     } )
    }






    salvaRecensione(idDestinatario:number){
      const userData = localStorage.getItem('accessData')
      if (userData) {
        // Parsa i dati JSON
        const parsedData = JSON.parse(userData);
        const idRecensore =parsedData.user.id
        this.recensione.utenteRecensore=parsedData.user.id
        this.recensione.utenteRecensito=idDestinatario;
       this.recensioneSvc.create(this.recensione,idDestinatario,idRecensore).
        subscribe(res=>console.log(res)
        )

  }
          this.recensione.testo=""
    }
   lista(id:number){
   this.recensioneSvc.getAllForIdUtente(id).
   subscribe(res=>this.recensioni=res
)
}
elimina(idAnnuncio:number){
this.annuncioSvs.delete(idAnnuncio).subscribe
(res=>{
  this.router.navigate(['dashboardAzienda'])
}
)
}

}

