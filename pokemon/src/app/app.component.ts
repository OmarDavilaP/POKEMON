import { Component,EventEmitter, Input, Output } from '@angular/core';
import {SearchPokemonComponent} from './search-pokemon/search-pokemon.component';
import {ListPokemonComponent} from './list-pokemon/list-pokemon.component';
import {DetailPokemonComponent} from './detail/detail-pokemon/detail-pokemon.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public displayName:string;
  public displayMatchedPokemon:Boolean=false;
  public displayHomeContent:Boolean=true;
  public statusData:Boolean;
  public displayDetails:Boolean=false;
  public suggestionsBox:Boolean;
  public sendIdPokemon:number;
  public loadingInfoActive:Boolean=false;
  public loadingInfo:string="Loading information...";
  title = 'app';

  getNamePokemon(nPkmon:string){
    this.displayName=nPkmon;
    this.displayMatchedPokemon=true;
    this.displayHomeContent=false;

  }
  getStatusData(status){
    this.statusData=status;
  }
  displaySingleDetails(idPkmn:number){
    console.log("GOT EXECUTED?",idPkmn)
    this.sendIdPokemon=idPkmn;
    this.detailPokemon(true);
    this.displayMatchedPokemon=false;
  }
  setDisplayDetails(status:Boolean){
    this.displayDetails=status;
  }

  detailPokemon(dtlsPkmn:Boolean){
    this.displayDetails=dtlsPkmn;
    this.suggestionsBox=false;
  }
}
