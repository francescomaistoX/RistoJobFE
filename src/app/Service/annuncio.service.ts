import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Annuncio } from '../Models/annuncio';
import { Candidatura } from '../Models/candidatura';

@Injectable({
  providedIn: 'root'
})
export class AnnuncioService {
  apiUrl:string = environment.apiUrl;
  annuncioUrl:string= this.apiUrl+'/annuncio'

  constructor(private http:HttpClient,private router:Router) { }
  getAll():Observable<Annuncio[]>{
    return this.http.get<Annuncio[]>(this.annuncioUrl);
  }
  getById(id:number):Observable<Annuncio>{
    return this.http.get<Annuncio>(this.apiUrl+'/annuncio'+'/Dto'+`/${id}`)
  }
  getAllForIdAzienda(idAzienda: number) {
    return this.http.get<Annuncio[]>(this.apiUrl+`/annuncio/azienda?idAzienda=${idAzienda}`).
    pipe(map(res=>res.reverse()))
  }


  create(annuncio: Partial<Annuncio>, idAzienda: number) {
    return this.http.post<Annuncio>(this.annuncioUrl, annuncio, { params: { idAzienda: idAzienda } });
  }
  aggiorna(annuncio:Annuncio,idAnnuncio:number,idAzienda:number){
    return this.http.put<Annuncio>(this.annuncioUrl+`/${idAnnuncio}`+'/upload',annuncio,{ params: { idAzienda: idAzienda } });
  }

  delete(id:number){
    return this.http.delete<Annuncio>(this.annuncioUrl + `/${id}`);
  }


}
