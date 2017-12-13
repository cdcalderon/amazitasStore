import {Component, OnInit} from '@angular/core';
import {ProductService} from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  pageTitle: string = 'Amazitas Game Store';

  productActivated: string;
  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.productService.productActivated.subscribe(
      (productName: string) => {
        this.productActivated = productName;
      }
    );
  }
}
