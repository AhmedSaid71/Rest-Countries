import { Pagination as PaginationAnt } from "antd";
import { PaginationType } from "../types";
import { useTranslation } from "react-i18next";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
const Pagination = ({
  defaultPage = 1,
  total,
  handleChange,
}: PaginationType) => {
  const { i18n } = useTranslation();
  return (
    <PaginationAnt
      defaultCurrent={defaultPage}
      total={total}
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
