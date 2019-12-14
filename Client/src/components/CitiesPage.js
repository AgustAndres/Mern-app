import React from 'react'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import {SetItemsFetch}  from '../actions/itemAction';
import Avatar from './Avatar';

class CitiesPages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      search: ''
    };
  }
  async componentDidMount(){
    await this.props.actionsgetItems()
    this.setState({cities:this.props.citiesRedux})
    
  }
//https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2

  filterCities = (e) => {
    console.log();
    var items = this.props.citiesRedux
    items=items.filter((item)=>{
      var ciudad= item.name.toLowerCase() + item.country.toLowerCase()
      return ciudad.indexOf(
        e.target.value.toLowerCase()) !== -1 
    })
    this.setState({cities:items})
  }
  render() {
   
    return (
      <div className="mb-2">
        <Avatar></Avatar>
        <div className="row">
          <div className="column mx-auto mt-4">
            {<input type="text" onChange={this.filterCities} placeholder="Search"/>}
            {this.state.cities.length>0?
            this.state.cities.map((ciudad)=> {
            return <div> <Link to={`/cities/${ciudad.name}`} key={ciudad._id}><h4 key={ciudad._id}>{ciudad.name} - {ciudad.country}</h4></Link><img src={ciudad.img} className="cityImg" alt="No img available"></img></div>
            // return <h4 key={ciudad._id}><a href={`https://www.google.com/search?q=${ciudad.name} ${ciudad.country}`} target="_blank">{ciudad.name} {ciudad.country}</a> </h4> style={`background-image: ${ciudad.img});}`}
       }):<div></div>}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state);
  
  return {
    citiesRedux: state.reducerCity.data
  }
};
const mapDispatchToProps = dispatch => ({
  actionsgetItems:() => dispatch(SetItemsFetch())
})

export default connect(mapStateToProps, mapDispatchToProps )(CitiesPages);