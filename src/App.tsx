import { Suspense, lazy, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import Loader from "@/components/shared/Loader";
import ErrorFallback from "@/components/shared/ErrorFallback";
import MainLayout from "@/components/layouts/MainLayout";
import { Toaster } from "react-hot-toast";
import { useGetUser } from "./hooks/auth/useGetUser";

const Home = lazy(() => import("./routes/Home"));
const Country = lazy(() => import("./routes/Country"));
const Register = lazy(() => import("./routes/Register"));

const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<Loader />}>
        <MainLayout />
      </Suspense>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/country/:countryName", element: <Country /> },
      { path: "/register", element: <Register /> },
    ],
    errorElement: <ErrorFallback />,
  },
]);

const App = () => {
  const { getUserData } = useGetUser();

  useEffect(() => {
    getUserData();
  }, [getUserData]);
  return (
    <>
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
        <RouterProvider router={router} />
      </CookiesProvider>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--dark-blue-200)",
            color: "var(--white)",
          },
        }}
      />
    </>
  );
};

export default App;
