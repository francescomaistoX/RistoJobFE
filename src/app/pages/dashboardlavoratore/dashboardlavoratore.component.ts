import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthaziendaService } from '../../Service/authazienda.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthlavoratoreService } from '../../Service/authlavoratore.service';
import { Userlavoratore } from '../../Models/userlavoratore';
import { throwError } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ProfiloCandidato } from '../../Models/profilo-candidato';
import { RecensioneService } from '../../Service/recensione.service';
import { Recensione } from '../../Models/recensione';

@Component({
  selector: 'app-dashboardlavoratore',
  templateUrl: './dashboardlavoratore.component.html',
  styleUrl: './dashboardlavoratore.component.scss'
})
export class DashboardlavoratoreComponent {
  constructor( private lavoratoreSvc:AuthlavoratoreService,  private router:Router,
    private route:ActivatedRoute,private sanitizer: DomSanitizer,private recensioneSvc:RecensioneService){

    }
    status: "initial" | "uploading" | "success" | "fail" = "initial";
    file: File | null = null;
    fileUrl: SafeResourceUrl | undefined;
    caricato:boolean= true
  utente:Userlavoratore={
    id: 0,
    nome: '',
    cognome: '',
    cv: '',
    comune: '',
    regione: '',
    email: '',
    password: ''
  }
  recensioni:Recensione[]=[];


ngOnInit(){
  const userData = localStorage.getItem('accessData')


  if (userData) {
    // Parsa i dati JSON
    const parsedData = JSON.parse(userData);

      console.log(parsedData);


    // Estrae il nome e l'email
   this.utente.nome = parsedData.user.nome;
   this.utente.cognome = parsedData.user.cognome;
   this.utente.id    = parsedData.user.id
   this.utente.email = parsedData.user.email
   this.utente.comune= parsedData.user.comune
   this.utente.regione=parsedData.user.regione
   if(parsedData.user.cv!=null){
   this.utente.cv= parsedData.user.cv
   this.caricato=false
  }


}

  }


    onChange(event: any) {
      const file: File = event.target.files[0];

      if (file) {
        this.status = "initial";
        this.file = file;


      }
    }

    onUpload() {
      if (this.file) {
        const formData = new FormData();

        formData.append('cv', this.file, this.file.name);


        const upload$ = this.lavoratoreSvc.caricaCv(this.utente.id,formData);

        this.status = 'uploading';

        upload$.subscribe({
          next: (res) => {
            this.status = 'success';
            return this.fileUrl



          },
          error: (error) => {
            this.status = 'fail';
            this.caricato=false
            return throwError(() => error);

          },
        });
      }
    }
    visualizzaFile(filePath: string) {
      // Costruisci l'URL sicuro utilizzando il percorso del file
      this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(filePath);
      console.log('ciao');

    }
    logout(){
      this.lavoratoreSvc.logout()
    }
   cambioFile(){
    this.caricato=true
   }
   lista(id:number){
    this.recensioneSvc.getAllForIdUtente(id).
    subscribe(res=>this.recensioni=res
 )
 }
  }
