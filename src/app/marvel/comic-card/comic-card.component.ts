import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../interfaces/comic.interfaces';
import { CartService } from '../../sales/services/cart.service';
import { ComicPrice } from '../interfaces/ComicPrice.interfaces';
parseInt;

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.scss'],
})
export class ComicCardComponent implements OnInit {
  constructor(private _cartSerice: CartService) {}

  @Input() comic!: Result;

  ngOnInit(): void {}

  get image() {
    return (
      this.comic.thumbnail?.path! +
      '/portrait_uncanny.' +
      this.comic.thumbnail?.extension
    );
  }

  addToCart(comic: Result) {
    this._cartSerice.addToCart(comic);
  }
}
