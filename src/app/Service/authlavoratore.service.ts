import { Userlavoratore } from './../Models/userlavoratore';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { AccessData } from '../Models/access-data';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Registlavoratore } from '../Models/registlavoratore';
import { Login } from '../Models/login';
import { __param } from 'tslib';
import { ProfiloCandidato } from '../Models/profilo-candidato';


@Injectable({
  providedIn: 'root'
})
export class AuthlavoratoreService {
apiUrl:string = environment.apiUrl;
loginUrl:string= environment.apiUrl+'/collaboratore/login';
registerUrl:string= environment.apiUrl+'/collaboratore/register';
authSubject = new BehaviorSubject<AccessData|null>(null);
jwtHelper:JwtHelperService = new JwtHelperService();
user$ = this.authSubject.asObservable();//contiene i dati dell'utente loggato oppure null
isLoggedIn$ = this.user$.pipe(map(user => !!user))

  constructor(private http:HttpClient,private router:Router) {
    this.restoreUser()
   }
  singUp(data:Registlavoratore):Observable<AccessData>{
    return this.http.post<AccessData>(this.registerUrl,data)
  }
  login(data:Login):Observable<AccessData>{
    return this.http.post<AccessData>(this.loginUrl,data)
    .pipe(tap(data => {
      this.authSubject.next(data)
      localStorage.setItem('accessData',JSON.stringify(data))
    }))
  }
  getById(id:number):Observable<ProfiloCandidato>{
    return this.http.get<ProfiloCandidato>(this.apiUrl + `/collaboratore/${id}`);}
  logout(){
    this.authSubject.next(null);//comunico al behaviorsubject che il valore da propagare è null
    localStorage.removeItem('accessData');//elimino i dati salvati in localstorage
    this.router.navigate(['/authlavoratore/login']);//redirect al login
  }
  restoreUser(){

    const userJson:string|null =  localStorage.getItem('accessData');//recupero i dati di accesso
    if(!userJson) return;//se i dati non ci sono blocco la funzione

    const accessData:AccessData = JSON.parse(userJson);//se viene eseguita questa riga significa che i dati ci sono, quindi converto la stringa(che conteneva un json) in oggetto
    if(this.jwtHelper.isTokenExpired(accessData.accessToken)) return;//ora controllo se il token è scaduto, se lo è fermiamo la funzione

    //se nessun return viene eseguito proseguo
    this.authSubject.next(accessData)//invio i dati dell'utente al behaviorsubject

}
getByIdDTO(id:number):Observable<Userlavoratore>{
  return this.http.get<Userlavoratore>(this.apiUrl+'/collaboratore'+'/Dto'+`/${id}`)
}
caricaCv(id:number,cv:FormData):Observable<string>{
  return this.http.post<string>(this.apiUrl + `/collaboratore/${id}/cv`,cv);}

  aggiorna(lavoratore:Userlavoratore,idLavoratore:number){
    return this.http.put<Userlavoratore>(this.apiUrl+'/collaboratore'+`/${idLavoratore}`+'/update',lavoratore)
  }

errors(err: any) {
  switch (err.error) {
      case "Email and Password are required":
          return new Error('Email e password obbligatorie');
          break;
      case "Email already exists":
          return new Error('Utente esistente');
          break;
      case 'Email format is invalid':
          return new Error('Email scritta male');
          break;
      case 'Cannot find user':
          return new Error('utente inesistente');
          break;
          default:
      return new Error('Errore');
          break;
  }
}
}
