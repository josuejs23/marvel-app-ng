import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../services/cart.service';

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

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  constructor(private _cartService: CartService) {}

  @Input() item: ComicSale;

  ngOnInit(): void {}

  // deleteItem(id: String) {
  //   console.log(id);
  // }

  deleteItem(itemDelete: any) {
    // this.class += 'animate__animated animate__fadeOutUp';
    console.log(itemDelete);
    this._cartService.deleteItem(itemDelete);
  }
}
