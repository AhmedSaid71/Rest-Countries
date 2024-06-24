import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Navbar from "@/components/shared/Navbar";

const MainLayout = () => {
  const { i18n } = useTranslation();
  return (
    <>
      <Navbar />
      <main
        className="bg-dark-gray min-h-[88.4dvh] dark:bg-dark-blue-700 dark:text-white text-light-mode-text-color"
        style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}
      >
        <section className="container py-6 bg-dark-gray dark:bg-dark-blue-700">
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default MainLayout;
