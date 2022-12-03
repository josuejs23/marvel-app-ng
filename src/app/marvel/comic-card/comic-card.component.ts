import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../interfaces/comic.interfaces';
import { CartService } from '../../sales/services/cart.service';
import { fromEvent } from 'rxjs';

interface ComicPrice{
  type?:string;
  price?:string;
}

interface Thumbnail{
  path?:string;
  extension?:string;
}
interface ComicSale{
  id:String;
  title?:String;
  prices:ComicPrice[];
  pathImg:Thumbnail;
}

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.scss']
})
export class ComicCardComponent implements OnInit {

  constructor(private _cartSerice:CartService ) { }

  button = document.getElementsByClassName('btn')

  myObservable = fromEvent(this.button,'click')

  subscription = this.myObservable.subscribe( event => console.log('Hello',event))

  @Input() comic!:Result;

  ngOnInit(): void {
  }

  get image(){
    return this.comic.thumbnail?.path! + '/portrait_uncanny.' + this.comic.thumbnail?.extension;
  }

  // getCart(){
  //   return this._cartSerice.cart
  // }

  addToCart(comic:Result){

    this._cartSerice.addToCart(comic)
    // console.log(JSON.parse(localStorage.getItem('collections')))
    // console.log(localStorage.getItem('collections'))
    // let cart:ComicSale[]=this._cartSerice.getCart() || []; 

    // let item = cart.find(item=>{
    //   return comic.id === item.id 
    // });

    // if(item){
    //   window.alert('is alreadt added!');
    //   return;
    // }


    // let comicSale:ComicSale = {
    //   id : comic.id!,
    //   title:comic.title,
    //   prices: comic.prices!,
    //   pathImg: comic.thumbnail!
    // }
    // cart.push(comicSale);
    // window.alert(`Comic added ${comicSale.title}`)
    // localStorage.setItem('cart', JSON.stringify(cart));
    // console.log(cart)
    
    
  }

}
