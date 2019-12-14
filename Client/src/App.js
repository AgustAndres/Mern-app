import React from 'react';
import './App.css';
import MYiteneraryLogo from './MYtineraryLogo.png'
import circled from './circled-right-2.png'
import home from './homeIcon.png'
import Itinerary from './components/Itinerary'
import Login from './components/Login'
import Logout from './components/Logout'
import CreateAccount from './components/CreateAccount'
import CitiesPage from './components/CitiesPage'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
//import HelloComponent from './store'
import Footer from './components/Footer'
import Home from './components/AppComponent'

function App() {
  return (
    
    <div className="container my-container mt-4 text-center">
      <Router>
        <div>

            <Route exact path="/" component={Home} />
            <Route path="/Login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/CreateAccount" component={CreateAccount} />
            <Route path="/CitiesPage" component={CitiesPage} />
            <Route path="/Cities/:name" component={Itinerary} />

        </div>
        <Footer></Footer>
      </Router>
      
    </div>
  );
}

export default App;
