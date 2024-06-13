export interface FilterType {
  setRegion: (name: string) => void;
  loading: boolean;
}
export interface SearchBarType {
  setName: (name: string) => void;
  name: string;
}
