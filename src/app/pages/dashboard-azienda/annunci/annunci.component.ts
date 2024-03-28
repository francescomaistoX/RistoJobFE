import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnuncioService } from '../../../Service/annuncio.service';
import { Annuncio } from '../../../Models/annuncio';

@Component({
  selector: 'app-annunci',
  templateUrl: './annunci.component.html',
  styleUrl: './annunci.component.scss'
})
export class AnnunciComponent {
  constructor(private route: ActivatedRoute,private annuncioSvc: AnnuncioService) { }
annunci:Annuncio[]=[]
idAzienda: number | null = null;

  ngOnInit(): void {
    const userData = localStorage.getItem('accessData')

  if (userData) {
    // Parsa i dati JSON
    const parsedData = JSON.parse(userData);
    console.log(parsedData);



    // Estrae il nome e l'email
    this.idAzienda = +parsedData.user.id;

    console.log(this.idAzienda);
  this.annuncioSvc.getAllForIdAzienda(this.idAzienda).
  subscribe(res=>this.annunci=res)



}

  }
}



