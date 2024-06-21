import { Input as InputAntd } from "antd";
import { InputType } from "../types";

const Input = ({ handleChange, placeholder, className, prefix }: InputType) => {
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
