import React, { Component } from 'react';
import ImageButtonsList from './ImageButtonsList';

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
        this.setState({ loading: false, cities: data, })
    }

    render() {
        if (this.state.loading) {
            return <div><h3>loading...</h3></div>
        }
        if (!this.state.cities) {
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
                <br></br>
                <ImageButtonsList onPageChange={this.props.onPageChange} citiesList={this.state.cities} />
            </div>
        );
    }
}