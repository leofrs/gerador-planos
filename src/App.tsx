import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { useEffect } from "react";

import IndexOutlet from "./pages/indexOutlet";

const App = () => {
  const navigate = useNavigate();
  const userLocal = localStorage.getItem("usuario");

  useEffect(() => {
    const user = localStorage.getItem("usuario");
    if (user) {
      navigate("/auth/user/Home");
    } else {
      navigate("/");
    }
  }, [navigate]);

  return (
    <Routes>
      {userLocal ? (
        <Route path="/auth/user/home" element={<IndexOutlet />}>
          <Route index element={<Dashboard />} />
        </Route>
      ) : (
        <Route path="/" element={<Home />} />
      )}

      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
