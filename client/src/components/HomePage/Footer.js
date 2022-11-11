import React from "react";
import logoName from "../../assests/logo-name.png"
const Footer = () => {
	return (
		<div className="footer-main">
			<footer class="footer-distributed">
				<div class="footer-left">
					<h3>
						<img src={logoName} alt="" />
					</h3>

					<p class="footer-company-name">Company Name © 2015</p>
				</div>

				<div class="footer-center">
					<div>
						<i class="fa fa-map-marker"></i>
						<p>
							<span> Devpost💖 Hackathon</span>Chainlinkfall2022👨‍💻
						</p>
					</div>

					<div>
						<i class="fa fa-phone"></i>
						<p>+91 8920304880</p>
					</div>

					<div>
						<i class="fa fa-envelope"></i>
						<p>
							<a href="mailto:support@company.com">bansalgautam005@gmail.com</a>
						</p>
					</div>
				</div>

				<div class="footer-right">
					<p class="footer-company-about">
						<span>About the company</span>
						BeQuest came into existence with the purpose of protecting the
						digital assets. BeQuest helps the users to secure their digital
						assets like cryptocurrencies, NFTs etc from Loss Of Private Key Or Death.
					</p>

					<div class="footer-icons">
						<a href="#">
							<i class="fa fa-facebook"></i>
						</a>
						<a href="#">
							<i class="fa fa-twitter"></i>
						</a>
						<a href="#">
							<i class="fa fa-linkedin"></i>
						</a>
						<a href="#">
							<i class="fa fa-github"></i>
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
