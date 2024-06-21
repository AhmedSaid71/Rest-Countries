import { Input as InputAntd } from "antd";
import { InputType } from "../types";

const Input = ({ handleChange, placeholder, className }: InputType) => {
  return (
    <InputAntd
      onChange={handleChange}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default Input;
