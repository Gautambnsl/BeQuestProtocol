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
								to="/dashboard/create-will"
								className={(navData) => (navData.isActive ? "active" : "")}
								// activeClassName="active"
							>
								Create Will
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/dashboard/edit-will"
								className={(navData) => (navData.isActive ? "active" : "")}
								// activeClassName="active"
							>
								Edit Will
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/dashboard/beneficiary"
								className={(navData) => (navData.isActive ? "active" : "")}
								//  activeClassName="active"
							>
								Beneficiary
							</NavLink>
						</li>

						<li>
							<a href="">Docs</a>
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
