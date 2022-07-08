import { Component, OnInit } from '@angular/core';
import { Product, products } from "../../core/interfaces/products";
import { ActivatedRoute } from "@angular/router";
import { CartService } from "../../core/services/cart.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public product: Product | undefined;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _cartService: CartService
  ) {
  }

  ngOnInit() {
    const routeParams = this._route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(product => product.id === productIdFromRoute);
  }

  public addToCart(product: Product): void {
    this._cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
