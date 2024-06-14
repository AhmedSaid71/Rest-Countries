export interface FilterType {
  setRegion: (name: string) => void;
  loading: boolean;
}
export interface SearchBarType {
  setName: (name: string) => void;
  name: string;
}
export interface PaginationType {
  defaultPage: number;
  total: number;
  handleChange: (page: number, size: number) => void;
}
