import React from 'react';
import {withRouter} from 'react-router-dom';
import {searchByID, searchForMovies} from "../Controllers/API";
import LoadingBar from 'react-top-loading-bar'


class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchResults: [],
			progress: 0
		}
	};

	updateSearchResults = (results) => {
		this.setState({
			searchResults: results
		});
	}

	resetLoader = () => {
		this.setState({
			progress: 0
		})
	}

	changeState = (key, value) => {
		this.setState({
			[key]: value
		});
	}

	render() {
		return (
			<div className="Container">
				<LoadingBar color='#D81F26' height={5} progress={this.state.progress}
							onLoaderFinished={this.resetLoader}/>
				<SearchBar setState={this.changeState} updateSearchResults={this.updateSearchResults}/>
				<div className="SearchResults">
					{this.state.searchResults}
				</div>
			</div>
		);
	}
}

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchInput: ""
		};
		this.handleChange = this.handleChange.bind(this);

	}

	handleChange(e) {
		this.setState({
			searchInput: e.target.value
		});
	}

	_handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			console.log('do validate');
		}
	}

	getSearchResults = async (e) => {
		e.preventDefault();
		const results = await searchForMovies(this.state.searchInput);
		let searchResults = [];

		if (!results)
			alert("Something went wrong. Please check your input");
		else {
			let progress = 10;

			this.props.setState("progress", progress)
			for (let i = 0; i < results.length; i++) {
				this.props.setState("progress", progress += (90 / results.length))
				const searchResult = await searchByID(results[i].imdbID, "full")
				searchResults.push(<SearchResult data={searchResult} listKey={searchResult.imdbID}/>);
			}

			this.props.updateSearchResults(searchResults);
		}
	}

	render() {
		return (
			<div className="SearchPage">
				<form onSubmit={this.getSearchResults}>
					<input type="text" value={this.state.searchInput} onKeyDown={this._handleKeyDown}
						   onChange={this.handleChange}
						   placeholder="Search for a movie..."/>
				</form>
				<a onClick={this.getSearchResults} className="RoundButton">Start searching</a>
			</div>
		)
	}
}

class SearchResult extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let poster;
		if (this.props.data.Poster && this.props.data.Poster !== "N/A") {
			poster = <img src={this.props.data.Poster}/>;
		} else
			poster = <img src="https://sd.keepcalms.com/i/keep-calm-poster-not-found.png"/>

		return (
			<div className="SearchResultContainer">
				<div className="SearchResult">
					<div className="SearchResult_Poster">
						{poster}
					</div>
					<div className="SearchResult_Information">
						<div className="SearchResult_Title">
							<h1>
								{this.props.data.Title}
							</h1>
						</div>
						<div className="SearchResult_Details">
							<div className="SearchResult_Details_List">
								<h2><b>Movie Details:</b></h2>
								<ul key={this.props.listKey}>
									<li key="Release"><b>Release:</b> {this.props.data.Released}</li>
									<li key="Runtime"><b>Runtime:</b> {this.props.data.Runtime}</li>
									<li key="Genre"><b>Genre:</b> {this.props.data.Genre}</li>
									<li key="Director"><b>Director:</b> {this.props.data.Director}</li>
									<li key="Actors"><b>Actors:</b> {this.props.data.Actors}</li>
									<li key="Rating"><b>Metascore:</b> {this.props.data.Metascore}%</li>
									<li key="Awards"><b>Awards:</b> {this.props.data.Awards}.</li>
								</ul>
							</div>
							<div className="SearchResult_Details_Description">
								<h2><b>Movie Plot:</b></h2>
								<p>
									{this.props.data.Plot}
								</p>
							</div>
						</div>
						<div className="SearchResults_ButtonBox">
							<a target="_blank" href={`https://www.imdb.com/title/${this.props.data.imdbID}/`} className="RoundButton"> More information </a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(Search);
