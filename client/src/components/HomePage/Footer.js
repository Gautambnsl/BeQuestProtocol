import React from "react";

const Footer = () => {
	return (
		<div className="footer-main">
			<footer class="footer-distributed">
				<div class="footer-left">
					<h3>
						Company<span>logo</span>
					</h3>

					<p class="footer-company-name">Company Name © 2015</p>
				</div>

				<div class="footer-center">
					<div>
						<i class="fa fa-map-marker"></i>
						<p>
							<span>444 S. Cedros Ave</span> Solana Beach, California
						</p>
					</div>

					<div>
						<i class="fa fa-phone"></i>
						<p>+1.555.555.5555</p>
					</div>

					<div>
						<i class="fa fa-envelope"></i>
						<p>
							<a href="mailto:support@company.com">support@company.com</a>
						</p>
					</div>
				</div>

				<div class="footer-right">
					<p class="footer-company-about">
						<span>About the company</span>
						BeQuest came into existence with the purpose of protecting the
						digital assets. BeQuest helps the users to secure their digital
						assets like cryptocurrencies, NFTs etc.
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
