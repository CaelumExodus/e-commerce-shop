import { Component, OnInit } from '@angular/core';
import { CartService } from "../core/services/cart.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  public shippingCosts$!: Observable<{ type: string, price: number }[]>;

  constructor(
    private _cartService: CartService,
  ) {
  }

  ngOnInit(): void {
    this.shippingCosts$ = this._cartService.getShippingPrices();
  }

}
