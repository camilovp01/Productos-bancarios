import { createReducer, on } from "@ngrx/store";
import { toggleAction, productsLoad, productsSuccess, productsError } from '../actions/products.accion';

export interface ProductsState {
    products: Array<any>;
    loading: boolean,
    loaded: boolean,
    error: any,
    toggle: boolean;

}

const initialState: ProductsState = {
    products: [],
    loading: false,
    loaded: false,
    error: null,
    toggle: false
};


export const productReducer = createReducer(initialState,
    on(toggleAction,
        (state) => ({ ...state, toggle: !state.toggle })
    ),
    on(productsLoad,
        (state) => ({ ...state, loading: true, })
    ),
    on(productsSuccess,
        (state, { products }) => ({ ...state, products, loading: false, loaded: true })
    ),
    on(productsError,
        (state, { error }) => ({ ...state, error, loading: false, loaded: false })
    )
)