import React, { Component } from 'react';

export default class Facts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingParisFacts: true,
            parisFacts: [],
            loadingAmsterdamFacts: true,
            amsterdamFacts: [],
            loadingLondonFacts: true,
            londonFacts: [],
            loadingEdinburghFacts: true,
            edinburghFacts: [],
            loadingRomeFacts: true,
            romeFacts: [],
        }
    }

    async componentDidMount() {
        const urlParis = "http://127.0.0.1:5000/parisfacts";
        const urlAmsterdam = "http://127.0.0.1:5000/amsterdamfacts";
        const urlLondon = "http://127.0.0.1:5000/londonfacts";
        const urlEdinburgh = "http://127.0.0.1:5000/edinburghfacts";
        const urlRome = "http://127.0.0.1:5000/romefacts";

        const responseParis = await fetch(urlParis);
        const responseAmsterdam = await fetch(urlAmsterdam);
        const responseLondon = await fetch(urlLondon);
        const responseEdinburgh = await fetch(urlEdinburgh);
        const responseRome = await fetch(urlRome);

        const dataParis = await responseParis.json();
        const dataAmsterdam = await responseAmsterdam.json();
        const dataLondon = await responseLondon.json();
        const dataEdinburgh = await responseEdinburgh.json();
        const dataRome = await responseRome.json();

        this.setState(
            {
                loadingParisFacts: false,
                parisFacts: dataParis,
                loadingAmsterdamFacts: false,
                amsterdamFacts: dataAmsterdam,
                loadingLondonFacts: false,
                londonFacts: dataLondon,
                loadingEdinburghFacts: false,
                edinburghFacts: dataEdinburgh,
                loadingRomeFacts: false,
                romeFacts: dataRome,
            })
    }

    whichCityArray = () => {
        if (this.props.currentCity === "Paris") return this.state.parisFacts;
        else if (this.props.currentCity === "Amsterdam") return this.state.amsterdamFacts;
        else if (this.props.currentCity === "London") return this.state.londonFacts;
        else if (this.props.currentCity === "Edinburgh") return this.state.edinburghFacts;
        else return this.state.romeFacts;
    }

    render() {
        if (this.state.loadingParisFacts) {
            return <div><h3>loading Paris facts...</h3></div>
        }
        if (!this.state.parisFacts) {
            return <div>didn't get the Paris facts</div>
        }
        if (this.state.loadingAmsterdamFacts) {
            return <div><h3>loading Amsterdam facts...</h3></div>
        }
        if (!this.state.amsterdamFacts) {
            return <div>didn't get the Amsterdam facts</div>
        }
        if (this.state.loadingLondonFacts) {
            return <div><h3>loading London facts...</h3></div>
        }
        if (!this.state.londonFacts) {
            return <div>didn't get the London facts</div>
        }
        if (this.state.loadingEdinburghFacts) {
            return <div><h3>loading Edinburgh facts...</h3></div>
        }
        if (!this.state.edinburghFacts) {
            return <div>didn't get the Edinburgh facts</div>
        }
        if (this.state.loadingRomeFacts) {
            return <div><h3>loading Rome facts...</h3></div>
        }
        if (!this.state.romeFacts) {
            return <div>didn't get the Rome facts</div>
        }
        return (
            <div className="EasyTravel, factsContainer">
                {this.whichCityArray().map((fact) => (
                    <div>
                        <h3 className="factTitle">{fact[2]}</h3>
                        <h5>{fact[3]}</h5>
                        <br></br>
                    </div>
                ))}
            </div>
        );
    }
}