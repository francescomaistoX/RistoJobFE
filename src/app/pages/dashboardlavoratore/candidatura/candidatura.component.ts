import { Component } from '@angular/core';
import { Candidatura } from '../../../Models/candidatura';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CandidaturaService } from '../../../Service/candidatura.service';

@Component({
  selector: 'app-candidatura',
  templateUrl: './candidatura.component.html',
  styleUrl: './candidatura.component.scss'
})
export class CandidaturaComponent {

constructor(private route:ActivatedRoute, private candidaturaSvc:CandidaturaService,private router:Router){}
candidatura:Candidatura={
  id: 0,
  nomeCandidato: '',
  cognomeCandidato: '',
  email: '',
  idAnnuncio: 0,
  idCollaboratore: 0
}
idAnnuncio!:number
idCandidato!:number

ngOnInit(){
  this.route.paramMap.subscribe((params:ParamMap)=>{
    this.idAnnuncio=+params.get('id')!

  })
  const userData = localStorage.getItem('accessData')


  if (userData) {
    // Parsa i dati JSON
    const parsedData = JSON.parse(userData);

    this.idCandidato    = parsedData.user.id
    this.candidatura.idAnnuncio=this.idAnnuncio;
    this.candidatura.idCollaboratore=this.idCandidato;




}
}
invia(){
 this.candidaturaSvc.create(this.candidatura,this.idAnnuncio,this.idCandidato).
 subscribe(res=>  this.router.navigate(['dashboardlavoratore/homel'])
 )
}
}
