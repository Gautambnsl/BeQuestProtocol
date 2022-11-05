import About from "../components/HomePage/About";
import Nav from "../components/HomePage/Nav";
import { useEffect } from "react";

function Home() {
	useEffect(() => {
		var prevScrollpos = window.pageYOffset;

		window.onscroll = function () {
			var currentScrollPos = window.pageYOffset;
			if (prevScrollpos > currentScrollPos) {
				document.getElementById("navbar").style.transform = "translateY(0)";
			} else {
				document.getElementById("navbar").style.transform = "translateY(-6rem)";
			}
			prevScrollpos = currentScrollPos;
		};
	});

	return (
		<>
			<Nav />

			<main>
				<About />
			</main>
		</>
	);
}

export default Home;
