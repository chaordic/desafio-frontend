import { Brewerie } from "../models/brewerie.model";

export interface AppState {
  breweriesList: Array<Brewerie>
}

export const appState = (state: AppState) => state;
