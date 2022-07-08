import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Product } from "../interfaces/products";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _items: Product[] = [];

  constructor(
    private _http: HttpClient,
  ) {
  }

  public addToCart(product: Product) {
    this._items.push(product);
  }

  public getItems(): Product[] {
    return this._items;
  }

  public clearCart(): Product[] {
    this._items = []
    return this._items
  }

  getShippingPrices() {
    return this._http.get<{type: string, price: number}[]>('../assets/shipping.json');
  }

}
