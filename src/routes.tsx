import { createBrowserRouter } from "react-router-dom"
import App from "./pages/App"
import { Layout } from "./components/Layout";
import React from "react";
import Pokemon from "./pages/Pokemon";

const createLayout = (component: React.ReactNode) => (
  <Layout>{component}</Layout>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: createLayout(<App />),
  },
  {
    path: "/pokemon",
    element: createLayout(<Pokemon />)
  }
]);

