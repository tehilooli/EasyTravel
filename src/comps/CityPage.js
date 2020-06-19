import React, { Component } from 'react';
import NavBar from './NavBar';
import VerticalTabs from './VerticalTabs';

const options = ["Flights", "Where to Stay", "Attractions", "Restaurants"];

export default class CityPage extends Component {
    render() {
        return (
            <div className="EasyTravel">
                <NavBar></NavBar>
                <br></br>
                <h2>{this.props.selectedCity}</h2>
                <br></br>
                <VerticalTabs optionsList={options} selectedCity={this.props.selectedCity}></VerticalTabs>
            </div>
        );
    }
}