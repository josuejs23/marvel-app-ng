import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarvelModule } from './marvel/marvel.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationComponent } from './pagination/pagination.component';
// import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
// import { HeroeCardComponent } from './marvel/heroe-card/heroe-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    // NavBarComponent,
    // HeroeCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    MarvelModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
