import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/reducers';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('500ms', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('500ms', style({ transform: 'translateX(100%)', opacity: 0 }))
      ])
    ]
    )
  ],
})
export class ProductsComponent implements OnInit {

  products: Array<any>;
  cdtFilter: Array<any>; //CERTIFIED_DEPOSIT_TERM
  cFilter: Array<any>; //CREDIT
  ccFilter: Array<any>; //CREDIT_CARD
  caFilter: Array<any>; //CURRENT_ACCOUNT 
  daFilter: Array<any>; //DEPOSIT_ACCOUNT

  cdtFilterOtherbanks: Array<any>; //CERTIFIED_DEPOSIT_TERM
  cFilterOtherbanks: Array<any>; //CREDIT
  ccFilterOtherbanks: Array<any>; //CREDIT_CARD
  caFilterOtherbanks: Array<any>; //CURRENT_ACCOUNT 
  daFilterOtherbanks: Array<any>; //DEPOSIT_ACCOUNT
  toggle: boolean;

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

      this.cdtFilterOtherbanks = this.products.filter((product) => product.typeAccount === "CERTIFIED_DEPOSIT_TERM" && product.accountInformation.bank !== "BANCO_1");
      this.cFilterOtherbanks = this.products.filter((product) => product.typeAccount === "CREDIT" && product.accountInformation.bank !== "BANCO_1");
      this.ccFilterOtherbanks = this.products.filter((product) => product.typeAccount === "CREDIT_CARD" && product.accountInformation.bank !== "BANCO_1");
      this.caFilterOtherbanks = this.products.filter((product) => product.typeAccount === "CURRENT_ACCOUNT" && product.accountInformation.bank !== "BANCO_1");
      this.daFilterOtherbanks = this.products.filter((product) => product.typeAccount === "DEPOSIT_ACCOUNT" && product.accountInformation.bank !== "BANCO_1");


      this.toggle = products.toggle;
    });
  }
}
