import { Pagination as PaginationAnt } from "antd";
import { useTranslation } from "react-i18next";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

interface PaginationPropsType {
  defaultPage: number;
  total: number;
  handleChange: (page: number, size: number) => void;
}

const Pagination = ({
  defaultPage = 1,
  total,
  handleChange,
}: PaginationPropsType) => {
  const { i18n } = useTranslation();
  return (
    <PaginationAnt
      defaultCurrent={defaultPage}
      total={total}
      hideOnSinglePage={true}
      onChange={(page, pageSize) => handleChange(page, pageSize)}
      className="dark:text-white"
      nextIcon={
        i18n.language === "ar" ? (
          <MdOutlineKeyboardArrowLeft />
        ) : (
          <MdOutlineKeyboardArrowRight />
        )
      }
      prevIcon={
        i18n.language === "ar" ? (
          <MdOutlineKeyboardArrowRight />
        ) : (
          <MdOutlineKeyboardArrowLeft />
        )
      }
    />
  );
};

export default Pagination;
