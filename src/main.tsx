import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App, loader as appLoader } from "./App";
import { Layout, loader as layoutLoader } from "./Layout";
import { User, loader as userLoader } from "./User";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    loader: appLoader,
  },
  {
    path: "/home",
    Component: Layout,
    loader: layoutLoader,
    children: [
      {
        path: ":userId",
        Component: User,
        loader: userLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
