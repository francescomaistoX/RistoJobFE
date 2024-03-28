import { Component } from '@angular/core';
import { Annuncio } from '../../Models/annuncio';
import { AnnuncioService } from '../../Service/annuncio.service';
import { ActivatedRoute } from '@angular/router';
import regioniData from '../../../../regioni.json';

interface Regione {
  nome: string;
}
interface Filtro {
  comune: string;
  regione:String;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  filtro:Filtro={
    comune: '',
    regione: regioniData[0].nome
  }
  regioni: Regione[] = regioniData;
  annunci:Annuncio[]=[];
  idAnnuncio!:number
  annunciFiltrati:Annuncio[]=[]
  mostra:Boolean=true

  constructor(private annuncioSvc:AnnuncioService,private route: ActivatedRoute){

  }


  ngOnInit(){
     this.annuncioSvc.getAll().subscribe(data => this.annunci = data)


}
filtra() {

  if (this.filtro.comune) {

    this.mostra=false
    const comuneFiltro = this.filtro.comune.toLowerCase();
    this.annunciFiltrati = this.annunci.filter(annuncio =>
      annuncio.comune.toLowerCase() === comuneFiltro
 );
  }
  else if(this.filtro.regione){
    if(this.filtro.regione==='inserisci regione'){
      this.mostra=false
      this.annunciFiltrati=this.annunci

    }else{
    this.mostra=false
    const regioneFiltro = this.filtro.regione.toLowerCase();
    this.annunciFiltrati = this.annunci.filter(annuncio =>
      annuncio.regione.toLowerCase() === regioneFiltro)}
  }


}
}
