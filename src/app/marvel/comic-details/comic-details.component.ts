import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../interfaces/comic.interfaces';

@Component({
  selector: 'app-comic-details',
  templateUrl: './comic-details.component.html',
  styleUrls: ['./comic-details.component.scss']
})
export class ComicDetailsComponent implements OnInit {

  constructor() { }

  @Input() comic!:Result;

  ngOnInit(): void {
  }

  get image(){
    return this.comic.thumbnail?.path! + '/portrait_fantastic.' + this.comic.thumbnail?.extension;
  }

}
