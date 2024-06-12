import { Select } from "antd";
import { regions } from "../constants";

const Filter = () => {
  const handleChange = (value: string) => {
    console.log(value);
  };
  return (
    <Select
      className="select w-44 border-none outline-none"
      placeholder="Search by Region"
      onChange={handleChange}
      options={regions}
    />
  );
};

export default Filter;
