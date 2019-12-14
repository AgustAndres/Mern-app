import React from 'react';
import '../App.css';
import MYiteneraryLogo from '../MYtineraryLogo.png'
import circled from '../circled-right-2.png'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

const Home = () => {
    return (
        <div className="mb-2">
            <div className="row">
                <div className="column mx-auto mt-3">
                    <a href="mailto:elcorreoquequieres@correo.com?Subject=Aquí%20el%20asunto%20del%20mail">
                        <img src={MYiteneraryLogo} alt="f" className="logo" /></a>
                </div>
            </div>

            <div className="row">
                <div className="column mx-auto">
                    <p className="mt-4 mx-auto">
                        Find your perfect trip, designed by insiders who know and love their cities
          </p>
                </div>
            </div>

            <div className="row">
                <div className="column mx-auto">
                    <h3>Start browsing</h3>
                    <Link to="/CitiesPage">
                        <img src={circled} alt="f" className="arrow" />
                    </Link>
                </div>
            </div>

            <div className="row">
                <div className="column mx-auto mt-4">
                    <p>Want to build your own MYtenerary?</p>
                </div>
            </div>


            <div className="row">
                <div className="column mt-4 mx-auto">
                    <Link to="/Login">Log in</Link>

                </div>
                <div className="column mt-4 mx-auto">
                    <Link to="/CreateAccount">Create account</Link>

                </div>
            </div>
        </div>
    )
}
export default Home;
