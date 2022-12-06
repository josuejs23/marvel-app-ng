import { Component, OnChanges, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  get cart() {
    return this._cartService.cart.comics;
  }

  get total(): number {
    return this._cartService.cart.totalToPay;
  }

  constructor(private _cartService: CartService) {}

  ngOnInit(): void {}

  deleteItem(itemDelete: any) {
    this._cartService.deleteItem(itemDelete);
  }
}
