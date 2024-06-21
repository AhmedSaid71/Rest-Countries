export interface DropDownType {
  handleChange: (value: string) => void;
  loading: boolean;
  placeholder: string;
  className: string;
  options: { label: string; value: string }[];
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
