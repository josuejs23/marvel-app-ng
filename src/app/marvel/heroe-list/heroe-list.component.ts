import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Result } from '../interfaces/character.interfaces';
import { ApiMarvelService } from '../services/api-marvel.service';

@Component({
  selector: 'app-heroe-list',
  templateUrl: './heroe-list.component.html',
  styleUrls: ['./heroe-list.component.scss']
})
export class HeroeListComponent implements OnInit {

  constructor( private _marvelServices:ApiMarvelService) { }

  ngOnInit(): void {
    this.getCharacters();
  }
  characters?:Result[];

  getCharacters(){
    this._marvelServices.getCharacthers().subscribe( (resp)=>{
      console.log(this.characters);
      this.characters = resp.data?.results;
    })
  }
  

}
