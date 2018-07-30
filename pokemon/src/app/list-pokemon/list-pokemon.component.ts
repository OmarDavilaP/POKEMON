import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {
  @Input() namePokemon;
  @Input() statusData;
  @Output() detailsPokemon = new EventEmitter();

  public displayList:Boolean;
  constructor() { }

  ngOnInit() {
    this.displayMatchedPokemon();
  }

  displayMatchedPokemon(){
    this.displayList=(Object.keys(this.namePokemon).length>0)?true:false;

  }

  displayDetails(pkmnDetails){
      this.detailsPokemon.emit(pkmnDetails);
  }

}
