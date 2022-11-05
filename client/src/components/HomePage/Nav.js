import Logo from "../../assests/logo.png";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
	const navigate = useNavigate();

	const handleLogoClick = () => {
		navigate("/");
	};

	return (
		<nav className="home-nav">
			<div className="home-nav__logo">
				<img onClick={handleLogoClick} src={Logo} alt="" />
			</div>

			<div className="home-nav__links">
				<ul className="home-nav__links-ul">
					<li className="home-nav__links-ul__li">
						<Link to="/">Link</Link>
					</li>

					<li className="home-nav__links-ul__li">
						<Link to="/">Link</Link>
					</li>

					<li className="home-nav__links-ul__li">
						<Link to="/">Link</Link>
					</li>
				</ul>
			</div>

			<div className="button home-nav__launch">
				<Link to="/wallet">Launch App</Link>
			</div>
		</nav>
	);
}

export default Nav;
