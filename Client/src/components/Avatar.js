import React from 'react';
import { Link, Redirect } from 'react-router-dom';
// Imagen de usuario
import AvatarLogo from '../img/avatar.png';
// CSS de este componente
import './Avatar.css';

import { connect } from 'react-redux';

class Avatar extends React.Component {
  onSubmit = () => {
    return  <Redirect  to="/" />
 }

  render() {
    return (
      <div className="col-2">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href=""
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                src={
                  this.props.userdata.avatarPicture
                    ? this.props.userdata.avatarPicture
                    : AvatarLogo
                }
                alt="avatar user"
                className="avatar"
              ></img>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              {this.props.userdata.username ? (
                <Link className="dropdown-item" to="/logout"// onClick={this.onSubmit}
                >
                  Log out
                </Link>
              ) : (
                <React.Fragment>
                  <Link className="dropdown-item" to="/CreateAccount" >
                    Create Account
                  </Link>
                  <Link className="dropdown-item" to="/Login">
                    Login
                  </Link>
                </React.Fragment>
              )}
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateProps = state => {
  return {
    userdata: state.loginReducer.userLogin
  };
};

export default connect(mapStateProps)(Avatar);
