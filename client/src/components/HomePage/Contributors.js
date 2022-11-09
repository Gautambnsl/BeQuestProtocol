import ContributorsLogo from "../../assests/contributors.svg";
import Rohan from "../../assests/rohan.jpg";
import Krishan from "../../assests/krishan.png";
import Gautam from "../../assests/gautam.jpg";
import Anshul from "../../assests/anshul.jpg";

const Contributors = () => {
	return (
		<div className="contributors">
			<h1 className="contributors-head">Contributors</h1>

			<div>
				<img src={ContributorsLogo} alt="" />

				<div className="contributors-list">
					<div className="contributors-list__profile">
						<img src={Krishan} alt="" />

						<h3 className="contributors-list__profile-name">Krishan Kant</h3>
					</div>

					<div className="contributors-list__profile">
						<img src={Rohan} alt="" />

						<h3 className="contributors-list__profile-name">rohan verma</h3>
					</div>

					<div className="contributors-list__profile">
						<img src={Gautam} alt="" />

						<h3 className="contributors-list__profile-name">Gautam Bansal</h3>
					</div>

					<div className="contributors-list__profile">
						<img src={Anshul} alt="" />

						<h3 className="contributors-list__profile-name">Anshul Vats</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contributors;
