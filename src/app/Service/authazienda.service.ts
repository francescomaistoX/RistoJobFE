import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AccessData } from '../Models/access-data';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Registerazienda } from '../Models/registerazienda';
import { Login } from '../Models/login';
import { UserAzienda } from '../Models/userazienda';

@Injectable({
  providedIn: 'root'
})
export class AuthaziendaService {
  apiUrl:string = environment.apiUrl;
loginUrl:string= environment.apiUrl+'/azienda/login';
registerUrl:string= environment.apiUrl+'/azienda/register';
authSubject = new BehaviorSubject<AccessData|null>(null);
jwtHelper:JwtHelperService = new JwtHelperService();
user$ = this.authSubject.asObservable();
isLoggedIn$ = this.user$.pipe(map(user => !!user))

  constructor(private http:HttpClient,private router:Router) {
    this.restoreUser()
   }
   singUp(data:Registerazienda):Observable<AccessData>{
    return this.http.post<AccessData>(this.registerUrl,data)
  }

  login(data:Login):Observable<AccessData>{
    return this.http.post<AccessData>(this.loginUrl,data)
    .pipe(tap(data => {
      this.authSubject.next(data)




      localStorage.setItem('accessData',JSON.stringify(data))
    }))

  }
  logout(){
    this.authSubject.next(null);//comunico al behaviorsubject che il valore da propagare è null
    localStorage.removeItem('accessData');//elimino i dati salvati in localstorage
    this.router.navigate(['/authazienda/login']);//redirect al login
  }
  restoreUser(){

    const userJson:string|null =  localStorage.getItem('accessData');//recupero i dati di accesso
    if(!userJson) return;//se i dati non ci sono blocco la funzione

    const accessData:AccessData = JSON.parse(userJson);//se viene eseguita questa riga significa che i dati ci sono, quindi converto la stringa(che conteneva un json) in oggetto
    if(this.jwtHelper.isTokenExpired(accessData.accessToken)) return;//ora controllo se il token è scaduto, se lo è fermiamo la funzione

    //se nessun return viene eseguito proseguo
    this.authSubject.next(accessData)//invio i dati dell'utente al behaviorsubject

}
getById(id:string):Observable<UserAzienda>{
  return this.http.get<UserAzienda>(this.apiUrl + `/azienda/${id}`);
}
getByIdDTO(id:number):Observable<UserAzienda>{
  return this.http.get<UserAzienda>(this.apiUrl+'/azienda'+'/Dto'+`/${id}`)
}
aggiorna(id:number,azienda:UserAzienda):Observable<UserAzienda>{
  return this.http.put<UserAzienda>(this.apiUrl+'/azienda'+`/${id}`+'/update',azienda)
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
