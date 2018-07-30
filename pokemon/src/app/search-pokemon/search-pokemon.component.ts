import { Component, OnInit,EventEmitter, Input, Output,OnChanges } from '@angular/core';
import {ServicePokemonService} from '../services/service-pokemon.service';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent implements OnInit,OnChanges {
  public obj;
  public resName:Object;
  public dataAvailable;
  public suggestions:Boolean;
  public searchDisplayBehavior:Boolean; // have the control where display the information
  @Output()  displayName= new EventEmitter();
  @Output()  dataAvailableEmitter= new EventEmitter();
  @Output()  displayDetailsSingleView= new EventEmitter(); //emiter to tell to search component display the data details direclty without list-component
  @Output()  displayDetailsEmmitter =new EventEmitter(); 
  @Input()   activeSuggestions;
  constructor(private servicePokemon:ServicePokemonService) {}

  ngOnInit() {
    this.suggestions=false;
    this.servicePokemon.getPokemon(name).subscribe((res)=>{
    this.obj=res;
  }
    );
  }

  searchPokemon(event:any):void{
          let namePokemon:string= event.target.value;
          this.resName=this.searchItemPkmn(namePokemon);
          this.dataAvailable=(Object.keys(this.resName).length!=0)?true:false;
          if(this.dataAvailable==false){ this.resName=this.dataAvailable;}
          if(this.activeSuggestions==false){this.suggestions=false;}
          if(this.suggestions){this.fireEvent()};
        }
  searchItemPkmn(namePokemon){
   return this.obj.pokemons.filter(res=>res.name.toLowerCase().indexOf(namePokemon.toLowerCase())>=0);
  }
  displayList(objectPkmn):void{
    console.log(objectPkmn);
    this.resName=[objectPkmn];
      if(this.searchDisplayBehavior==false){ //detect that details Pokemon is active and display information
          this.displayDetailsSingleView.emit(objectPkmn);
          this.suggestions=true;
      }else{
        this.fireEvent();
        this.suggestions=true;
      }

  }

  displayListEnter(event){
      this.resName=this.searchItemPkmn(event.target.value);
      this.fireEvent();
      this.suggestions=true;
      this.displayDetailsEmmitter.emit(false);
  } 

  fireEvent(){ //emit variables from search component
      console.log("fireEvent",this.resName);
      this.displayName.emit(this.resName);
      this.dataAvailableEmitter.emit(this.dataAvailable);
  }
  ngOnChanges(changes){
      this.searchDisplayBehavior=changes.activeSuggestions.currentValue; //variable to detect that details Pokemon is active and display information 
  }
  hideSuggestion(status:Boolean){
    this.suggestions=status;
  }
}
