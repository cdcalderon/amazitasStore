import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ProductService {
  productActivated = new Subject();
  constructor() { }
}
