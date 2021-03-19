import { Brewerie } from "../models/brewerie.model";

export interface AppState {
  breweriesList: Array<Brewerie>,
  selectedFilter: String,
  page: number,
  selectedBrewerie: Brewerie | null
}

export const appState = (state: AppState) => state;
