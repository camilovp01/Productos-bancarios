import { createAction, props } from '@ngrx/store'

export const toggleAction = createAction('[PAGES COMPONENT] toggle other banks');
export const productsLoad = createAction('[PRODUCTS COMPONENT] products loading');
export const productsSuccess = createAction('[PRODUCTS COMPONENT] products loaded', props<{ products }>());
export const productsError = createAction('[PRODUCTS COMPONENT] products error', props<{ error }>());