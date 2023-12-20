import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout.tsx";
import Home from "./pages/Home.tsx";
import Blog from "./pages/Blog.tsx";
import Shop from "./pages/Shop.tsx";
import UnicornProvider from "./context/UnicornProvider.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/blog", element: <Blog /> },
      { path: "/shop", element: <Shop /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UnicornProvider>
      <RouterProvider router={router} />
    </UnicornProvider>
  </React.StrictMode>
);
