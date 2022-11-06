import Intro from "../components/HomePage/Intro";
import Nav from "../components/HomePage/Nav";
import Sponsors from "../components/HomePage/Sponsors";
import About from "../components/HomePage/About";
import Why from "../components/HomePage/Why";
import Plans from "../components/HomePage/Plans";

function Home() {
	return (
		<>
			<Nav />

			<div className="main">
				<div className="intro-parent">
					<Intro />

					<Sponsors />
				</div>

				<About />

				<div className="why-parent">
					<Why />
				</div>

				<Plans />
			</div>
		</>
	);
}

export default Home;
