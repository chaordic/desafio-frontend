import { createAction, props } from '@ngrx/store';
import { Brewerie } from '../models/brewerie.model';

export const fillBreweries = createAction('FILL_BREWERIES', props<{ payload: Array<Brewerie> }>());
export const fillSelectedFilter = createAction('FILL_SELECTED_FILTER', props<{ payload: String }>());
export const fillPage = createAction('FILL_PAGE', props<{ payload: number }>());



