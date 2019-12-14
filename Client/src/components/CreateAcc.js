import React from 'react'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import axios from 'axios'
import ModalTerms from './ModalTerms';
import { connect } from 'react-redux';
import registerUser from '../actions/registerAction';

const initialState = {
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
    agree: false,
    countryOption: "Germany",
    usernameError: '',
    passwordError: '',
    emailError: '',
    firstNameError: '',
    lastNameError: '',
}

class CreateAcc extends React.Component {
    state = initialState;
    validate = () => {
        let usernameError = '';
        let passwordError = '';
        let emailError = '';
        let firstNameError = '';
        let lastNameError = '';

        if (!this.state.username) {
            if(this.state.email){
                this.setState({username: this.state.email});
            } else {
              usernameError = "Username can't be blank"  
            }         
        }
        if (!this.state.firstName) {
            firstNameError = "First name can't be blank"
        }
        if (!this.state.lastName) {
            lastNameError = "Last name can't be blank"
        }
        if (!this.state.email.includes('@')) {
            emailError = 'Invalid email';
        }
        if (!this.state.email) {
            emailError = "Email can't be blank"
        }
        if (this.state.password.length < 6 || !this.state.password.match(/([A-Z])/) || !this.state.password.match(/([0-9])/)) {
            passwordError = "Password needs to have 6 characteres, an uppercase letter and a number"
        }
        if (emailError || usernameError || passwordError || firstNameError || lastNameError) {
            this.setState({ emailError, usernameError, passwordError, firstNameError, lastNameError });
            return false;
        }
        return true;
    }

    handleChange = event => {
        const isCheckbox = event.target.type === 'checkbox'
        this.setState({ [event.target.name]: isCheckbox ? event.target.checked : event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const isValid = this.validate();
        
        if (isValid) {

            var userNew = {
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                country: this.state.countryOption, 
                img:''
            }

            console.log(userNew);
            axios.post("http://localhost:5000/saveUser", userNew)
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
              if (response) {
                this.setState(response);
                if (this.state.response.error) {
                  console.log('Hay Error');
                } else {
                  setTimeout(() => {
                    this.setState({ redirect: true });
                  }, 1000);
                  console.log('Exito');
                }
              }
            });

            this.setState(initialState)
        }
    }

    render() {
        return (
            <div >

                <h4>Create Account</h4>

                <div className="inline-block">

                    <form className="formAccount" onSubmit={this.handleSubmit}>

                        <div className="divAddPhoto">
                            <label htmlFor="archivo" className="addPhoto">Add Photo</label>
                            <input type="file" id="archivo" className="archivo"></input>
                        </div>

                        <div>
                            <label htmlFor="Username">Username</label>
                            <input id="Username" value={this.state.username} name='username' onChange={this.handleChange}></input>
                        </div>
                        {this.state.usernameError ? <div style={{ fontsize: 12, color: 'red' }}>{this.state.usernameError}</div> : null}

                        <div>
                            <label htmlFor="Password">Password </label>
                            <input id="Password" type="password" value={this.state.password} name='password' onChange={this.handleChange} ></input>
                        </div>
                        {this.state.passwordError ? <div style={{ fontsize: 12, color: 'red' }}>{this.state.passwordError}</div> : null}

                        <div>
                            <label htmlFor="Email">Email </label>
                            <input id="Email" type="text" value={this.state.email} name='email' onChange={this.handleChange} ></input>
                        </div>
                        {this.state.emailError ? <div style={{ fontsize: 12, color: 'red' }}>{this.state.emailError}</div> : null}

                        <div>
                            <label htmlFor="FirstName">First name</label>
                            <input id="FirstName" value={this.state.firstName} name='firstName' onChange={this.handleChange} ></input>
                        </div>
                        {this.state.firstNameError ? <div style={{ fontsize: 12, color: 'red' }}>{this.state.firstNameError}</div> : null}

                        <div>
                            <label htmlFor="LastName">Last name</label>
                            <input id="LastName" value={this.state.lastName} name='lastName' onChange={this.handleChange} ></input>
                        </div>
                        {this.state.lastNameError ? <div style={{ fontsize: 12, color: 'red' }}>{this.state.lastNameError}</div> : null}

                        <div className="divCountry">
                            <label htmlFor="Country">Country</label>
                            <select className="Country" value={this.state.countryOption} name='countryOption' onChange={this.handleChange}>
                                <option value="England">England</option>
                                <option value="France">France</option>
                                <option value="Germany" defaultValue>Germany</option>
                                <option value="Holland">Holland</option>
                                <option value="Ireland">Ireland</option>
                                <option value="Spain">Spain</option>
                                <option value="UnitedStates">United States</option>
                            </select>
                        </div>


                        <div>
                            <label htmlFor="Agree"> <input type="checkbox" id="Agree" className="Agree" checked={this.state.agree}
                                name='agree' onChange={this.handleChange} required></input> I agree to MYtinerary´s <a href="#" >Terms conditions</a></label>
                        </div>
                        

                        <button className="submitButton" type='submit'>Ok</button>
                    </form>
                </div>
            </div>
        )
    }
}
/*<ModalTerms></ModalTerms>*/
const mapStateProps = state => {
    return {
      userdata: state.registerReducer.userdata
    };
  };
  const mapDispatchToProps = dispatch => {
    return {
      registerUser: data => {
        dispatch(registerUser(data));
      }
    };
  };
  export default connect(mapStateProps, mapDispatchToProps)(CreateAcc);