import React, { Component } from 'react';
import CityPage from './CityPage';
import HomePage from './HomePage';
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
        else if (this.state.currentPage === "CityPage") return <CityPage selectedCity={this.state.selectedObject} onPageChange={this.handlePageChange} />
        else if (this.state.currentPage === "AttractionsPage") return <Attractions onPageChange={this.handlePageChange} />
        else if (this.state.currentPage === "FlightsPage") return <Flights onPageChange={this.handlePageChange} />
        else if (this.state.currentPage === "RestaurantsPage") return <Restaurants onPageChange={this.handlePageChange} />
        else if (this.state.currentPage === "WhereToStayPage") return <WhereToStay onPageChange={this.handlePageChange} />
    }
}