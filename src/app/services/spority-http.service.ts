import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SporityHttpService {

  constructor( private _http:HttpClient ) { }


  getQuery( query : any ){

    const url = `https://api.spotify.com/v1/${ query } `;

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQCUMIlcHBjSaRntaL4s3GfcbbFKj61pu42_JppF3O6v6iqB6WjAk6_ScC25dDWfBOs6mSrmmoTYsUfk4hjUnimzM8D09VvtF6LIAdaZ--98Oo-OlEU'
    });

    return this._http.get(url,{headers});
  }



  getServicesHttp = () => {
      // Literalmente el map es utilizado como en js, la diferencia que para poder usarlo hay que llamar primero el pipe, ya que este se entiende que es un transformador de datos y typeScript entiende que lo que viene luego del pipe es una transformador
      return this.getQuery(`browse/new-releases?limit=10`).pipe(map( (data : any ) => {
          return data.albums.items
      }));
  }


  getArtists = ( termino:string ) => {
    return this.getQuery(`search?q=${ termino }&type=artist`).pipe(map( (data : any ) => {
      return data.artists.items
    }));
  }

  getArtSelect = ( id : string ) => {
    return this.getQuery(`artists/${id}`);
  }

  getTopTraks = ( id : string ) => {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map( (data : any ) => {
      console.log(data.tracks)
      return data.tracks
    }));
  }
}
