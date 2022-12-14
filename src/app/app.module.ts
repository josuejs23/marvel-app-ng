import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarvelModule } from './marvel/marvel.module';
import { SharedModule } from './shared/shared.module';
// import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
// import { HeroeCardComponent } from './marvel/heroe-card/heroe-card.component';


@NgModule({
  declarations: [
    AppComponent,
    // NavBarComponent,
    // HeroeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    MarvelModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
