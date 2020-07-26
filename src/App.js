import React from 'react';
import logo from './Assets/img/logo.svg';
import './Assets/css/App.scss';
import './Assets/css/Header.scss';
import './Assets/css/Home.scss';
import './Assets/css/Search.scss';

import {
	Switch,
	Route,
	withRouter
} from "react-router-dom";

import Home from "./Views/Home";
import Search from "./Views/Search";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: ""
		}
	}

	accountActions = (action) => {
		if (action === "signIn")
			alert("User wants to sign in");
		else if (action === "signUp")
			alert("User wants to sign up");
	}

	changeGlobalState = async (change, value) => {
		this.setState({[`${change}`]: value});
	};

	render() {
		return (
			// <Router>
			<div className="App">
				<AppHeader {...this.props} accountActions={this.accountActions}/>
				<Switch>
					<Route exact path="/">
						<Home state={this.state} changeGlobalState={this.changeGlobalState}/>
					</Route>
					<Route exact path="/Search">
						<Search state={this.state} changeGlobalState={this.changeGlobalState}/>
					</Route>
				</Switch>
			</div>
			// </Router>
		);
	}
}

class AppHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	redirect = (e) => {
		if (e.target.getAttribute('to')) {
			this.props.history.push(e.target.getAttribute('to'));
		}
	}

	render() {
		return (
			<header className="App-header">
				<div className="Logo">
					<img to="/" onClick={this.redirect} src={logo} className="SVGlogo"/>
				</div>
				<div className="Navigation">
					<nav>
						<ul>
							<li to="/search" onClick={this.redirect}>Search</li>
							<li>Upcoming movies</li>
							<li>Events</li>
							<li>Information</li>
						</ul>
					</nav>
				</div>
				<div className="Header-Search">
					<form>
						<input type="search" placeholder="Search for a movie..."/>
					</form>
				</div>
				<div className="User">
					<a onClick={this.props.accountActions.bind(this, "signIn")}>Sign in</a>
					<a onClick={this.props.accountActions.bind(this, "signUp")}>Sign up</a>
				</div>
			</header>
		);
	}
}

export default withRouter(App);
