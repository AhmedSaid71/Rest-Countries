import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Test from "./Drawer";
import { Button } from "antd";
import { useUserContext } from "@/context/UserContext";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { user } = useUserContext();
  const handleLoginClick = () => {
    navigate("/register");
  };
  return (
    <nav
      className="flex justify-center dark:bg-dark-blue dark:text-white items-center py-6 mx-auto shadow-sm border-b border-b-dark-gray dark:border-b-dark-blue"
      style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}
    >
      <div className="container flex justify-between">
        <div className="flex items-center">
          <Link to="/">
            <h1 className=" text-base sm:text-2xl font-bold">{t("title")}</h1>
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          {user ? (
            user.name
          ) : (
            <Button
              className="bg-transparent dark:text-white text-base"
              onClick={handleLoginClick}
            >
              Login
            </Button>
          )}
          <Test />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
