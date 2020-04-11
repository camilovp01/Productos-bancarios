import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { productsLoad, productsSuccess, productsError } from './redux/actions/products.accion';
import { switchMap, map, catchError } from 'rxjs/operators';
import { MockProductService } from './services/mock-product.service';
import { of } from 'rxjs';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private _mockProductService: MockProductService) { }

  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(productsLoad),
    switchMap(() => this._mockProductService.getProducts().pipe(

      map((products) => productsSuccess({ products })),

      catchError((error) => of(productsError({ error })))

    ))
  ))
}
