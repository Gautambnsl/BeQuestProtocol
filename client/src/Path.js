import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Wallet from "./pages/Wallet";

import Dashboard from "./pages/Dashboard";

import Will from "./pages/Will";
import CreateWill from "./pages/CreateWill";
import ShowWill from "./pages/ShowWill";
import Beneficiary from "./pages/Beneficiary";
import NotFound from "./pages/NotFound";

function Path() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/wallet" element={<Wallet />} />

				<Route path="/dashboard" element={<Dashboard />} />

				<Route path="/will" element={<Will />}>
					<Route index element={<Navigate to="show-will" />} />

					<Route path="create-will" element={<CreateWill />} />
					<Route path="show-will" element={<ShowWill />} />
					<Route path="beneficiary" element={<Beneficiary />} />
				</Route>
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Path;
