import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './reducers';
import { payProduct } from './actions/products.accion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  products: Array<any>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select('products').subscribe((products) => {
      this.products = products.products;
    });
  }

}