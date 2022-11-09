import { Outlet } from "react-router-dom";

function Dashboard() {
	return (
		<div>
			Dashboard!!
			<Outlet></Outlet>
		</div>
	);
}

export default Dashboard;
