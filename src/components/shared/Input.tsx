import { ChangeEvent, ReactNode } from "react";
import { Input as InputAntd } from "antd";

interface InputPropsType {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
  prefix?: ReactNode;
}

const Input = ({
  handleChange,
  placeholder,
  className,
  prefix,
}: InputPropsType) => {
  return (
    <InputAntd
      onChange={handleChange}
      placeholder={placeholder}
      className={className}
      prefix={prefix}
    />
  );
};

export default Input;
