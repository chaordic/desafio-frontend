import { Brewerie } from "../models/brewerie.model";

export interface AppState {
  breweriesList: Array<Brewerie>,
  selectedFilter: String
}

export const appState = (state: AppState) => state;
