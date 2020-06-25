import React, { Component } from 'react';
import HomePage from './HomePage';
import CityPage from './CityPage';
import Flights from './Flights';
import WhereToStay from './WhereToStay';
import Attractions from './Attractions';
import Restaurants from './Restaurants';

export default class EasyTravel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "HomePage",
            selectedObject: "London"
        }
    }

    handlePageChange = (newPage, newObject) => {
        this.setState({ currentPage: newPage, selectedObject: newObject });
    }

    render() {
        if (this.state.currentPage === "HomePage") return <HomePage onPageChange={this.handlePageChange} />
        else if (this.state.currentPage === "CityPage") return <CityPage onPageChange={this.handlePageChange} selectedCity={this.state.selectedObject}/>
        else if (this.state.currentPage === "AttractionsPage") return <Attractions onPageChange={this.handlePageChange} />
        else if (this.state.currentPage === "FlightsPage") return <Flights onPageChange={this.handlePageChange} />
        else if (this.state.currentPage === "RestaurantsPage") return <Restaurants onPageChange={this.handlePageChange} />
        else if (this.state.currentPage === "WhereToStayPage") return <WhereToStay onPageChange={this.handlePageChange} />
    }
}