import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {

  @Input() cancion : any;

  constructor( private _ruta : Router ){}

  verArtista = ( item : any ) => {
    let albumId = item.id;
    this._ruta.navigate([ '/artists', albumId ]);
  }

}
