import React from 'react'
import home from '../homeIcon.png'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'


const Footer = () =>{
  return (
      <div>
        <footer>
                <div className="row">
                    
                    <div className="column mx-auto mt-4">
                    <Link to="/">
                        <img src={home} alt="f" className="home" />
                    </Link>
                    </div>
                </div>
            </footer>
      </div>
  )
}

export default Footer