import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { ProductsState, productReducer } from './products.reducer';
// import { environment } from '../../environments/environment';

export interface AppState {
  products: ProductsState
}

export const reducers: ActionReducerMap<AppState> = {
  products: productReducer
};


// export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
