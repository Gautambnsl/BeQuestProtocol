import BeQuestLogo from "../../assests/final-logo.png";

function About() {
	return (
		<div className="about" id="about">
			<img src={BeQuestLogo} alt="BeQuest" />

			<div className="about-card">
				<div className="about-card-item">
					<h2 className="about-card-item__head">About BeQuest Protocol</h2>

					<p className="about-card-item__p">
					BEQUEST CAME INTO EXISTENCE WITH THE PURPOSE OF PROTECTING THE DIGITAL ASSETS FROM LOSS OF PRIVATE KEY OR DEATH.
					</p>

					<p className="about-card-item__p">
					THE ASSETS WILL ALWAYS BE IN THE OWNER'S ADDRESS AND WILL BE TRANSFERED TO THEIR HEIR ACCORDING TO THEIR LEGACY OR WILL.
					</p>
					
				</div>
				<div className="about-card-item">
					<h2 className="about-card-item__head">
						Fully Decentralized : Web3 Solution
					</h2>
					<p className="about-card-item__p">
					USER DON'T HAVE TO SHARE THEIR PRECIOUS PRIVATE KEY TO ANYONE.
					</p>
					<p className="about-card-item__p">
					JUST APROVE ASSET  AND SIGN YOUR LEGACY IN BEQUEST PROTOCOL'S SMART CONTRACT 					</p>
					<p className="about-card-item__p">
					SMART CONTRACT WILL EXECUTE YOUR LEGACY REQUEST ACCORDINGLY.
					</p>
					
				</div>{" "}
			</div>
		</div>
	);
}

export default About;
