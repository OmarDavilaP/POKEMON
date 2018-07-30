import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServicePokemonService {
  constructor(private _http: HttpClient) {}

  getPokemon(name:string):Observable<any>{
     return this._http.get('https://raw.githubusercontent.com/OmarDavilaP/services/master/pokemons.json');
  }
  getPokemonDetails(idPkmn:number):Observable<any>{
    return this._http.get('http://pokeapi.salestock.net/api/v2/pokemon/'+idPkmn);
 }  
}
