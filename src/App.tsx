import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts";
import { Country, Home } from "./pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Loader } from "./components";

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
  },
]);
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
