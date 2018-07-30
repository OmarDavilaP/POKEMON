import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule}  from '@angular/common/http';


import { AppComponent } from './app.component';
import {SearchPokemonComponent} from './search-pokemon/search-pokemon.component';
import {ListPokemonComponent} from './list-pokemon/list-pokemon.component';
import {DetailPokemonComponent} from './detail/detail-pokemon/detail-pokemon.component';
import {VersionPokemonComponent} from './detail/version-pokemon/version-pokemon.component';

/*services*/ 
 import {ServicePokemonService} from './services/service-pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchPokemonComponent,
    ListPokemonComponent,
    DetailPokemonComponent,
    VersionPokemonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ServicePokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }