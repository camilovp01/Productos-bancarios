import { createAction, props } from '@ngrx/store'

export const payProduct = createAction('[FOOTER COMPONENT] pay product', props<{ id }>());