export interface CountryType {
  flags: { png: string; svg: string; alt: string };
  name: Name;
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  currencies: Currencies;
  languages: Languages;
  borders: string[];
  cca3: string;
  translations: {
    ara: Name;
  };
}
export interface CountryMiniType {
  flags: { png: string; svg: string; alt: string };
  name: Name;
  population: number;
  region: string;
  capital: string[];
  translations: {
    ara: Name;
  };
}
export interface Currencies {
  [key: string]: Currency;
}
export interface Currency {
  name: string;
  symbol: string;
}
export interface Languages {
  [key: string]: string;
}
export interface Name {
  common: string;
  official: string;
}
export interface Borders {
  name: Name;
}
