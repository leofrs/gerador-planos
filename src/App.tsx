import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { useEffect } from "react";

import IndexOutlet from "./pages/indexOutlet";
import Create from "./pages/Create";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userLocal = localStorage.getItem("usuario");

  useEffect(() => {
    const user = localStorage.getItem("usuario");

    if (user && location.pathname === "/") {
      navigate("/auth/user/home");
    }

    if (!user && location.pathname !== "/") {
      navigate("/");
    }
  }, [navigate, location]);

  return (
    <Routes>
      {userLocal ? (
        <Route path="/auth/user/home" element={<IndexOutlet />}>
          <Route index element={<Dashboard />} />
          <Route path="/auth/user/home/create" element={<Create />} />
        </Route>
      ) : (
        <Route path="/" element={<Home />} />
      )}

      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
