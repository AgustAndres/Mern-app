import React from 'react';

import { connect } from 'react-redux';
import storeTokenInformation ,{ emptyTokenInformation } from '../actions/loginAction';
import { Redirect } from 'react-router-dom';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirect: false,
      rememberMe: false,
      submit: false
    };
  }

  infoInputs = info => {
    console.log(info);
    if (info.type === 'text') {
      if (info.username && info.username.length > 0) {
        this.setState({ username: info.username });
      }
    }
    if (info.type === 'password') {
      if (info.password) {
        this.setState({ password: info.password });
      }
    }
    if (info.type === 'checkbox') {
      if (info.remember) {
        this.setState({ rememberMe: info.remember });
      }
    }
    if (this.state.username && this.state.password) {
      this.setState({ submit: true });
    }
  };

  componentDidMount() {
    if (localStorage.token) {
    localStorage.clear();
      setTimeout(()=>{
          this.setState({
            redirect: true
          })
      }, 2000
      )
      console.log(localStorage.token);
    }
  }      
        
  renderRedirect = () => {
    if (this.state.redirect) {
        this.props.emptyToken();
        return (<Redirect to="/" />);

    }
  };

  render() {
    return (
      <div>
          {
              this.renderRedirect()
          }
        Deslogeado exitosamente!
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    emptyToken: () => {
      dispatch(emptyTokenInformation());
    }
  };
};
export default connect(null, mapDispatchToProps)(Form);
