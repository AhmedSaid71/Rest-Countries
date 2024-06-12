import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="bg-dark-gray">
        <section className="container pt-6 pb-24">
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default MainLayout;
