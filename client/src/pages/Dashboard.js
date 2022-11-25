import { Outlet, NavLink, Link } from "react-router-dom";
import BequestLogo from "../assests/logo-name.png";
import { useState, useEffect, useRef } from "react";

function Dashboard() {
	const [navState, setNavState] = useState(false);
	const navRef = useRef();

	useEffect(() => {
		if (navState) {
			navRef.current.classList.add("open");
		} else {
			navRef.current.classList.remove("open");
		}
	}, [navState]);

	const handleChange = (e) => {
		setNavState(e.target.checked);
	};

	return (
		<div className="dashboard">
			<div className="dashboard-nav">
				<Link to="/">
					<img src={BequestLogo} alt="" />
				</Link>

				<div className="dashboard-nav__links">
					<div className="dashboard-nav__links-toggle">
						<input
							type="checkbox"
							id="toggle"
							onChange={handleChange}
							checked={navState}
						/>
						<label htmlFor="toggle">
							<span></span>
							<span></span>
							<span></span>
						</label>
					</div>

					<ul className="dashboard-nav__links-ul" ref={navRef}>
						<li>
							<NavLink
								to="/dashboard/create-request"
								className={(navData) => (navData.isActive ? "active" : "")}
							>
								Create
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/dashboard/view-request"
								className={(navData) => (navData.isActive ? "active" : "")}
							>
								View
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/dashboard/beneficiary"
								className={(navData) => (navData.isActive ? "active" : "")}
							>
								Beneficiary
							</NavLink>
						</li>

						<li>
							<a
								target="_blank"
								href="https://drive.google.com/file/d/1k7oVW-qV1vxp7pPidyastOgYSmrfKHFx/view?usp=sharing"
							>
								Docs
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div className="dashboard-content">
				<Outlet></Outlet>
			</div>
		</div>
	);
}

export default Dashboard;
