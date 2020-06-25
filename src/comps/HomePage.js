import React, { Component } from 'react';
import NavBar from './NavBar';
import ImageButtonsList from './ImageButtonsList';

const cities = [
    {
        url: '../images/paris/paris_logo.jpg',
        title: 'Paris',
        width: '20%',
        page: 'CityPage'
    },
    {
        url: '../images/amsterdam/amsterdam_logo.jpg',
        title: 'Amsterdam',
        width: '20%',
        page: 'CityPage'
    },
    {
        url: '../images/london/london_logo.jpg',
        title: 'London',
        width: '20%',
        page: 'CityPage'
    },
    {
        url: '../images/edinburgh/edinburgh_logo.jpg',
        title: 'Edinburgh',
        width: '20%',
        page: 'CityPage'
    },
    {
        url: '../images/rome/rome_logo.jpg',
        title: 'Rome',
        width: '20%',
        page: 'CityPage'
    },
];

export default class HomePage extends Component {
    render() {
        return (
            <div className="EasyTravel">
                <NavBar></NavBar>
                <br></br>
                <h1>EasyTravel</h1>
                <h4>Plan Your Trip Easily</h4>
                <br></br>
                <h3>Where would you like to travel?</h3>
                <br></br>
                <ImageButtonsList onPageChange={this.props.onPageChange} citiesList={cities}/>
            </div>
        );
    }
}