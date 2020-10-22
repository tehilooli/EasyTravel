import React, { Component } from 'react';
import ItemsGrid from './ItemsGrid';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredTags: [],
      loadingParisRes: true,
      parisRestaurants: [],
      loadingAmsterdamRes: true,
      amsterdamRestaurants: [],
      loadingLondonRes: true,
      londonRestaurants: [],
      loadingEdinburghRes: true,
      edinburghRestaurants: [],
      loadingRomeRes: true,
      romeRestaurants: [],
    }
  }

  async componentDidMount() {
    const urlParis = "http://127.0.0.1:5000/parisrestaurants";
    const urlAmsterdam = "http://127.0.0.1:5000/amsterdamrestaurants";
    const urlLondon = "http://127.0.0.1:5000/londonrestaurants";
    const urlEdinburgh = "http://127.0.0.1:5000/edinburghrestaurants";
    const urlRome = "http://127.0.0.1:5000/romerestaurants";

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
        loadingParisRes: false,
        parisRestaurants: dataParis,
        loadingAmsterdamRes: false,
        amsterdamRestaurants: dataAmsterdam,
        loadingLondonRes: false,
        londonRestaurants: dataLondon,
        loadingEdinburghRes: false,
        edinburghRestaurants: dataEdinburgh,
        loadingRomeRes: false,
        romeRestaurants: dataRome,
      })
  }

  whichCityArray = () => {
    if (this.props.currentCity === "Paris") return this.state.parisRestaurants;
    else if (this.props.currentCity === "Amsterdam") return this.state.amsterdamRestaurants;
    else if (this.props.currentCity === "London") return this.state.londonRestaurants;
    else if (this.props.currentCity === "Edinburgh") return this.state.edinburghRestaurants;
    else return this.state.romeRestaurants;
  }

  filterArray = (restaurants) => {
    if (this.state.filteredTags.length === 0) return this.whichCityArray();
    else {
      return restaurants.filter(restaurant =>
        this.state.filteredTags.some(constraint =>
          [restaurant[7]].some(obj => obj === constraint)
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
    if (this.props.currentCity === "Paris") {
      if (this.state.loadingParisRes) {
        return <div><h3>loading Paris restaurants...</h3></div>
      }
      if (!this.state.parisRestaurants) {
        return <div>didn't get the Paris restaurants</div>
      }
    }
    else if (this.props.currentCity === "Amsterdam") {
      if (this.state.loadingAmsterdamRes) {
        return <div><h3>loading Amsterdam restaurants...</h3></div>
      }
      if (!this.state.amsterdamRestaurants) {
        return <div>didn't get the Amsterdam restaurants</div>
      }
    }
    else if (this.props.currentCity === "London") {
      if (this.state.loadingLondonRes) {
        return <div><h3>loading London restaurants...</h3></div>
      }
      if (!this.state.londonRestaurants) {
        return <div>didn't get the London restaurants</div>
      }
    }
    else if (this.props.currentCity === "Edinburgh") {
      if (this.state.loadingEdinburghRes) {
        return <div><h3>loading Edinburgh restaurants...</h3></div>
      }
      if (!this.state.edinburghRestaurants) {
        return <div>didn't get the Edinburgh restaurants</div>
      }
    }
    else {
      if (this.state.loadingRomeRes) {
        return <div><h3>loading Rome restaurants...</h3></div>
      }
      if (!this.state.romeRestaurants) {
        return <div>didn't get the Rome restaurants</div>
      }
    }
    
    return (
      <div className="EasyTravel">
        <FormControl component="fieldset">
          <FormGroup>
            <FormControlLabel
              control={<Checkbox
                checked={this.isChecked("Asian")}
                onChange={this.handleCheck}
                name="Asian" />}
              label="Asian"
            />
            <FormControlLabel
              control={<Checkbox
                checked={this.isChecked("Italian")}
                onChange={this.handleCheck}
                name="Italian" />}
              label="Italian"
            />
            <FormControlLabel
              control={<Checkbox
                checked={this.isChecked("Local Food")}
                onChange={this.handleCheck}
                name="Local Food" />}
              label="Local Food"
            />
          </FormGroup>
        </FormControl>
        <br></br>
        <br></br>
        <ItemsGrid cardsList={this.filterArray(this.whichCityArray())}></ItemsGrid>
      </div>
    );
  }
}