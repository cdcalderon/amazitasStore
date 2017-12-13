import { Component } from '@angular/core';
import {ProductService} from '../services/product.service';

@Component({
  templateUrl: './home.component.html'
})
export class WelcomeComponent {
  public pageTitle: string = 'Welcome';

  constructor(private productService: ProductService) {

  }

  onActivate(itemName: string) {
    this .productService.productActivated.next(itemName);
  }

}
