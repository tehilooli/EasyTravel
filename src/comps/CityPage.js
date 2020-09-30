import React, { Component } from 'react';
import NavBar from './NavBar';
import VerticalTabs from './VerticalTabs';

//const options = ["Flights", "Where to Stay", "Attractions", "Restaurants"];

export default class CityPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            citiesOptions: [],
        };
    }

    async componentDidMount() {
        const url = "http://127.0.0.1:5000/citiesoptions";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({loading: false, citiesOptions: data, })
    }

    render() {
        if(this.state.loading) {
            return <div><h3>loading...</h3></div>
        }
        if(!this.state.citiesOptions) {
            return <div>didn't get the cities options</div>
        }
        return (
            <div className="EasyTravel">
                <br></br>
                <h2>{this.props.selectedCity}</h2>
                <br></br>
                <VerticalTabs optionsList={this.state.citiesOptions} selectedCity={this.props.selectedCity}></VerticalTabs>
            </div>
        );
    }
}

/*
                <NavBar></NavBar>
*/