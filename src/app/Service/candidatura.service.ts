
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Candidatura } from '../Models/candidatura';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidaturaService {
  apiUrl:string = environment.apiUrl;
  constructor(private http:HttpClient,private router:Router) { }

  getAllForIdAnnuncio(idAnnuncio: number) {
     return this.http.get<Candidatura[]>(this.apiUrl+`/candidatura?idAnnuncio=${idAnnuncio}`);
  }
  create(candidatura: Partial<Candidatura>, idAnnuncio: number,idCandidato : number) {
    return this.http.post<Candidatura>(this.apiUrl+'/candidatura', candidatura, { params: { idAnnuncio: idAnnuncio,idCandidato:idCandidato } });
  }
  getByIdCandidatura(id:number):Observable<Candidatura>{
    return this.http.get<Candidatura>(this.apiUrl+'/candidatura'+'/Dto'+`/${id}`)
  }
}
