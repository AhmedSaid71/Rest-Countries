export interface Country {
  flags: { png: string; svg: string; alt: string };
  name: {
    common: string;
  };
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  latlng: number[];
  tld: string[];
  currencies: Currencies;
  languages: Languages;
  borders: string[];
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
