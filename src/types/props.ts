import { ChangeEvent, ReactNode } from "react";

export interface DropDownType {
  handleChange: (value: string) => void;
  loading?: boolean;
  placeholder?: string;
  className?: string;
  options: { label: string; value: string }[];
}
export interface InputType {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
  prefix?: ReactNode;
}
export interface PaginationType {
  defaultPage: number;
  total: number;
  handleChange: (page: number, size: number) => void;
}

export interface NotfoundType {
  message?: string;
  children?: ReactNode;
}
