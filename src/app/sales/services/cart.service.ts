import { Injectable } from '@angular/core';
import { Result } from '../../marvel/interfaces/comic.interfaces';

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

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor() {
    this.getCart();
   }

  ngOnInit(): void {
  }


  public cart:any[]=[];
  getCart(){
    if(localStorage.getItem('cart')){
      return JSON.parse(localStorage.getItem('cart')||'');
    }
  }

  deleteItem(itemDelete:any){
    console.log(itemDelete.id)
    this.cart = this.cart.filter(item=>{
      return itemDelete.id != item.id
    })
    localStorage.setItem('cart',JSON.stringify(this.cart))
    console.log(this.cart)
  }

  addToCart(comic:Result){

    let item = this.cart.find(item=>{
      return comic.id === item.id 
    });

    if(item){
      window.alert('is alreadt added!');
      return;
    }


    let comicSale:ComicSale = {
      id : comic.id!,
      title:comic.title,
      prices: comic.prices!,
      pathImg: comic.thumbnail!
    }
    this.cart.push(comicSale);
    window.alert(`Comic added ${comicSale.title}`)
    localStorage.setItem('cart', JSON.stringify(this.cart));
    console.log(this.cart)

  }
}
