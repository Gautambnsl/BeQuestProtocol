import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Wallet from "./pages/Wallet";

import Will from "./pages/Will";
import CreateWill from "./pages/CreateWill";
import EditWill from "./pages/EditWill";
import Beneficiary from "./pages/Beneficiary";
import NotFound from "./pages/NotFound";

function Path() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/wallet" element={<Wallet />} />

				<Route path="/will" element={<Will />}>
					<Route index element={<Navigate to="beneficiary" />} />

					<Route path="create-will" element={<CreateWill />} />
					<Route path="edit-will" element={<EditWill />} />
					<Route path="beneficiary" element={<Beneficiary />} />
				</Route>

				<Route path="/*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Path;
