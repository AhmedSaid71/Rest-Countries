import { useState } from "react";
import { Button, Drawer } from "antd";
import { IoMenuOutline, IoMoonOutline, IoMoonSharp } from "react-icons/io5";
import { useDarkMode } from "@/context/DarkModeContext";
import { useTranslation } from "react-i18next";
import Language from "../country/Language";
import { useNavigate } from "react-router-dom";

const Test = () => {
  const [open, setOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  const handleGoProfile = () => navigate("/profile");
  return (
    <>
      <IoMenuOutline
        onClick={showDrawer}
        className=" cursor-pointer text-3xl"
      />
      <Drawer
        title={t("welcomeMessage")}
        onClose={onClose}
        open={open}
        className="dark:bg-dark-blue dark:text-white"
        placement={i18n.language === "ar" ? "right" : "left"}
        style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}
      >
        <div className="flex gap-4 flex-col">
          <button
            type="button"
            className="flex items-center gap-1 sm:gap-2"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? (
              <IoMoonSharp className="text-lg" />
            ) : (
              <IoMoonOutline className="text-lg" />
            )}
            <span className="sm:font-medium">{t("darkMode")}</span>
          </button>
          <Language />
          <div className="dark:text-white">
            <Button
              onClick={handleGoProfile}
              className="bg-transparent dark:text-white"
            >
              {t("profile")}
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Test;
