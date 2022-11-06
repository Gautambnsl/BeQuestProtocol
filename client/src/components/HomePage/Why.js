function Why() {
	return (
		<div className="why" id="why">
			<h2 className="why-head">
				Why <span>BeQuest?</span>
			</h2>

			<p className="why-p">
				Most times when a person dies or misplaces his private key, his
				cryptocurrencies are lost forever on the Blockchain and over $10 billion
				worth of bitcoin alone has been lost due to this.
			</p>

			<p className="why-p">
				Bequest allows you to transfer your assets to your heir in a
				decentralized manner. User register and provide their next of kin
				details (address) User also sets a checkIn interval(how frequent they
				want to check in which when elapses without checking in, the token gets
				transferred) User selects tokens to be inherited (and allow the Bequest
				smart contract to spend their token If User does not check in before
				checkInterval has passed, the tokens are transferred to the next of kin.
			</p>
		</div>
	);
}

export default Why;
