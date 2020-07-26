import React from 'react';
import {withRouter} from 'react-router-dom';
import {searchByTitle} from "../Controllers/API";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	};

	render() {
		return (
			<div className="Container">
				<Hero movie="sonic"/>
				<MovieSection />
				<Hero movie="hollywood" align="left"/>
				<MovieSection />
			</div>
		);
	}
}

class Hero extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			data: {}
		}
		this.data = {};
	}

	componentDidMount() {
		//Todo Hardcode weghalen
		if (this.props.movie === "sonic") {
			searchByTitle("Sonic the hedgehog", "short")
				.then(r => {
					this.setState({
						loaded: true,
						data: {
							"title": r.Title,
							"plot": r.Plot,
							"awards": r.Awards,
							"year": r.Year,
							"movieLogo": "https://upload.wikimedia.org/wikipedia/commons/4/48/Sonic_the_Hedgehog_logo_%282020%29.png",
							"moviePhoto": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ea196117-0b64-49b7-b13f-79f43cf77e53/ddqpsyu-dc67a343-de48-4721-a373-719fd1ec42c6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZWExOTYxMTctMGI2NC00OWI3LWIxM2YtNzlmNDNjZjc3ZTUzXC9kZHFwc3l1LWRjNjdhMzQzLWRlNDgtNDcyMS1hMzczLTcxOWZkMWVjNDJjNi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.JFwMa4PNAjk3wgnsTgAdpQVmKDc4yoIDavEb2Op8swc"
						}
					})
				})
		} else if (this.props.movie === "hollywood") {
			searchByTitle("Once Upon a Time... in Hollywood", "short")
				.then(r => {
					this.setState({
						loaded: true,
						data: {
							"title": r.Title,
							"plot": r.Plot,
							"awards": r.Awards,
							"year": r.Year,
							"movieLogo": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Once_Upon_A_Time_in_Hollywood_Logo.png",
							"moviePhoto": "https://i.imgur.com/VkfN64r.png"
						}
					})
				})
		}
	}

	render() {
		if (!this.state.loaded) {
			return null
		} else if (this.props.align === "left") {
			return (
				<div className="Hero">
					<div className="HeroContainer">
						<div className="PhotoContainer">
							<img
								src={this.state.data.moviePhoto}/>
						</div>
						<div className="TextContainer">
							<div className="HeroLogo">
								<img
									src={this.state.data.movieLogo}/>
							</div>
							<div className="Title">
								<h1>{this.state.data.title}!</h1>
							</div>
							<div className="Awards">
								<b>{this.state.data.year} - {this.state.data.awards}</b>
							</div>
							<div className="Info">
								{this.state.data.plot}
							</div>
							<div className="Buttons">
								<a>Watch now</a>
								<a>Get more info</a>
							</div>
						</div>
					</div>
				</div>
			)
		} else {
			return (
				<div className="Hero">
					<div className="HeroContainer">
						<div className="TextContainer">
							<div className="HeroLogo">
								<img
									src={this.state.data.movieLogo}/>
							</div>
							<div className="Title">
								<h1>Sonic the Hedgehog!</h1>
							</div>
							<div className="Awards">
								<b>{this.state.data.year} - {this.state.data.awards}</b>
							</div>
							<div className="Info">
								{this.state.data.plot}
							</div>
							<div className="Buttons">
								<a>Watch now</a>
								<a>Get more info</a>
							</div>
						</div>
						<div className="PhotoContainer">
							<img
								src={this.state.data.moviePhoto}/>
						</div>
					</div>
				</div>
			)
		}
	}

}

class MovieSection extends React.Component {
	render() {
		return (
			<div className="MovieContainer">
				<div>
					<div className="MovieContainerHeader">
						<h1>Recently released</h1>
						<a>View all</a>
					</div>
					<div className="MovieContainerBody">
						<div className="MovieDetails">
							<div className="MoviePoster">
								<img
									src="https://m.media-amazon.com/images/M/MV5BMjIxOTI0MjU5NV5BMl5BanBnXkFtZTgwNzM4OTk4NTE@._V1_SX300.jpg"/>
							</div>
							<div className="MovieTitle">
								<h2>Bridge of spies</h2>
								<p>Nominated for 2 Oscars. Another 1 win.</p>
								<a>More information</a>
							</div>
						</div>
						<div className="MovieDetails">
							<div className="MoviePoster">
								<img
									src="https://m.media-amazon.com/images/M/MV5BMjIxOTI0MjU5NV5BMl5BanBnXkFtZTgwNzM4OTk4NTE@._V1_SX300.jpg"/>
							</div>
							<div className="MovieTitle">
								<h2>Bridge of spies</h2>
								<p>Nominated for 2 Oscars. Another 1 win.</p>
								<a>More information</a>
							</div>
						</div>
						<div className="MovieDetails">
							<div className="MoviePoster">
								<img
									src="https://m.media-amazon.com/images/M/MV5BMjIxOTI0MjU5NV5BMl5BanBnXkFtZTgwNzM4OTk4NTE@._V1_SX300.jpg"/>
							</div>
							<div className="MovieTitle">
								<h2>Bridge of spies</h2>
								<p>Nominated for 2 Oscars. Another 1 win.</p>
								<a>More information</a>
							</div>
						</div>
						<div className="MovieDetails">
							<div className="MoviePoster">
								<img
									src="https://m.media-amazon.com/images/M/MV5BMjIxOTI0MjU5NV5BMl5BanBnXkFtZTgwNzM4OTk4NTE@._V1_SX300.jpg"/>
							</div>
							<div className="MovieTitle">
								<h2>Bridge of spies</h2>
								<p>Nominated for 2 Oscars. Another 1 win.</p>
								<a>More information</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(Home);
