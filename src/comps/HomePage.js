import React, { Component } from 'react';
import ImageButtonsList from './ImageButtonsList';
import NavBar from './NavBar';

const citiesImages = [
    {
        url: '../images/paris.jpg',
        title: 'Paris',
        width: '20%',
        page: 'CityPage'
    },
    {
        url: '../images/amsterdam.jpg',
        title: 'Amsterdam',
        width: '20%',
        page: 'CityPage'
    },
    {
        url: '../images/london_small.jpg',
        title: 'London',
        width: '20%',
        page: 'CityPage'
    },
    {
        url: '../images/edinburgh_small.jpg',
        title: 'Edinburgh',
        width: '20%',
        page: 'CityPage'
    },
    {
        url: '../images/rome_small.jpg',
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
                <ImageButtonsList onPageChange={this.props.onPageChange} buttonList={citiesImages} />
            </div>
        );
    }
}