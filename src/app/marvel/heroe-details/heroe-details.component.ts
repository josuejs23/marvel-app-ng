import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiMarvelService } from '../services/api-marvel.service';
import { Result } from '../interfaces/character.interfaces'
@Component({
  selector: 'app-heroe-details',
  templateUrl: './heroe-details.component.html',
  styleUrls: ['./heroe-details.component.scss']
})
export class HeroeDetailsComponent implements OnInit {

  constructor(private _router:ActivatedRoute, private _marvelService:ApiMarvelService) { }

  ngOnInit(): void {
    this.getHeroeDetails();
  }

  character?:Result[];

  getHeroeDetails(){
    let characterId = this._router.snapshot.paramMap.get('heroeId');

    this._marvelService.getCharactherById(characterId!).subscribe( (resp)=>{
      this.character = resp.data?.results;
      console.log(this.character)
      // console.log(''this.character)
      // console.log(resp.data?.results);
    })
    console.log(characterId)
  }

  get imgCharacter():string{
    return `${this.character![0].thumbnail?.path}/portrait_incredible.${this.character![0].thumbnail?.extension}`
  }

}
