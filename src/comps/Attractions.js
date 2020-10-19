import React, { Component } from 'react';
import CardsGrid from './CardsGrid';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default class Attractions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredTags: [],
      loadingParisAtt: true,
      parisAttractions: [],
      loadingAmsterdamAtt: true,
      amsterdamAttractions: [],
      loadingLondonAtt: true,
      londonAttractions: [],
      loadingEdinburghAtt: true,
      edinburghAttractions: [],
      loadingRomeAtt: true,
      romeAttractions: [],
    }
  }

  async componentDidMount() {
    const urlParis = "http://127.0.0.1:5000/parisattractions";
    const urlAmsterdam = "http://127.0.0.1:5000/amsterdamattractions";
    const urlLondon = "http://127.0.0.1:5000/londonattractions";
    const urlEdinburgh = "http://127.0.0.1:5000/edinburghattractions";
    const urlRome = "http://127.0.0.1:5000/romeattractions";

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
        loadingParisAtt: false,
        parisAttractions: dataParis,
        loadingAmsterdamAtt: false,
        amsterdamAttractions: dataAmsterdam,
        loadingLondonAtt: false,
        londonAttractions: dataLondon,
        loadingEdinburghAtt: false,
        edinburghAttractions: dataEdinburgh,
        loadingRomeAtt: false,
        romeAttractions: dataRome,
      })
  }

  whichCityArray = () => {
    if (this.props.currentCity === "Paris") return this.state.parisAttractions;
    else if (this.props.currentCity === "Amsterdam") return this.state.amsterdamAttractions;
    else if (this.props.currentCity === "London") return this.state.londonAttractions;
    else if (this.props.currentCity === "Edinburgh") return this.state.edinburghAttractions;
    else return this.state.romeAttractions;
  }

  filterArray = (attractions) => {
    if (this.state.filteredTags.length === 0) return this.whichCityArray();
    else {
      return attractions.filter(attraction =>
        this.state.filteredTags.some(constraint =>
          [attraction[7]].some(obj => obj === constraint)
        )
      );
    }
  }

  isChecked = (tag) => {
    return (this.state.filteredTags.indexOf(tag) >= 0);
  }

  handleCheck = (event) => {
    let newFilteredTags = this.state.filteredTags;
    if (event.target.checked) {
      newFilteredTags.push(event.target.name);
      this.setState(newFilteredTags);
    }
    else {
      newFilteredTags.splice(newFilteredTags.indexOf(event.target.name), 1);
      this.setState(newFilteredTags);
    }
  }

  render() {
    if (this.state.loadingParisAtt) {
      return <div><h3>loading Paris attractions...</h3></div>
    }
    if (!this.state.parisAttractions) {
      return <div>didn't get the Paris attractions</div>
    }
    if (this.state.loadingAmsterdamAtt) {
      return <div><h3>loading Amsterdam attractions...</h3></div>
    }
    if (!this.state.amsterdamAttractions) {
      return <div>didn't get the Amsterdam attractions</div>
    }
    if (this.state.loadingLondonAtt) {
      return <div><h3>loading London attractions...</h3></div>
    }
    if (!this.state.londonAttractions) {
      return <div>didn't get the London attractions</div>
    }
    if (this.state.loadingEdinburghAtt) {
      return <div><h3>loading Edinburgh attractions...</h3></div>
    }
    if (!this.state.edinburghAttractions) {
      return <div>didn't get the Edinburgh attractions</div>
    }
    if (this.state.loadingRomeAtt) {
      return <div><h3>loading Rome attractions...</h3></div>
    }
    if (!this.state.romeAttractions) {
      return <div>didn't get the Rome attractions</div>
    }
    return (
      <div className="EasyTravel">
        <FormControl component="fieldset">
          <FormGroup>
            <FormControlLabel
              control={<Checkbox
                checked={this.isChecked("Historic Sites and Houses")}
                onChange={this.handleCheck}
                name="Historic Sites and Houses" />}
              label="Historic Sites and Houses"
            />
            <FormControlLabel
              control={<Checkbox
                checked={this.isChecked("Galleries and Museums")}
                onChange={this.handleCheck}
                name="Galleries and Museums" />}
              label="Galleries and Museums"
            />
            <FormControlLabel
              control={<Checkbox
                checked={this.isChecked("Street Markets")}
                onChange={this.handleCheck}
                name="Street Markets" />}
              label="Street Markets"
            />
          </FormGroup>
        </FormControl>
        <br></br>
        <br></br>
        <CardsGrid cardsList={this.filterArray(this.whichCityArray())}></CardsGrid>
      </div>
    );
  }
}