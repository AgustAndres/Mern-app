import React from 'react'
import axios from 'axios'
import CardList from "./cards/CardList";
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import storeTokenInformation from '../actions/loginAction';
import Avatar from './Avatar';
const jwtDecode = require('jwt-decode');


const initialState = {
    username: '',
    password: '',
    agree: false,
    redirect:false,
    usernameError: '',
    passwordError: '',
    emailError: '',
    agreeError: false,
}

class Log extends React.Component {
    state = initialState;
    validate = () => {
        let usernameError = '';
        let passwordError = '';

        if (!this.state.username) {
            usernameError = "Username can't be blank"
        }
        if (!this.state.password) {
            passwordError = "Password can't be blank"
        }
        if (usernameError || passwordError) {
            this.setState({ usernameError, passwordError });
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
            }
            console.log(userNew);
            axios.post("http://localhost:5000/login", userNew)
                .then(res => {
                    console.log(res);
                    if (res.data.token) {
                        console.log("F");
                        console.log(res.data.token);
                        localStorage.setItem('token', res.data.token);
                        var decodedToken = jwtDecode(localStorage.token);
                        console.log(decodedToken);
                        this.props.storeToken(decodedToken);
                        if (localStorage.token.length) {
                            setTimeout(() => {
                                this.setState({ redirect: true });
                              }, 1000);
                        }
                    } else {
                        this.setState({ passwordError:"Contraseña incorrecta" });
                        alert("Ultra F")
                        /*console.log(res);
                        localStorage.clear();*/
                    }
                    //this.setState(initialState)
                });
            /*.catch(error => {
                 console.log(error);
                 alert(error)
             })*/
        }//event.preventDefault();
    }

    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to="/CitiesPage" />;
        }
      };
    render() {
        return (
            <div >
                <Avatar></Avatar>
                <h4>Login</h4>
                <div className="inline-block">
                    <form className="formAccount" onSubmit={this.handleSubmit}>
                        {this.renderRedirect()}
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
                            <label htmlFor="Agree"> <input type="checkbox" id="Agree" className="Agree" checked={this.state.agree}
                                name='agree' onChange={this.handleChange} ></input> Remember me</label>
                        </div>
                        <br />
                        <button className="submitButton" type='submit'>Ok</button>

                    </form><br />
                    <CardList />
                    <p>Don't have a MYtinerary account yet? You should create one! It's totaly free and only takes a minute.</p>
                    <Link to="/CreateAccount">
                        <p>Create Account</p>
                    </Link>
                </div>
            </div>
        )
    }
}
const mapStateProps = state => {
    return {
        userdata: state.registerReducer.userdata,
        login: state.loginReducer.userLogin
    };
};
const mapDispatchToProps = dispatch => {
    return {
        storeToken: data => {
            dispatch(storeTokenInformation(data));
        }
    };
};

export default connect(mapStateProps, mapDispatchToProps)(Log)
