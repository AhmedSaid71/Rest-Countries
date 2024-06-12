import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const Country = lazy(() => import("./Country"));

export { Home, Country };
