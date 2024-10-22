import { createRoot } from "react-dom/client";
import "./index.css";
import ContextProvider from "./context/user.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.tsx";

createRoot(document.getElementById("root")!).render(
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>
);
