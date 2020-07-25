import React from 'react';
import {withRouter} from 'react-router-dom';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	};

	render() {
		return (
			<div className="Container">
				<Hero/>
				<MovieSection />
			</div>
		);
	}
}

class Hero extends React.Component {
	render() {
		return (
			<div className="Hero">
				<div className="HeroContainer">
					<div className="TextContainer">
						<div className="HeroLogo">
							<img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Sonic_the_Hedgehog_logo_%282020%29.png" />
						</div>
						<div className="Title">
							<h1>Now available, Sonic the Hedgehog!</h1>
						</div>
						<div className="Info">
							After discovering a small, blue, fast hedgehog, a small-town police officer must help him defeat an evil genius who wants to do experiments on him.
						</div>
						<div className="Buttons">
							<a>Watch now</a>
							<a>Get more info</a>
						</div>
					</div>
					<div className="PhotoContainer">
						<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ea196117-0b64-49b7-b13f-79f43cf77e53/ddqpsyu-dc67a343-de48-4721-a373-719fd1ec42c6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZWExOTYxMTctMGI2NC00OWI3LWIxM2YtNzlmNDNjZjc3ZTUzXC9kZHFwc3l1LWRjNjdhMzQzLWRlNDgtNDcyMS1hMzczLTcxOWZkMWVjNDJjNi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.JFwMa4PNAjk3wgnsTgAdpQVmKDc4yoIDavEb2Op8swc" />
					</div>
				</div>
			</div>
		)
	}
}

class MovieSection extends React.Component {


	render() {
		return (
			<div className="MovieContainer">
				<div>
					<div className="MovieDetails">

					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(Home);
