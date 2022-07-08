import { Component } from '@angular/core';

import { products } from '../../core/interfaces/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products = [...products];

  share() {
    window.alert('The product has been shared!');
  }


  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
