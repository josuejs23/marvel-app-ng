import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiMarvelService } from 'src/app/marvel/services/api-marvel.service';
import { Cart, CartService } from '../../sales/services/cart.service';

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
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  get comics(): any {
    return this._cartService.cart.comics;
  }

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _apiMarvelService: ApiMarvelService,
    private _cartService: CartService
  ) {
    console.log('Cart Service', this._cartService.cart?.comics);
  }

  ngOnInit(): void {}

  searchForm = this._formBuilder.group({
    name: '',
  });

  submit() {
    console.log(this.searchForm.get('name')?.value);
    let name = this.searchForm.get('name')?.value;
    this._apiMarvelService.getCharactherByName(name!).subscribe((resp) => {
      let result = resp.data?.results;
      console.log(result![0].id);
      this._router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
      this._router.onSameUrlNavigation = 'reload';
      this._router.navigate(['/heroe', result![0].id]);
    });
  }
}
