import { useEffect } from "react";

import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Home from "./pages/public/HomeScreen";

import Dashboard from "./pages/private/DashboardScreen";
import DashboardDetails from "./pages/private/DashboardDetailsScreen";
import Create from "./pages/private/CreateScreen";
import IndexOutlet from "./pages/private/indexOutlet";

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
					<Route
						path="/auth/user/home/details/:id"
						element={<DashboardDetails />}
					/>
				</Route>
			) : (
				<Route path="/" element={<Home />} />
			)}

			<Route path="*" element={<Home />} />
		</Routes>
	);
};

export default App;
