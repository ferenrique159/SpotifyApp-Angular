import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SporityHttpService } from 'src/app/services/spority-http.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  cantante : any = [];
  loading = false;

  constructor( private _services:SporityHttpService, private _ruta : Router ){ }

  buscar = ( termino : string ) => {

    this.loading = true

    this._services.getArtists( termino ).subscribe( (data : any) => {
        setTimeout(() => {
          this.cantante = data;
          this.loading = false;
        }, 1000);
    })
  };

  verArtista = (individual : any) => {
    let artistaId = individual.id;
    this._ruta.navigate([ '/artists', artistaId ]);
  }



}
