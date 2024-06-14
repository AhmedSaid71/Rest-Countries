import { Select } from "antd";
import { regions } from "../constants";
import { FilterType } from "../types";

const Filter = ({ setRegion, loading }: FilterType) => {
  const handleChange = (value: string) => {
    setRegion(value);
  };
  return (
    <Select
      className="select w-44 border-none outline-none"
      placeholder="Search by Region"
      onChange={handleChange}
      options={regions}
      disabled={loading}
    />
  );
};

export default Filter;
