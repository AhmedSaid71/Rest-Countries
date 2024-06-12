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
interface Currencies {
  [key: string]: Currency;
}
interface Languages {
  [key: string]: string;
}
interface Currency {
  name: string;
  symbol: string;
}
