import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Wallet from "./pages/Wallet";

import Dashboard from "./pages/Dashboard";

import CreateWill from "./pages/CreateWill";
import ViewWill from "./pages/ViewWill";
import Beneficiary from "./pages/Beneficiary";

import NotFound from "./pages/NotFound";

function Path() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/wallet" element={<Wallet />} />
				<Route path="/dashboard" element={<Dashboard />}>
					<Route index element={<Navigate to="create-will" />} />
					<Route path="create-will" element={<CreateWill />} />
					<Route path="view-will" element={<ViewWill />} />
					<Route path="beneficiary" element={<Beneficiary />} />
				</Route>
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Path;
