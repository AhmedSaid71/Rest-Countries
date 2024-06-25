import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import "@/i18n.ts";
import App from "./App";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { DarkModeProvider } from "./context/DarkModeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { UserProvider } from "./context/UserContext";

import "@/styles/index.css";
import "@/styles/button.css";
import "@/styles/input.css";
import "@/styles/loader.css";
import "@/styles/pagination.css";
import "@/styles/select.css";
import "@/styles/drawer.css";
import "@/styles/form.css";
import { AuthProvider } from "./context/AuthContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <DarkModeProvider>
        <LanguageProvider>
          <UserProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </UserProvider>
        </LanguageProvider>
      </DarkModeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
