import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="bg-dark-gray min-h-[88.4dvh]">
        <section className="container pt-6 pb-24">
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default MainLayout;
