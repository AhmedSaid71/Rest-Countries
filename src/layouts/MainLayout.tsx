import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { useTranslation } from "react-i18next";

const MainLayout = () => {
  const { i18n } = useTranslation();
  return (
    <>
      <Navbar />
      <main
        className="bg-dark-gray min-h-[88.4dvh] dark:bg-dark-blue-700 dark:text-white"
        style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}
      >
        <section className="container py-6">
          <Outlet />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
