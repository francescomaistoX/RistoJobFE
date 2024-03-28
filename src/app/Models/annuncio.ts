import { Time } from "@angular/common"
import { UserAzienda } from "./userazienda"

export interface Annuncio {
  id:number
  idAzienda:number
  giornoInizioLavoro: Date
  giornoFineLavoro: Date
  oraInizioLavoro: Date
  OraFineLavoro:Date
  titolo: string
  descrizione:string
  nomeStruttura:string
  numeroCandidati:number
  paga:number
  comune:string
  regione:string
}
