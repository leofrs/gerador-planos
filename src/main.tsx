import { createRoot } from "react-dom/client";
import "./index.css";
import ContextProvider from "./context/user.tsx";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>
);
