import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { MarvelRoutingModule } from './marvel-routing.module';
import { HeroeCardComponent } from './heroe-card/heroe-card.component';
import { HeroeDetailsComponent } from './heroe-details/heroe-details.component';
import { HeroeListComponent } from './heroe-list/heroe-list.component';
import { ComicCardComponent } from './comic-card/comic-card.component';
import { ComicListComponent } from './comic-list/comic-list.component';
import { ComicDetailsComponent } from './comic-details/comic-details.component';


@NgModule({
  declarations: [
    HeroeCardComponent,
    HeroeDetailsComponent,
    HeroeListComponent,
    ComicCardComponent,
    ComicListComponent,
    ComicDetailsComponent
  ],
  exports:[
    HeroeCardComponent
  ],
  imports: [
    CommonModule,
    MarvelRoutingModule,
    HttpClientModule
  ]
})
export class MarvelModule { }
