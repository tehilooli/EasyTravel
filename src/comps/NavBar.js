import React, { Component } from 'react';

export default class NavBar extends Component {

    getPageUrl() {
        if (this.state.searchedText === null) return;
        else if (this.state.searchedText.toLowerCase() === "paris") return "/paris";
        else if (this.state.searchedText.toLowerCase() === "amsterdam") return "/amsterdam";
        else if (this.state.searchedText.toLowerCase() === "london") return "/london";
        else if (this.state.searchedText.toLowerCase() === "edinburgh") return "/edinburgh";
        else if (this.state.searchedText.toLowerCase() === "rome") return "/rome";
        else {
            return "/";
        }
    }

    isSearching(event) {
        console.log(event.target.value);
        this.setState({
            searchedText: event.target.value,
        })
    }

    handleKeyPress(event) {
        let eventCode = event.keyCode || event.which;
        if (eventCode === 13) {
            const x = this.getPageUrl(this.state.searchedText);
            console.log(x);
            //alert(this.getPageUrl(this.state.searchedText));
            //event.target.trigger('click');
            //document.getElementById("searchButton").trigger('click');
            //event.click();
            //console.log("hello");
            //console.log(this.state.searchedText);
            //let currentUrl = this.getPageUrl(this.state.searchedText);
            //let anotherCurrentUrl = "http://127.0.0.1:5000"+currentUrl;
            //console.log(currentUrl);
            window.location.href = x;
            
        }
        return false;
    }

    constructor(props) {
        super(props);
        this.isSearching = this.isSearching.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.state = {
            searchedText: null,
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="logo_li">
                            <img src="./images/logo/logo_small.png" alt="EasyTravel_logo" className="logo"></img>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/about">About <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <ul className="navbar-nav mt-2 mt-lg-0">
                        <form className="form-inline ml-auto my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search a Destination" aria-label="Search" onChange={this.isSearching} onKeyPress={this.handleKeyPress}></input>
                            <a className="btn btn-large btn-info" href={this.getPageUrl(this.state.searchedText)} id={"searchButton"}>Search</a>
                        </form>
                    </ul>
                </nav>
            </div>

        );
    }
}

/*

<button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.searchClick}>Search</button>

const citiesOptions = [
    { title: "Paris" },
    { title: "Amsterdam" },
    { title: "London" },
    { title: "Edinburgh" },
    { title: "Rome" },
];



                else if(this.state.searchedPage == "/amsterdam") return <CityPage selectedCity="Amsterdam"></CityPage>
        else if(this.state.searchedPage == "/london") return <CityPage selectedCity="London"></CityPage>
        else if(this.state.searchedPage == "/edinburgh") return <CityPage selectedCity="Edinburgh"></CityPage>
        else if(this.state.searchedPage == "/rome") return <CityPage selectedCity="Rome"></CityPage>

<div className="navbar">
                <div className="container">
                    <div className="logo_div">
                        <img src="./images/logo/logo_small.png" alt="EasyTravel_logo" className="logo"></img>
                    </div>
                    <div className="navbar_links">
                        <ul className="menu">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                           <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                           <button class="btn btn-outline-success my-2 my-sm-0" type="submit"></button>
                        </form>
                    </div>
                </div>
            </div>


<Link to="/"></Link>
<Link to="/about"></Link>

import React, { Component } from 'react';

import Autocomplete from '@material-ui/lab/Autocomplete';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, BrowserRouter } from "react-router-dom";


export default class NavBar extends Component {
    render() {
        return (
            <div
                className="EasyTravel">
                <BrowserRouter>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="/HomePage">
                            <img
                                src="./images/logo/logo_small.png"
                                width="50"
                                height="50"
                                className="d-inline-block align-top"
                                alt="EasyTravel_logo"
                            />
                        </Navbar.Brand>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                    </Navbar>
                </BrowserRouter>
            </div>
        );
    }
}


                    <Nav className="mr-auto">
                        <Nav.Link href="/HomePage">Home</Nav.Link>
                        <Nav.Link href="/About">About</Nav.Link>
                    </Nav>

                    <Autocomplete
                            id="combo-box-demo"
                            options={citiesOptions}
                            getOptionLabel={(option) => option.title}
                            style={{
                                width: 300,
                                backgroundColor: "powderblue",
                            }}
                            renderInput={(params) => <TextField {...params} label="Choose a Destination" variant="outlined" />}
                        />

                         <div className="navbar">
                <ul>
                    <li>
                        <Navbar.Brand href="/">
                            <img
                                src="./images/logo/logo_small.png"
                                width="50"
                                height="50"
                                className="d-inline-block align-top"
                                alt="EasyTravel_logo"
                            />
                        </Navbar.Brand>
                    </li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                </ul>
            </div>
                    */