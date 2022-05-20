import logo from "../assets/logo.svg";
import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"
                    />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                        <Link to={"/test"} className="logo__link">ROUTING TEST</Link>
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
        </>
    )
}

export default Home;
