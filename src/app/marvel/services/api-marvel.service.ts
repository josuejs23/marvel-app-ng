import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CharacterDataWrapper } from '../interfaces/character.interfaces';
import { ComicDataWrapper } from '../interfaces/comic.interfaces';
import { environment as env } from './../../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiMarvelService {
  baseUrl: string = 'https://gateway.marvel.com:443/v1/public';

  constructor(private _http: HttpClient) {}

  paramsWithOffset = new HttpParams()
    .set('apikey', env.PUBLIC_API_KEY)
    .set('hash', env.HASH_API)
    .set('ts', env.TIMESPAN);
  // .set('limit', 12);
  // .set('offset', 0);

  params = new HttpParams()
    .set('apikey', env.PUBLIC_API_KEY)
    .set('hash', env.HASH_API)
    .set('ts', env.TIMESPAN);

  getCharacthers(limit: number = 12): Observable<CharacterDataWrapper> {
    this.paramsWithOffset = this.paramsWithOffset.set('limit', limit);
    return this._http.get<CharacterDataWrapper>(`${this.baseUrl}/characters`, {
      params: this.paramsWithOffset,
    });
  }

  getCharactherById(characterId: string): Observable<CharacterDataWrapper> {
    return this._http.get<CharacterDataWrapper>(
      `${this.baseUrl}/characters/${characterId}`,
      { params: this.params }
    );
  }

  getCharactherByName(name: string): Observable<CharacterDataWrapper> {
    let params = new HttpParams()
      .set('name', name)
      .set('apikey', env.PUBLIC_API_KEY)
      .set('hash', env.HASH_API)
      .set('ts', env.TIMESPAN);
    return this._http.get<CharacterDataWrapper>(`${this.baseUrl}/characters`, {
      params,
    });
  }

  getComicsByCharacterId(characterId: String): Observable<ComicDataWrapper> {
    return this._http.get<ComicDataWrapper>(
      `${this.baseUrl}/characters/${characterId}/comics`,
      { params: this.params }
    );
  }
}
