import React, { Component } from 'react';
import CardsGrid from './CardsGrid';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const parisRestaurants = [
  {
    title: 'Chez Ajia',
    subheader: 'Asian',
    image: './images/chez.jpeg',
    firstInfo: "A few steps from the metro Saint-Paul, Chez Ajia offers a culinary journey "
      + "to the small island of Taiwan. In a cozy and modern setting, "
      + "discover traditional family cooking, which will not fail to awaken your taste buds.",
    moreInfo: "You can find more info at http://www.ajia.fr/",
    uniqueId: '1chez1',
    tags: [{ value: 'Asian' }],
  },

  {
    title: 'Royal Dragon',
    subheader: 'Asian',
    image: './images/royaldragon.jpg',
    firstInfo: "Taste mouthwatering nems, sushi and soup that are served at Royal DRAGON. "
      + "If hungry, come here for tasty parfait, beignets and tiramisu. Good wine is among the best drinks to try.",
    moreInfo: "You can find more info at https://www.facebook.com/royalDraogon/",
    uniqueId: '2royaldragon2',
    tags: [{ value: 'Asian' }],
  },

  {
    title: 'Via Emilia',
    subheader: 'Italian',
    image: './images/viaemilia.jpg',
    firstInfo: "The cozy atmosphere of this place allows guests to relax after a hard working day. "
      + "The competent staff works hard, stays positive and makes this place great. "
      + "If you want to experience fabulous service, you should visit this spot.",
    moreInfo: "You can find more info at http://www.facebook.com/viaemiliaristorante",
    uniqueId: '3viaemilia3',
    tags: [{ value: 'Italian' }],
  },

  {
    title: 'Tra di Noi',
    subheader: 'Italian',
    image: './images/noi.png',
    firstInfo: "Absolutely brilliant. Off the tourist trail, but a must visit. "
      + "Very authentic Italian food, great service, faultless all round.",
    moreInfo: "You can find more info at https://www.facebook.com/tradinoiparis/",
    uniqueId: '4noi4',
    tags: [{ value: 'Italian' }],
  },

  {
    title: 'La Table de Colette',
    subheader: 'Local Food',
    image: './images/colette.jpg',
    firstInfo: "A mix of welcoming staff, incredible, "
      + "down to earth owner and amazing, fresh food makes this place very special.",
    moreInfo: "You can find more info at http://www.latabledecolette.fr/",
    uniqueId: '5colette5',
    tags: [{ value: 'Local Food' }],
  },

  {
    title: 'Boutary',
    subheader: 'Local Food',
    image: './images/boutary.jpg',
    firstInfo: "Boutary is a chic and trendy 'boutique bistro' with "
      + "traditional French roots but a modern and affordable approach to gastronomic cuisine.",
    moreInfo: "You can find more info at http://www.boutary-restaurant.com/",
    uniqueId: '6boutary6',
    tags: [{ value: 'Local Food' }],
  },
]

const amsterdamRestaurants = [
  {
    title: 'Tasty Asia',
    subheader: 'Asian',
    image: './images/tastyasia.jpg',
    firstInfo: "a small, but cozy asian fusion restaurant nearby the famous Rembrandt Square.",
    moreInfo: "You can find more info at http://www.tasty-asia.nl/",
    uniqueId: '1tastyasia1',
    tags: [{ value: 'Asian' }],
  },

  {
    title: 'Rakang',
    subheader: 'Asian',
    image: './images/rakang.jpg',
    firstInfo: "Situated in Amsterdams nicest area Jordaan, Rakang is a place you shouldn't miss. "
      + "It's a place that stimulates your creativity and definitely guarantees you lots of fun.",
    moreInfo: "You can find more info at http://www.rakang.nl/",
    uniqueId: '2rakang2',
    tags: [{ value: 'Asian' }],
  },

  {
    title: 'Dope',
    subheader: 'Italian',
    image: './images/dope.jpg',
    firstInfo: "Exceptional pizza with top notch ingredients and very reasonable value for the money.",
    moreInfo: "You can find more info at https://www.pizzariadope-amsterdam.nl/",
    uniqueId: '3dope3',
    tags: [{ value: 'Italian' }],
  },

  {
    title: 'Bussia',
    subheader: 'Italian',
    image: './images/bussia.png',
    firstInfo: "The best dinner of our week in Amsterdam. The food, service, and atmosphere are perfectly aligned.",
    moreInfo: "You can find more info at http://www.bussia.nl/",
    uniqueId: '4bussia4',
    tags: [{ value: 'Italian' }],
  },

  {
    title: 'De Silveren Spiegel',
    subheader: 'Local Food',
    image: './images/spiegel.jpg',
    firstInfo: "Elegance, tradition and hospitality are the core traits of one of "
      + "Amsterdam’s finest restaurants, de Silveren Spiegel (the Silver Mirror).",
    moreInfo: "You can find more info at https://www.desilverenspiegel.com/",
    uniqueId: '5spiegel5',
    tags: [{ value: 'Local Food' }],
  },

  {
    title: 'VISSER Amsterdam',
    subheader: 'Local Food',
    image: './images/visser.jpg',
    firstInfo: "Fantastic spot in the beautiful and busy Jordaan area of Amsterdam.",
    moreInfo: "You can find more info at http://www.visseramsterdam.nl/",
    uniqueId: '6visser6',
    tags: [{ value: 'Local Food' }],
  },
]

const londonRestaurants = [
  {
    title: 'Amrutha Lounge',
    subheader: 'Asian',
    image: './images/amruthalounge.jpg',
    firstInfo: "Innovative vegan dishes and heart-warming classics are lovingly prepared on the premises"
      + "by our chefs on a daily basis. The food is made from scratch with an emphasis on"
      + "taking simple ingredients and elevating them to extraordinary levels, that’s our version of ‘Vegan Soul Food’.",
    moreInfo: "You can find more info at https://www.amrutha.co.uk/",
    uniqueId: '1amruthalounge1',
    avatar: 'R',
  },

  {
    title: 'Yuu Kitchen',
    subheader: 'Asian',
    image: './images/yuukitchen.jpg',
    firstInfo: "Yuu Kitchen Restaurant features authentic Japanese and South-East Asian flavours."
      + "This new gastronomy concept, uses the highest quality produce executed with precision cooking"
      + "in a fun and exciting setting. The menu is designed for sharing with a choice of small plates that will take you on an explosive flavour journey."
      + "Indulge in Asian favourites like gourmet Bao, Korean Ssam and Chicken Karaage.",
    moreInfo: "You can find more info at https://www.yuukitchen.com/",
    uniqueId: '2yuukitchen2',
    avatar: 'R',
  },

  {
    title: 'E Pellicci',
    subheader: 'Italian',
    image: './images/epellicci.jpg',
    firstInfo: "A classic East London café that has been serving the local community for over a century!",
    moreInfo: "You can find more info at https://epellicci.co.uk/",
    uniqueId: '3epellicci3',
    avatar: 'R',
  },

  {
    title: 'Morso Abbey Road',
    subheader: 'Italian',
    image: './images/morsoabbeyroad.jpg',
    firstInfo: "Morso is a modern community-centred restaurant and bar, serving hand-crafted fresh pasta"
      + "and small plates of Italian bites alongside innovative Grappa-based cocktails.",
    moreInfo: "You can find more info at https://www.morsolondon.co.uk/",
    uniqueId: '4morsoabbeyroad4',
    avatar: 'R',
  },

  {
    title: 'The Lounge Cafe',
    subheader: 'British',
    image: './images/theloungecafe.jpg',
    firstInfo: "The Victoria and Albert Museum is the world's leading museum of art, design, and performance,"
      + "representing more than 3,000 years of human creativity, with collections unrivaled in their scope and diversity and an inspiring range of events.",
    moreInfo: "You can find more info at https://www.facebook.com/loungecafewembley/",
    uniqueId: '5theloungecafe5',
    avatar: 'R',
  },

  {
    title: 'The Golden Chippy',
    subheader: 'British',
    image: './images/thegoldenchippy.jpg',
    firstInfo: "Golden Chippy is one of the most popular Fish and Chips Takeaway in Greenwich, London."
      + "The food is bursting with flavour that will never disappoint!",
    moreInfo: "You can find more info at https://thegoldenchippy.has.restaurant/",
    uniqueId: '6thegoldenchippy6',
    avatar: 'R',
  },
]

const edinburghRestaurants = [
  {
    title: 'Chizuru Tei',
    subheader: 'Asian',
    image: './images/chizurutei.jpg',
    firstInfo: "Fresh and quality Japanese food at reasonable price!",
    moreInfo: "You can find more info at https://www.chizurutei.co.uk/",
    uniqueId: '1chizurutei1',
    tags: [{ value: 'Asian' }],
  },

  {
    title: 'Wee Buddha',
    subheader: 'Asian',
    image: './images/weebuddha.jpg',
    firstInfo: "Eclectic asian food, washed down with draught/bottled beer, cocktails or wine ...",
    moreInfo: "You can find more info at http://www.weebuddha.co.uk/",
    uniqueId: '2weebuddha2',
    tags: [{ value: 'Asian' }],
  },

  {
    title: 'Ristorante Isola',
    subheader: 'Italian',
    image: './images/isola.jpg',
    firstInfo: "Isola is specialize in regional Sardinian and Mediterranean cuisine.",
    moreInfo: "You can find more info at https://www.ristoranteisola.co.uk/",
    uniqueId: '3isola3',
    tags: [{ value: 'Italian' }],
  },

  {
    title: 'Locanda De Gusti',
    subheader: 'Italian',
    image: './images/gusti.png',
    firstInfo: "TSouthern Italian using the very best of Italian and local Scottish produce.",
    moreInfo: "You can find more info at http://www.locandadegusti.com/",
    uniqueId: '4gusti4',
    tags: [{ value: 'Italian' }],
  },

  {
    title: 'The Kitchin',
    subheader: 'Local Food',
    image: './images/kitchin.jpg',
    firstInfo: "The Kitchin presents modern British seasonal cuisine influenced by "
      + "French cooking techniques and an appreciation of the best quality ingredients available from Scotland's fantastic natural larder.",
    moreInfo: "You can find more info at https://thekitchin.com/",
    uniqueId: '5kitchin5',
    tags: [{ value: 'Local Food' }],
  },

  {
    title: 'Cafe Marmalade',
    subheader: 'Local Food',
    image: './images/marmalade.jpg',
    firstInfo: "Fantastic spot in the beautiful and busy Jordaan area of Amsterdam.",
    moreInfo: "You can find more info at https://www.facebook.com/cafemarmaladeleith/",
    uniqueId: '6marmalade6',
    tags: [{ value: 'Local Food' }],
  },
]

const romeRestaurants = [
  {
    title: 'Shiroya',
    subheader: 'Asian',
    image: './images/shiroya.jpg',
    firstInfo: "The best Japanese eating experience in Italy. As good as the best restaurants in Tokyo! Authentic, wellprepared.",
    moreInfo: "You can find more info at http://www.shiroya.it/",
    uniqueId: '1shiroya1',
    tags: [{ value: 'Asian' }],
  },

  {
    title: 'Lamian Bar',
    subheader: 'Asian',
    image: './images/lamianbar.jpg',
    firstInfo: "Excellent restaurant. Fantastic cuisine. Extremely helpful staff.",
    moreInfo: "You can find more info at https://www.facebook.com/lamianbar/",
    uniqueId: '2lamianbar2',
    tags: [{ value: 'Asian' }],
  },

  {
    title: 'Bono Bottega Nostrana',
    subheader: 'Italian',
    image: './images/bono.jpg',
    firstInfo: "Fabulous little gem in Rome, superb food. "
      + "Simple sandwiches and taster boards lovingly crafted. "
      + "Lots of drinks for all tastes. An absolute must for your visit to Rome.",
    moreInfo: "You can find more info at http://www.botteganostrana.com/",
    uniqueId: '3bono3',
    tags: [{ value: 'Italian' }],
  },

  {
    title: 'Vulio',
    subheader: 'Italian',
    image: './images/vulio.jpg',
    firstInfo: "In the center of Rome, near Vatican City, a cool fast food of tipical apulian products.",
    moreInfo: "You can find more info at https://www.facebook.com/vuliopuglia/",
    uniqueId: '4vulio4',
    tags: [{ value: 'Italian' }],
  },

  {
    title: 'Ristorante Nerone',
    subheader: 'Local Food',
    image: './images/ristorante.jpg',
    firstInfo: "Incredible oasis of friendly service and amazing food.",
    moreInfo: "You can find more info at http://www.neronealviminale.it/",
    uniqueId: '5ristorante5',
    tags: [{ value: 'Local Food' }],
  },

  {
    title: 'Pinsitaly Trevi',
    subheader: 'Local Food',
    image: './images/pinsitaly.jpg',
    firstInfo: "Excellent food, service and perfect rice balls. "
      + "Defiantly worth stopping here for a quick bite. A little slice of Italy tucked away.",
    moreInfo: "You can find more info at https://pinsitaly.com/",
    uniqueId: '6pinsitaly6',
    tags: [{ value: 'Local Food' }],
  },
]

export default class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredTags: [],
    }
  }

  whichCityArray = () => {
    if (this.props.currentCity == "Paris") return parisRestaurants;
    else if (this.props.currentCity == "Amsterdam") return amsterdamRestaurants;
    else if (this.props.currentCity == "London") return londonRestaurants;
    else if (this.props.currentCity == "Edinburgh") return edinburghRestaurants;
    else return romeRestaurants;
  }

  search = (restaurants) => {
    if (this.state.filteredTags.length == 0) return this.whichCityArray();
    else {
      return restaurants.filter(restaurant =>
        this.state.filteredTags.some(constraint =>
          restaurant.tags.some(obj => obj.value === constraint)
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
    return (
      <div className="EasyTravel">
        <FormControl component="fieldset" //className={classes.formControl}>
        >
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
        <CardsGrid cardsList={this.search(this.whichCityArray())}></CardsGrid>
      </div>
    );
  }
}