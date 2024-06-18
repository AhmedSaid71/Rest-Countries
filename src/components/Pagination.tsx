import { Pagination as PaginationAnt } from "antd";
import { PaginationType } from "../types";

const Pagination = ({
  defaultPage = 1,
  total,
  handleChange,
}: PaginationType) => {
  return (
    <PaginationAnt
      defaultCurrent={defaultPage}
      total={total}
      onChange={(page, pageSize) => handleChange(page, pageSize)}
      className="dark:text-white"
    />
  );
};

export default Pagination;
