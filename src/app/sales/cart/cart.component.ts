import { Component, OnChanges, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cart:any[] = []

  constructor(private _cartService:CartService) {
    // this.getCart();
    this.cart = this._cartService.getCart();
    console.log(this.cart)
   }

  ngOnInit(): void {
  }


  // cart:any[]=[];
  // getCart(){
  //   this.cart = JSON.parse(localStorage.getItem('cart')!)
  // }

  deleteItem(itemDelete:any){
    this._cartService.deleteItem(itemDelete)
  }




}
