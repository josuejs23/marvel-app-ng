import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../interfaces/character.interfaces';
import { fromEvent } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.scss']
})
export class HeroeCardComponent implements OnInit {

  constructor() { }

  @Input() character!:Result;

  ngOnInit(): void {
    console.log(`${this.character.thumbnail?.path}/portrait_fantastic.${this.character.thumbnail?.extension}`)
  }

  get imgCharacter():string{
    return `${this.character.thumbnail?.path}/portrait_fantastic.${this.character.thumbnail?.extension}`
  }

  

}
