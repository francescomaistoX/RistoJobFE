import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AnnuncioService } from '../../../Service/annuncio.service';

@Component({
  selector: 'app-annunciol',
  templateUrl: './annunciol.component.html',
  styleUrl: './annunciol.component.scss'
})
export class AnnunciolComponent {
  idAnnuncio!:number
annuncio:any


  constructor(private route:ActivatedRoute,private annuncioSvs:AnnuncioService,private router: Router){
  }
  ngOnInit(){

    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.idAnnuncio=+params.get('id')!
      console.log(this.idAnnuncio);
      this.annuncio=this.annuncioSvs.getById(this.idAnnuncio).
      subscribe(res =>this.annuncio=res)
    })
  }
}
