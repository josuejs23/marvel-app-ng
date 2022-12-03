import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicListComponent } from './comic-list/comic-list.component';
import { HeroeDetailsComponent } from './heroe-details/heroe-details.component';
import { HeroeListComponent } from './heroe-list/heroe-list.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path : 'list', component:HeroeListComponent},
      { path : 'heroe/:heroeId', component:HeroeDetailsComponent},
      { path : 'comics-list/:heroeId', component:ComicListComponent},
      { path : '**', redirectTo:'/list'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarvelRoutingModule { }
