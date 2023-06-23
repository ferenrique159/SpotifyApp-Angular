import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SporityHttpService } from 'src/app/services/spority-http.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {

  artistaUnico : any;
  topTraks :any;
  loader = true;

  constructor( private _activatedRoute : ActivatedRoute, private _services:SporityHttpService ){

    // ActivatedRouter es para saber cual es la ruta actual mandada al llegar a la ruta donde es implementado
    this._activatedRoute.params.subscribe( data => {
      setTimeout(() => {
        this.getArtista(data['id']);
        this.getTraks(data['id']);
        this.loader = false;
      }, 500);
    });
  }

  getArtista = ( id : string ) => {
    this._services.getArtSelect( id ).subscribe( data => {
      this.artistaUnico = data;
    });
  }

  getTraks = ( id : string ) => {
    this._services.getTopTraks( id ).subscribe( data => {
        this.topTraks = data;
    });
  }

}
