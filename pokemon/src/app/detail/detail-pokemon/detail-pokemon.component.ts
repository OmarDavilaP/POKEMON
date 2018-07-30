import { Component, OnInit,EventEmitter, Input, Output,OnChanges  } from '@angular/core';
import {ServicePokemonService} from '../../services/service-pokemon.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit,OnChanges {
  @Input() sendIdPokemon;
  @Output()  suggestionsEmitter= new EventEmitter<any>();
  public detailPkmn;
  public loadingInfo:Boolean=true;
  constructor(private detailPokemon:ServicePokemonService) { }

  ngOnInit() {
    this.suggestionsEmitter.emit(true); //send message to parents that details are active
    this.getDetailPokemon(this.sendIdPokemon.id);
  }

  getDetailPokemon(pkmnId:number){
    this.loadingInfo=false;
    this.detailPokemon.getPokemonDetails(pkmnId).subscribe((res)=>{
      this.detailPkmn=res;
      this.loadingInfo=true;
    }
  )};
  ngOnChanges(changes){
    //console.log(changes.sendIdPokemon);
    if(changes.sendIdPokemon.firstChange===false){
      this.getDetailPokemon(changes.sendIdPokemon.currentValue.id);      
    }
    
 }
}
