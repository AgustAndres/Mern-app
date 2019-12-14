import React from 'react'
import home from '../homeIcon.png'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import CreateAcc from './CreateAcc'
import Footer from '../components/Footer'

const CreateAccount = () =>{
  return (
      <div>
        <CreateAcc></CreateAcc>
      </div>
  )
}

export default CreateAccount