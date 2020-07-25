import React from 'react';
import {withRouter} from 'react-router-dom';
import logo from "../Assets/img/logo.svg";

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    };

    async componentDidMount() {
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default withRouter(Test);
