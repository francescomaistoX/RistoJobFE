import { Recensione } from './../Models/recensione';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RecensioneService {

  apiUrl:string = environment.apiUrl;
  constructor(private http:HttpClient,private router:Router) { }
  create(recensione: Partial<Recensione>, idDestinatario: number,idRecensore : number) {
    return this.http.post<Recensione>(this.apiUrl+'/recensione', recensione, { params: { idDestinatario: idDestinatario,idRecensore:idRecensore } });
  }
  getAllForIdUtente(idUtente: number) {
    return this.http.get<Recensione[]>(this.apiUrl+`/recensione?idUtente=${idUtente}`);
 }

}
