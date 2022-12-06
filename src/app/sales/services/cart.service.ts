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

export interface Cart {
  totalToPay: number;
  comics: ComicSale[];
}

@Injectable({
  providedIn: 'root',
})
export class CartService implements OnInit {
  private _cart: Cart;

  constructor() {
    this._cart = JSON.parse(localStorage.getItem('cart')!) || {
      totalToPay: 0,
      comics: [],
    };
    console.log('Contructor', this._cart);
  }

  ngOnInit(): void {}

  public get cart(): Cart {
    return this._cart;
  }

  // public get total(): number {
  //   return this._total;
  // }

  // public set total(value: number) {
  //   this.total = this._total + value;
  // }

  deleteItem(itemDelete: any) {
    this._cart.comics = this._cart.comics.filter((item) => {
      return itemDelete.id != item.id;
    });
    // this._cart.totalToPay = -itemDelete.
    this._cart.totalToPay -= itemDelete.prices[0].price;
    localStorage.setItem('cart', JSON.stringify(this._cart));
  }

  addToCart(comic: Result) {
    console.log(this._cart);
    if (this._cart.comics) {
      let item = this._cart.comics.find((item) => {
        return comic.id === item.id;
      });

      if (item) {
        window.alert('is alreadt added!');
        return;
      }
    }

    this._cart.totalToPay += Number(comic.prices![0].price);
    // console.log(this.total);

    let comicSale: ComicSale = {
      id: comic.id!,
      title: comic.title,
      prices: comic.prices!,
      pathImg: comic.thumbnail!,
    };
    this._cart.comics.push(comicSale);
    window.alert(`Comic added ${comicSale.title}`);
    localStorage.setItem('cart', JSON.stringify(this._cart));
    console.log(this._cart);
  }
}
