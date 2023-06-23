import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SporityHttpService } from 'src/app/services/spority-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  nuevaCanciones : any = []
  loading = true;


  constructor( private _http:HttpClient, private _services:SporityHttpService ){

    // Ejemplo de como hacer una consulta get con un API
    // this._http.get('https://restcountries.com/v3.1/lang/spanish').subscribe( (data:any) => {
    //   this.paises = data;
    //   console.log({data})
    // })

    this._services.getServicesHttp().subscribe( (data : any) => {

      setTimeout(() => {
        this.nuevaCanciones = data;
        this.loading = false;
        console.log(this.nuevaCanciones);
      }, 1000);

    } );

  }

}
