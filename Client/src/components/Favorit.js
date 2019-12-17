import React from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import storeTokenInformation from '../actions/loginAction';
import Like from '../img/Like.png'
import Liked from '../img/liked.png'


class Favorit extends React.Component {
  /*
    1. Si no hay nadie conoectado, el corazon aparece sin color: ok
    2. Si hay alguien conectado el corazon puede tener color o no con un boolean, Boolean: viendo si el id del 
    usuario conectado se encuentra dentro del array de usuarios que le dieron like: pending
    3. Modificar esquema de itinerarios, necesita array de usuarios que le dieron likes: pending
    4. Modificar esquema de usuarios, array de itinerarios a los cual le ha dado fav: pending
    5. Contador de favs dependiendo de usarios que dieron like: pending
    6. Al hacer clic cambie boolean del corazon cambia el estado del boolean, eliminando/agregando like al array de 
    itinerarios, lo mismo con el array de fav en usuarios: pending
  */
    render() {
        return (
            <div >
            <div>
                <img src={this.props.userdata.username?(
                Liked   
            ) : (
                Like
            ) }></img>
            
            &nbsp;Likes</div>
            </div>
        )
    }
}
const mapStateProps = state => {
    return {
        userdata: state.loginReducer.userLogin/*,
        login: state.loginReducer.userLogin*/
    };
};
const mapDispatchToProps = dispatch => {
    return {
        storeToken: data => {
            dispatch(storeTokenInformation(data));
        }
    };
};

export default connect(mapStateProps, mapDispatchToProps)(Favorit)
