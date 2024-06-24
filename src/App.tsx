import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Loader from "./components/shared/Loader";
import ErrorFallback from "./components/shared/ErrorFallback";
import MainLayout from "./components/layouts/MainLayout";
import { DarkModeProvider } from "./context/DarkModeContext";
import { LanguageProvider } from "./context/LanguageContext";

const Home = lazy(() => import("./routes/Home"));
const Country = lazy(() => import("./routes/Country"));

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
    ],
    errorElement: <ErrorFallback />,
  },
]);
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <DarkModeProvider>
        <LanguageProvider>
          <RouterProvider router={router} />
        </LanguageProvider>
      </DarkModeProvider>
    </QueryClientProvider>
  );
};

export default App;
