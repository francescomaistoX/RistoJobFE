import { Annuncio } from "./annuncio"
import { Notifica } from "./notifica"
import { Recensione } from "./recensione"

export interface UserAzienda {
  id:number
  nome:string
  comune   :string
  regione  :string
  email:string
  password:string


}
