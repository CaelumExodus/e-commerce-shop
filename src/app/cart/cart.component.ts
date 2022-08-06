import { Component } from '@angular/core';
import { CartService } from "../core/services/cart.service";
import { Product } from "../core/interfaces/products";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  public items: Product[] = this._cartService.getItems();

  public checkoutForm = this._formBuilder.group({
    name: '',
    address: ''
  })

  constructor(
    private readonly _cartService: CartService,
    private readonly _formBuilder: FormBuilder
  ) {
  }

  public onSubmit(): void {
    this.items = this._cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value)
    this.checkoutForm.reset();
  }
}
