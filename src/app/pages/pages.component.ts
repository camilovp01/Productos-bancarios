import { Component, OnInit } from '@angular/core';
import { AppState } from '../redux/reducers';
import { Store } from '@ngrx/store';
import { toggleAction } from '../redux/actions/products.accion';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  toggle: boolean;
  toggleSideNav: boolean = true;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('products').subscribe((products) => this.toggle = products.toggle);
  }

  toggleBanks() {
    this.store.dispatch(toggleAction());
  }

  toggleNav() {
    this.toggleSideNav = !this.toggleSideNav
  }

}
