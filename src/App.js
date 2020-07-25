import React from 'react';
import logo from './Assets/img/logo.svg';
import './Assets/css/App.scss';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";

import Home from "./Views/home";
import Test from "./Views/test";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: ""
		}
	}

	accountActions = (action) => {
		if(action === "signIn")
			alert("User wants to sign in");
		else if(action === "signUp")
			alert("User wants to sign up");
	}

	changeGlobalState = async (change, value) => {
		this.setState({[`${change}`]: value});
	};

	render() {
		return (
			<Router>
				<div className="App">
					<AppHeader accountActions={this.accountActions} />
					<Switch>
						<Route exact path="/">
							<Home state={this.state} changeGlobalState={this.changeGlobalState}/>
						</Route>
						<Route exact path="/test">
							<Test state={this.state} changeGlobalState={this.changeGlobalState}/>
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}

class AppHeader extends React.Component {
	render() {
		return (
			<header className="App-header">
				<div className="Logo">
					<img src={logo} className="SVGlogo"/>
				</div>
				<div className="Navigation">
					<nav>
						<ul>
							<li>Movies</li>
							<li>Upcoming movies</li>
							<li>Events</li>
							<li>Information</li>
						</ul>
					</nav>
				</div>
				<div className="Search">
					<form onSubmit={this.props.onSubmit}>
						<input type="search" placeholder="Search for a movie..."/>
					</form>
				</div>
				<div className="User">
					<a onClick={this.props.accountActions.bind(this, "signIn")} >Sign in</a>
					<a onClick={this.props.accountActions.bind(this, "signUp")}>Sign up</a>
				</div>
			</header>
		);
	}
}

export default App;
