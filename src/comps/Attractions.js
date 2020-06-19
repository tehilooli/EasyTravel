import React, { Component } from 'react';
import CardsGrid from './CardsGrid';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const parisAttractions = [
  {
    title: 'Louvre Museum',
    subheader: 'Galleries and Museums',
    image: './images/louvre.jpg',
    firstInfo: "Home to Leonardo da Vinci's Mona Lisa, the Louvre is considered the world's greatest art museum,"
      + "with an unparalleled collection of items covering the full spectrum of art through the ages.",
    moreInfo: "You can find more info at https://www.louvre.fr/en",
    uniqueId: '1louvre1',
    tags: [{ value: 'Galleries and Museums' }],
    isLiked: false,
  },

  {
    title: 'Musee Marmottan Monet',
    subheader: 'Galleries and Museums',
    image: './images/monet.jpg',
    firstInfo: "Located in a 19th-century mansion, this museum's fabulous collection"
      + "of Impressionist paintings ranks second only behind the Musée d'Orsay.",
    moreInfo: "You can find more info at https://www.marmottan.fr/",
    uniqueId: '2monet2',
    tags: [{ value: 'Galleries and Museums' }],
    isLiked: false,
  },

  {
    title: 'Bastille Market',
    subheader: 'Street Markets',
    image: './images/bastille.jpg',
    firstInfo: "One of the biggest Parisian markets, with Place de la Bastille's Colonne de Juillet as the backdrop."
      + "A hundred or so stalls offer a huge range of products.",
    moreInfo: "You can find more info at https://en.parisinfo.com/shopping-paris/73869/Marche-Bastille",
    uniqueId: '3bastillemarket3',
    tags: [{ value: 'Street Markets' }],
    isLiked: false,
  },

  {
    title: 'Rue Mouffetard Market',
    subheader: 'Street Markets',
    image: './images/rue.jpg',
    firstInfo: "A large street market in the Latin Quarter.",
    moreInfo: "You can find more info at https://www.rue-mouffetard.com/market.html",
    uniqueId: '4rue4',
    tags: [{ value: 'Street Markets' }],
    isLiked: false,
  },

  {
    title: 'Arc de Triomphe',
    subheader: 'Historic Sites and Houses',
    image: './images/triomphe.jpg',
    firstInfo: "The Arc de triomphe was begun in 1806, on the orders of Napoleon I to honour "
      + "the victories of his Grande Armée. Inspired by the great arches of antiquity, "
      + "the monument combines the commemorative with the symbolic "
      + "and it has always played a major role in the national republican consciousness.",
    moreInfo: "You can find more info at http://www.paris-arc-de-triomphe.fr/",
    uniqueId: '5triomphe5',
    tags: [{ value: 'Historic Sites and Houses' }],
    isLiked: false,
  },

  {
    title: 'Sainte-Chapelle',
    subheader: 'Historic Sites and Houses',
    image: './images/sainte.jpg',
    firstInfo: "The Sainte-Chapelle is the finest royal chapel to be built in France and features a truly exceptional collection of stained-glass windows. "
      + "It was built in the mid 13th century by Louis IX, at the heart of the royal residence, the Palais de la Cité.",
    moreInfo: "You can find more info at http://www.sainte-chapelle.fr/",
    uniqueId: '6sainte6',
    tags: [{ value: 'Historic Sites and Houses' }],
    isLiked: false,
  },
]

const amsterdamAttractions = [
  {
    title: 'Anne Frank House',
    subheader: 'Galleries and Museums',
    image: './images/anne.jpg',
    firstInfo: "The Anne Frank House is a museum with a story. As a visitor, you experience this story "
      + "through a free audio tour, quotes, photos, videos, and original items.",
    moreInfo: "You can find more info at https://www.annefrank.org/en/",
    uniqueId: '1anne1',
    tags: [{ value: 'Galleries and Museums' }],
  },

  {
    title: 'Van Gogh Museum',
    subheader: 'Galleries and Museums',
    image: './images/vangogh.jpg',
    firstInfo: "Discover the world's largest collection of works by Dutch painter Vincent van Gogh, "
      + "featuring masterpieces such as Sunflowers, The Potato Eaters, Almond Blossom and The Bedroom.",
    moreInfo: "You can find more info at https://www.vangoghmuseum.nl/",
    uniqueId: '2vangogh2',
    tags: [{ value: 'Galleries and Museums' }],
  },

  {
    title: 'Noordermarkt',
    subheader: 'Street Markets',
    image: './images/noordermarkt.jpg',
    firstInfo: "Amsterdam is THE market city of Holland. Below the ‘Noorderkerk', "
      + "on one of the cities most beautiful squares, the Noordermarkt takes place on Mondays and Saturdays.",
    moreInfo: "You can find more info at https://noordermarkt-amsterdam.nl/",
    uniqueId: '3noordermarkt3',
    tags: [{ value: 'Street Markets' }],
  },

  {
    title: 'Albert Cuyp Market',
    subheader: 'Street Markets',
    image: './images/cuyp.jpg',
    firstInfo: "The city's largest street market is just south of the city center.",
    moreInfo: "You can find more info at https://albertcuyp-markt.amsterdam/?lang=en",
    uniqueId: '4cuyp4',
    tags: [{ value: 'Street Markets' }],
  },

  {
    title: 'Concertgebouw',
    subheader: 'Historic Sites and Houses',
    image: './images/concertgebouw.jpg',
    firstInfo: "The Royal Concertgebouw is one of the world's most famous concert halls renowned for its exceptional acoustics. "
      + "With 700 concerts a year the Concertgebouw offers a varied programme "
      + "featuring leading international musicians, orchestras, and conductors. ",
    moreInfo: "You can find more info at https://www.concertgebouw.nl/",
    uniqueId: '5concertgebouw5',
    tags: [{ value: 'Historic Sites and Houses' }],
  },

  {
    title: 'St. Nicholas Basilica',
    subheader: 'Historic Sites and Houses',
    image: './images/basilica.jpg',
    firstInfo: "The colossal St. Nicholas Basilica was built in 1884. "
      + "It’s one of the few large Catholic churches in Amsterdam that has been predominantly Protestant since the alliteration.",
    moreInfo: "You can find more info at https://www.hotelamsterdamcentre.com/saint-nicholas-basilica/",
    uniqueId: '6basilica6',
    tags: [{ value: 'Historic Sites and Houses' }],
  },
]

const londonAttractions = [
  {
    title: 'Big Ben',
    subheader: 'Historic Sites and Houses',
    image: './images/bigben.jpg',
    firstInfo: "The Houses of Parliament and Elizabeth Tower, commonly called Big Ben, "
      + "are among London's most iconic landmarks and must-see London attractions. "
      + "Technically, Big Ben is the name given to the massive bell inside the clock tower, "
      + "which weighs more than 13 tons (13,760 kg). "
      + "The clock tower looks spectacular at night when the four clock faces are illuminated.",
    moreInfo: "You can find more info at visitlondon.com",
    uniqueId: '1bigben1',
    tags: [{ value: 'Historic Sites and Houses' }],
  },

  {
    title: 'Tower Bridge',
    subheader: 'Historic Sites and Houses',
    image: './images/towerbridge.jpg',
    firstInfo: "See inside the most famous bridge in the world and discover the stories behind the engineering, "
      + "the people, the architecture and the city that built Tower Bridge.",
    moreInfo: "You can find more info at visitlondon.com",
    uniqueId: '2towerbridge2',
    tags: [{ value: 'Historic Sites and Houses' }],
  },

  {
    title: 'London Eye',
    subheader: 'Street Markets',
    image: './images/londoneye.jpg',
    firstInfo: "At 135 metres, the London Eye is one of the world's tallest cantilevered observation wheels; "
      + "a feat of design and engineering it has become the modern symbol representing the capital and a global icon.",
    moreInfo: "You can find more info at visitlondon.com",
    uniqueId: '3londoneye3',
    tags: [{ value: 'Street Markets' }],
  },

  {
    title: 'National Gallery',
    subheader: 'Galleries and Museums',
    image: './images/nationalgallery.jpg',
    firstInfo: "Explore the story of European art at the National Gallery, masterpiece by masterpiece, "
      + "with its collection belonging to the public which includes inspiring works by Botticelli, "
      + "Leonardo da Vinci, Rembrandt, Gainsborough, Turner, Renoir and Van Gogh. "
      + "There are free guided tours, audio guides available in multiple languages "
      + "and free family activities for children of all ages.",
    moreInfo: "You can find more info at visitlondon.com",
    uniqueId: '4nationalgallery4',
    tags: [{ value: 'Galleries and Museums' }],
  },

  {
    title: 'Victoria and Albert Museum',
    subheader: 'Galleries and Museums',
    image: './images/victoriaandalbert.jpg',
    firstInfo: "The Victoria and Albert Museum is the world's leading museum of art, design, and performance, "
      + "representing more than 3,000 years of human creativity, with collections unrivaled in their scope and diversity and an inspiring range of events.",
    moreInfo: "You can find more info at visitlondon.com",
    uniqueId: '5victoriaandalbert5',
    tags: [{ value: 'Galleries and Museums' }],
  },

  {
    title: 'Buckingham Palace',
    subheader: 'Historic Sites and Houses',
    image: './images/buckpalace.jpg',
    firstInfo: "Buckingham Palace is the London residence and administrative headquarters of the monarchy of the United Kingdom. "
      + "Located in the City of Westminster, the palace is often at the centre of state occasions and royal hospitality. "
      + "It has been a focal point for the British people at times of national rejoicing and mourning.",
    moreInfo: "You can find more info at visitlondon.com",
    uniqueId: '6buckpalace6',
    tags: [{ value: 'Historic Sites and Houses' }],
  },
]

const edinburghAttractions = [
  {
    title: 'National Museum of Scotland',
    subheader: 'Galleries and Museums',
    image: './images/nationalscotland.jpg',
    firstInfo: "Explore the diversity of the natural world, world cultures, "
      + "science and technology, art, design and fashion, and Scottish history, all under one roof.",
    moreInfo: "You can find more info at https://www.nms.ac.uk/national-museum-of-scotland/",
    uniqueId: '1nationalscotland1',
    tags: [{ value: 'Galleries and Museums' }],
  },

  {
    title: 'Scottish National Gallery',
    subheader: 'Galleries and Museums',
    image: './images/scottishgallery.jpg',
    firstInfo: "Situated in the heart of Edinburgh, the Scottish National Gallery is home to one of the best collections of fine art "
      + "in the world. This includes masterpieces by Botticelli, Raphael, Titian, Rembrandt, Vermeer, Constable, Turner, Monet, Van Gogh and Gauguin.",
    moreInfo: "You can find more info at https://www.visitscotland.com/info/see-do/scottish-national-gallery-p246151",
    uniqueId: '2scottishgallery2',
    tags: [{ value: 'Galleries and Museums' }],
  },

  {
    title: 'Stockbridge Market',
    subheader: 'Street Markets',
    image: './images/stockbridge.jpg',
    firstInfo: "It's a foodie heaven and hosts the best street food in Edinburgh, "
      + "so whether you're looking for something special for supper, a continental style lunch, "
      + "or planning a dinner party - the Stockbridge Market will have some new produce for you to try.",
    moreInfo: "You can find more info at http://www.stockbridgemarket.com/",
    uniqueId: '3stockbridge3',
    tags: [{ value: 'Street Markets' }],
  },

  {
    title: 'Edinburgh Farmers Market',
    subheader: 'Street Markets',
    image: './images/farmers.jpg',
    firstInfo: "Fresh, seasonal produce awaits you at the award-winning Edinburgh Farmers' Market.",
    moreInfo: "You can find more info at https://www.edinburghfarmersmarket.co.uk/",
    uniqueId: '4farmers4',
    tags: [{ value: 'Street Markets' }],
  },

  {
    title: 'Palace of Holyroodhouse',
    subheader: 'Historic Sites and Houses',
    image: './images/holyroodhouse.jpg',
    firstInfo: "Explore the Palace's close associations with some of Scotland’s most well-known historic figures "
      + "such as Mary, Queen of Scots and Bonnie Prince Charlie, and learn how today it is used by The Queen "
      + "when carrying out official engagements in Scotland.",
    moreInfo: "You can find more info at https://www.rct.uk/visit/palace-of-holyroodhouse",
    uniqueId: '5holyroodhouse5',
    tags: [{ value: 'Historic Sites and Houses' }],
  },

  {
    title: 'The Real Mary Kings Close',
    subheader: 'Historic Sites and Houses',
    image: './images/marykings.jpg',
    firstInfo: "Hidden beneath the Royal Mile lies Edinburgh’s deepest secret: a warren of hidden ‘closes’ where real people lived, "
      + "worked and died. For centuries they have lain forgotten and abandoned…until now.",
    moreInfo: "You can find more info at https://www.realmarykingsclose.com/",
    uniqueId: '6marykings6',
    tags: [{ value: 'Historic Sites and Houses' }],
  },
]

const romeAttractions = [
  {
    title: 'Galleria Borghese',
    subheader: 'Galleries and Museums',
    image: './images/borghese.jpg',
    firstInfo: "The Museum in the beautiful setting of Villa Borghese in Rome preserves sculptures, "
      + "reliefs and ancient mosaics, and paintings and sculptures from the fifteenth to the eighteenth century.",
    moreInfo: "You can find more info at https://galleriaborghese.beniculturali.it/",
    uniqueId: '1borghese1',
    tags: [{ value: 'Galleries and Museums' }],
  },

  {
    title: 'Palazzo Doria Pamphilj',
    subheader: 'Galleries and Museums',
    image: './images/pamphilj.jpg',
    firstInfo: "Stunning palace located in a central location. Full of galleries of gorgeous paintings. "
      + "Make sure to ask for the audio guide to get the full experience.",
    moreInfo: "You can find more info at https://www.doriapamphilj.it/roma/",
    uniqueId: '2pamphilj2',
    tags: [{ value: 'Galleries and Museums' }],
  },

  {
    title: 'Mercato Trionfale',
    subheader: 'Street Markets',
    image: './images/trionfale.jpg',
    firstInfo: "Trionfale market is considered the first corner market in Rome and with its 273 stalls "
      + "is the biggest in town, and among the biggest ones in Italy and even in Europe. "
      + "Open on Giulio Cesare avenue at the end of ‘800, for years it has been a transit spot for those "
      + "going out of town or hunting and stopped with carriage or horses to refuel. At that time, it was countryside all around.",
    moreInfo: "You can find more info at http://marketsofrome.com/food-market/102-trionfale-market",
    uniqueId: '3trionfale3',
    tags: [{ value: 'Street Markets' }],
  },

  {
    title: 'Mercato dei Fiori',
    subheader: 'Street Markets',
    image: './images/fiori.jpg',
    firstInfo: "Many words have been written about the market at Campo dei Fiori in Rome. "
      + "It has been part of the long history of the capital and has appeared in the scenes of many films. "
      + "Here you can find some practical information to fully enjoy the market and its unique atmosphere, where ancient and modern live together.",
    moreInfo: "You can find more info at https://www.mercatofiori.com/",
    uniqueId: '4fiori4',
    tags: [{ value: 'Street Markets' }],
  },

  {
    title: 'Roman Forum',
    subheader: 'Historic Sites and Houses',
    image: './images/romanforum.jpg',
    firstInfo: "The Roman Forum was where religious and public life in ancient Rome took place. "
      + "The Forum is, along with the Colosseum, the greatest sign of the splendour of the Roman Empire that can be seen today.",
    moreInfo: "You can find more info at https://www.rome.net/roman-forum",
    uniqueId: '5romanforum5',
    tags: [{ value: 'Historic Sites and Houses' }],
  },

  {
    title: 'Colosseum',
    subheader: 'Historic Sites and Houses',
    image: './images/colosseum.jpg',
    firstInfo: "Perhaps the best-preserved of the monuments of ancient Rome, this huge marble structure "
      + "was built to hold more than 50,000 spectators to witness bloody contests of might and the slaughter of wild beasts.",
    moreInfo: "You can find more info at https://www.coopculture.it/en/colosseo-e-shop.cfm",
    uniqueId: '6colosseum6',
    tags: [{ value: 'Historic Sites and Houses' }],
  },
]

export default class Attractions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredTags: [],
      likedAttractions: [],
    }
  }

  whichCityArray = () => {
    if (this.props.currentCity == "Paris") return parisAttractions;
    else if (this.props.currentCity == "Amsterdam") return amsterdamAttractions;
    else if (this.props.currentCity == "London") return londonAttractions;
    else if (this.props.currentCity == "Edinburgh") return edinburghAttractions;
    else return romeAttractions;
  }

  search = (attractions) => {
    if (this.state.filteredTags.length == 0) return this.whichCityArray();
    else {
      return attractions.filter(attraction =>
        this.state.filteredTags.some(constraint =>
          attraction.tags.some(obj => obj.value === constraint)
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
        <CardsGrid cardsList={this.search(this.whichCityArray())}></CardsGrid>
      </div>
    );
  }
}