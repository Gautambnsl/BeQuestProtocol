import PolygonLogo from "../../assests/polygon-logo.svg";
import ChainlinkLogo from "../../assests/chainlink-logo.svg";

function Sponsors() {
	return (
		<div className="sponsors">
			<div className="sponsors-logo">
				<img src={PolygonLogo} alt="" />
				<span className="sponsors-logo__seperator"> </span>
				<img src={ChainlinkLogo} alt="" />
			</div>

			<div className="sponsors-text">
				<p className="sponsors-text__p">
					Your currencies/assets will go to the moon and we will protect them
					from touching the ground.
				</p>

				<p className="sponsors-text__p">Your digital assets live forever.</p>
			</div>
		</div>
	);
}

export default Sponsors;
