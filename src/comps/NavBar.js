import React, { Component } from 'react';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.isSearching = this.isSearching.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.state = {
            searchedText: null,
        }
    }

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
            event.preventDefault();
            window.location.href = this.getPageUrl(this.state.searchedText);
        }
        return false;
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
                            <input
                                className="form-control mr-sm-2"
                                type="search"
                                placeholder="Search a Destination"
                                aria-label="Search"
                                onChange={this.isSearching}
                                onKeyPress={this.handleKeyPress}
                            >
                            </input>
                            <a className="btn btn-large btn-info" href={this.getPageUrl(this.state.searchedText)}>Search</a>
                        </form>
                    </ul>
                </nav>
            </div>
        );
    }
}