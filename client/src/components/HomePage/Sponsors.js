import PolygonLogo from "../../assests/polygon-logo.svg";
import ChainlinkLogo from "../../assests/chainlink-logo.svg";
import logo1 from "../../assests/polygon-logo-inverted.png";
import logo2 from "../../assests/chainlinklogo2.png";

function Sponsors() {
	return (
		<div className="sponsors">
			<div className="sponsors-logo">
				<img src={logo1} alt="" />
				<span className="sponsors-logo__seperator"> </span>
				<img src={logo2} alt="" />
			</div>

			<div className="sponsors-text">
				<p className="sponsors-text__p">
				* POLYGON CHAIN'S DIGITAL ASSETS SUPPORTED : USDC, DAI, NFTs ETC.
				</p>

				<p className="sponsors-text__p">
				* CHAINLINK AUTOMATION : ASSET TRANSFERING USING CHAINLINK KEEPER
				</p>
			</div>
		</div>
	);
}

export default Sponsors;
