import React, { Component } from 'react';
import NavBar from './NavBar';
import ImageButtonsList from './ImageButtonsList';

/*const cities = [
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
];*/

export default class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            cities: [],
        };
    }

    async componentDidMount() {
        const url = "http://127.0.0.1:5000/cities";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({loading: false, cities: data, })
    }

    render() {
        if(this.state.loading) {
            return <div><h3>loading...</h3></div>
        }
        if(!this.state.cities) {
            return <div>didn't get the cities</div>
        }
        return (
            <div className="EasyTravel">

                <br></br>
                <h1>EasyTravel</h1>
                <h4>Plan Your Trip Easily</h4>
                <br></br>
                <h3>Where would you like to travel?</h3>
                <br></br>
                {/*<div>{this.state.citiess.map(city => <div>{city.title}</div>)}</div>*/}
                <br></br>
                <ImageButtonsList onPageChange={this.props.onPageChange} citiesList={this.state.cities} />
            </div>
        );
    }
}

/*
                <NavBar></NavBar>
*/