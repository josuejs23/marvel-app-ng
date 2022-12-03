import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComicDataWrapper, Result } from '../interfaces/comic.interfaces';
import { ApiMarvelService } from '../services/api-marvel.service';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.scss']
})
export class ComicListComponent implements OnInit {

  constructor( private apiMarvelService:ApiMarvelService, private _router:ActivatedRoute) { }

  ngOnInit(): void {
    this.getComicsByHeroeId()
  }

  comicList?:Result[];
  
  getComicsByHeroeId(){
    let characterId = this._router.snapshot.paramMap.get('heroeId');
    // let characterId = this._router.snapshot.paramMap;
    console.log('characterId',characterId)
    this.apiMarvelService.getComicsByCharacterId(characterId!).subscribe((resp)=>{
      this.comicList = resp.data?.results;
      console.log(this?.comicList)
    })
  }

}
