import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="bg-dark-gray min-h-[88.4dvh] dark:bg-dark-blue-700 dark:text-white">
        <section className="container py-6">
          <Outlet />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
