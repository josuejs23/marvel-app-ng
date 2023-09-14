import { Component, OnChanges, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

// const fadeOutAnimation =

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  // animations: [
  //   trigger('fadeOut', [
  //     transition(':leave', [
  //       animate(
  //         '20s',
  //         style({
  //           opacity: 0,
  //         })
  //       ),
  //     ]),
  //   ]),
  // ],
})
export class CartComponent implements OnInit {
  class = 'd-inline-flex position-relative ';

  get cart() {
    return this._cartService.cart.comics;
  }

  get total(): number {
    return this._cartService.cart.totalToPay;
  }

  constructor(private _cartService: CartService) {}

  ngOnInit(): void {}

  deleteItem(itemDelete: any) {
    this.class += 'animate__animated animate__fadeOutUp';
    this._cartService.deleteItem(itemDelete);
  }

  // const fadeOutAnimation = trigger('fadeOut',[
  //   transition(':leave',[
  //     useAnimation(fadeOut)
  //   ])
  // ])
}
