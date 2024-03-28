import { Component } from '@angular/core';
import { Annuncio } from '../../../Models/annuncio';
import { AnnuncioService } from '../../../Service/annuncio.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homel',
  templateUrl: './homel.component.html',
  styleUrl: './homel.component.scss'
})
export class HomelComponent {
  annunci:Annuncio[]=[];
  idLavoratore!:number
  constructor(private annuncioSvc:AnnuncioService,private route: ActivatedRoute){

  }
  ngOnInit(){
    this.route.params.subscribe(params => {
      this.idLavoratore = +params['id']
    this.annuncioSvc.getAll().subscribe(data => this.annunci = data)
    })

}
}
