export interface ICardBrewery {
  id: string;
  name: string;
  address_2: string | null;
  address_3: string | null;
  street: string | null;
  city: string | null;
  state: string | null;
  postal_code: string | null;
  brewery_type: string | null;
  county_province: string | null;
  country: string | null;
  longitude: string | null;
  latitude: string | null;
  phone: string | null;
  website_url: string | null;
  updated_at: string;
  created_at: string;
}

export interface IPropyCardBrewery {
  brewery: ICardBrewery;
}

export interface IPropySpan {
  type: string | null;
}
