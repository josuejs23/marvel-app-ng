import { Injectable, OnInit } from '@angular/core';
import { Result } from '../../marvel/interfaces/comic.interfaces';

interface ComicPrice {
  type?: string;
  price?: string;
}

interface Thumbnail {
  path?: string;
  extension?: string;
}
interface ComicSale {
  id: String;
  title?: String;
  prices: ComicPrice[];
  pathImg: Thumbnail;
}

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {

  constructor() {
    this._cart = JSON.parse(localStorage.getItem('cart')!)
  }

  ngOnInit(): void { }

  private _cart: any[] = [];

  public get cart(): any {
    return this._cart;
  }

  deleteItem(itemDelete: any) {
    this._cart = this._cart.filter(item => {
      return itemDelete.id != item.id
    })
    localStorage.setItem('cart', JSON.stringify(this._cart))

    console.log(this.cart);
    
  }

  addToCart(comic: Result) {

    let item = this._cart.find(item => {
      return comic.id === item.id
    });

    if (item) {
      window.alert('is alreadt added!');
      return;
    }


    let comicSale: ComicSale = {
      id: comic.id!,
      title: comic.title,
      prices: comic.prices!,
      pathImg: comic.thumbnail!
    }
    this._cart.push(comicSale);
    window.alert(`Comic added ${comicSale.title}`)
    localStorage.setItem('cart', JSON.stringify(this._cart));
    console.log(this._cart)

  }
}
