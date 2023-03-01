import { ICardBrewery } from "../components/CardBrewery/interface";

export interface iUserContextProvider {
  children: React.ReactNode;
}

export interface iUserContext {
  breweries: ICardBrewery[];
  setFilterBreweries: React.Dispatch<React.SetStateAction<string>>;
}
