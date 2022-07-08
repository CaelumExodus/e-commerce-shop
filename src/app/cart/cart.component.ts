import { Component, OnInit } from '@angular/core';
import { CartService } from "../core/services/cart.service";
import { Product } from "../core/interfaces/products";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public items: Product[] = this._cartService.getItems();

  constructor(
    private _cartService: CartService,
  ) { }

  ngOnInit(): void {
  }

}
