import { createAction, props } from '@ngrx/store';
import { Brewerie } from '../models/brewerie.model';

export const fillBreweries = createAction('FILL_BREWERIES', props<{ payload: Array<Brewerie> }>());



