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
				<div>
					<div className="HeroFilter"/>
				</div>
			</div>
		)
	}
}

class HeroCarousel extends React.Component {
	render() {
		return (
			<div className="Hero">
				<Carousel showArrows={true} autoPlay={true} infiniteLoop={true} emulateTouch={true} swipeable={true}
						  showStatus={false} showThumbs={false} interval={5000}>
					<div>
						<img
							src="https://www.euroscoop.be/content/shared/movies/2020/sonicthehedgehognv-9469-header-ve8d18zv3uqalgk-vqxtjvdo-crop-aeyjolno.jpg"/>
						<p className="legend">Legend 1</p>
					</div>
					<div>
						<img
							src="https://www.euroscoop.be/content/shared/movies/2020/sonicthehedgehognv-9469-header-ve8d18zv3uqalgk-vqxtjvdo-crop-aeyjolno.jpg"/>
						<p className="legend">Legend 2</p>
					</div>
				</Carousel>
			</div>
		);
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
