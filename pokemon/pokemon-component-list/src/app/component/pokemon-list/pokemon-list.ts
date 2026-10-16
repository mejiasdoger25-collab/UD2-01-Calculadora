import { Component } from '@angular/core';

const POKEMON: Pokemon [] = [
  {
    id: 1,
    name: "pepe",
    type: "agua",
    photoUrl: "https://imgs.search.brave.com/beVFYFpRIA_l3DItQpGD6zWtMWji-_-RaVz1wCfFozE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hbGJ1/bWl6ci5jb20vaWEv/MzE4MTljNDA0YmE4/ODA1MTNhZjg2Yjk4/OThlMTE0MzIuanBn"
  }
]

@Component({
  imports: [],
  selector: 'app-pokemon-list',
  styleUrl: './pokemon-list.css',
  templateUrl: './pokemon-list.html',
})
export class PokemonList {
  pokemonList = POKEMON;
}
