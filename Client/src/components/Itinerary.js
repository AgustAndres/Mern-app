import React from 'react'
import { connect } from 'react-redux';
import { SetItemsFetchIt } from '../actions/itineraryActions';
import Avatar from './Avatar';

class Itinerary extends React.Component {
    componentDidMount() {
        this.props.SetItemsFetchIt(this.props.match.params.name);
    }

    render() {
        return (
            <div>
                <Avatar></Avatar>
                <p>Entrada exitosa itinerario de {this.props.match.params.name}</p>

                {
                this.props.itineraryRedux !== 0 ?
                this.props.itineraryRedux.map((itinerario) => { 
                    return <div key={itinerario._id}>
                    <img src={`${itinerario.img}`}alt="S" className="imagenItinerary"></img>
                    <p>{itinerario.username}</p>

                    <h4>{itinerario.title}</h4>

                    <p>Duration: {itinerario.duration}</p>
                    <p>Price: {itinerario.price}</p>
                    <p>Rating: {itinerario.rating}</p>
                    

                    <a href="#">view all</a>
                </div>
                }):<div></div>} 
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { 
        itineraryRedux: state.reducerItinerary.data
    }
};
const mapDispatchToProps = dispatch => ({
    //  actions: bindActionCreators(getItems, dispatch)
    SetItemsFetchIt: (nameCity) =>  dispatch(SetItemsFetchIt(nameCity)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);