import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/reducers';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Array<any>;
  cdtFilter: Array<any>; //CERTIFIED_DEPOSIT_TERM
  cFilter: Array<any>; //CREDIT
  ccFilter: Array<any>; //CREDIT_CARD
  caFilter: Array<any>; //CURRENT_ACCOUNT 
  daFilter: Array<any>; //DEPOSIT_ACCOUNT

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select('products').subscribe((products) => {
      this.products = products.products;
      this.cdtFilter = this.products.filter((product) => product.typeAccount === "CERTIFIED_DEPOSIT_TERM" && product.accountInformation.bank === "BANCO_1");
      this.cFilter = this.products.filter((product) => product.typeAccount === "CREDIT" && product.accountInformation.bank === "BANCO_1");
      this.ccFilter = this.products.filter((product) => product.typeAccount === "CREDIT_CARD" && product.accountInformation.bank === "BANCO_1");
      this.caFilter = this.products.filter((product) => product.typeAccount === "CURRENT_ACCOUNT" && product.accountInformation.bank === "BANCO_1");
      this.daFilter = this.products.filter((product) => product.typeAccount === "DEPOSIT_ACCOUNT" && product.accountInformation.bank === "BANCO_1");
    });
  }
}
