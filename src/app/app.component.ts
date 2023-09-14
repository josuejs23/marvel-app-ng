import { Component, OnInit } from '@angular/core';
import { Result } from './marvel/interfaces/character.interfaces';
import { ApiMarvelService } from './marvel/services/api-marvel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'marvelApp';

  blue: string = 'blue';

  characters?: Result[];
}
