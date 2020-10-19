CREATE DATABASE  IF NOT EXISTS `easytravel_db`;
USE `easytravel_db`;
-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: easytravel_db
-- ------------------------------------------------------
-- Server version	8.0.21

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
CREATE TABLE `cities` (
  `city_key` int NOT NULL,
  `city_name` varchar(45) DEFAULT NULL,
  `image_url` varchar(45) DEFAULT NULL,
  `image_width` varchar(45) DEFAULT NULL,
  `city_path` varchar(45) DEFAULT NULL,
  `page` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `cities`
--

LOCK TABLES `cities` WRITE;
INSERT INTO `cities` VALUES (1,'Paris','../images/paris/paris_logo.jpg','20%','/paris','CityPage'),(2,'Amsterdam','../images/amsterdam/amsterdam_logo.jpg','20%','/amsterdam','CityPage'),(3,'London','../images/london/london_logo.jpg','20%','/london','CityPage'),(4,'Edinburgh','../images/edinburgh/edinburgh_logo.jpg','20%','/edinburgh','CityPage'),(5,'Rome','../images/rome/rome_logo.jpg','20%','/rome','CityPage');
UNLOCK TABLES;

--
-- Table structure for table `attractions`
--

DROP TABLE IF EXISTS `attractions`;
CREATE TABLE `attractions` (
  `city_key` int DEFAULT NULL,
  `city_name` varchar(9) DEFAULT NULL,
  `attraction_name` varchar(27) DEFAULT NULL,
  `subheader` varchar(25) DEFAULT NULL,
  `image_url` varchar(51) DEFAULT NULL,
  `first_info` varchar(383) DEFAULT NULL,
  `more_info` varchar(87) DEFAULT NULL,
  `tags` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `attractions`
--

LOCK TABLES `attractions` WRITE;
INSERT INTO `attractions` VALUES (1,'Paris','Louvre Museum','Galleries and Museums','./images/paris/attractions/louvre.jpg','Home to Leonardo da Vinci\'s Mona Lisa, the Louvre is considered the world\'s greatest art museum, with an unparalleled collection of items covering the full spectrum of art through the ages.\"','You can find more info at https://www.louvre.fr/en','Galleries and Museums'),(1,'Paris','Musee Marmottan Monet','Galleries and Museums','./images/paris/attractions/monet.jpg','Located in a 19th-century mansion, this museum\'s fabulous collection of Impressionist paintings ranks second only behind the Musée d\'Orsay.','You can find more info at https://www.marmottan.fr/','Galleries and Museums'),(1,'Paris','Bastille Market','Street Markets','./images/paris/attractions/bastille.jpg','One of the biggest Parisian markets, with Place de la Bastille\'s Colonne de Juillet as the backdrop. A hundred or so stalls offer a huge range of products.','You can find more info at https://en.parisinfo.com/shopping-paris/73869/Marche-Bastille','Street Markets'),(1,'Paris','Rue Mouffetard Market','Street Markets','./images/paris/attractions/rue.jpg','A large street market in the Latin Quarter.','You can find more info at https://www.rue-mouffetard.com/market.html','Street Markets'),(1,'Paris','Arc de Triomphe','Historic Sites and Houses','/images/paris/attractions/triomphe.jpg','The Arc de triomphe was begun in 1806, on the orders of Napoleon I to honour. the victories of his Grande Armée. Inspired by the great arches of antiquity, the monument combines the commemorative with the symbolic and it has always played a major role in the national republican consciousness.','You can find more info at http://www.paris-arc-de-triomphe.fr/','Historic Sites and Houses'),(1,'Paris','Sainte-Chapelle','Historic Sites and Houses','./images/paris/attractions/sainte.jpg','The Sainte-Chapelle is the finest royal chapel to be built in France and features a truly exceptional collection of stained-glass windows. It was built in the mid-13th century by Louis IX, at the heart of the royal residence, the Palais de la Cité.','You can find more info at http://www.sainte-chapelle.fr/','Historic Sites and Houses'),(2,'Amsterdam','Anne Frank House','Galleries and Museums','./images/amsterdam/attractions/anne.jpg','The Anne Frank House is a museum with a story. As a visitor, you experience this story through a free audio tour, quotes, photos, videos, and original items.','You can find more info at https://www.annefrank.org/en/','Galleries and Museums'),(2,'Amsterdam','Van Gogh Museum','Galleries and Museums','./images/amsterdam/attractions/vangogh.jpg','Discover the world\'s largest collection of works by Dutch painter Vincent van Gogh, featuring masterpieces such as Sunflowers, The Potato Eaters, Almond Blossom and The Bedroom.','You can find more info at https://www.vangoghmuseum.nl/','Galleries and Museums'),(2,'Amsterdam','Noordermarkt','Street Markets','./images/amsterdam/attractions/noordermarkt.jpg','Amsterdam is THE market city of Holland. Below the ‘Noorderkerk\', on one of the city\'s most beautiful squares, the Noordermarkt takes place on Mondays and Saturdays.','You can find more info at https://noordermarkt-amsterdam.nl/','Street Markets'),(2,'Amsterdam','Albert Cuyp Market','Street Markets','./images/amsterdam/attractions/cuyp.jpg','The city\'s largest street market is just south of the city center.','You can find more info at https://albertcuyp-markt.amsterdam/?lang=en','Street Markets'),(2,'Amsterdam','Concertgebouw','Historic Sites and Houses','./images/amsterdam/attractions/concertgebouw.jpg','The Royal Concertgebouw is one of the world\'s most famous concert halls renowned for its exceptional acoustics. With 700 concerts a year the Concertgebouw offers a varied programme featuring leading international musicians, orchestras, and conductors.','You can find more info at https://www.concertgebouw.nl/','Historic Sites and Houses'),(2,'Amsterdam','St. Nicholas Basilica','Historic Sites and Houses','./images/amsterdam/attractions/basilica.jpg','The colossal St. Nicholas Basilica was built in 1884. It’s one of the few large Catholic churches in Amsterdam that has been predominantly Protestant since the alliteration.','You can find more info at https://www.hotelamsterdamcentre.com/saint-nicholas-basilica/','Historic Sites and Houses'),(3,'London','Big Ben','Galleries and Museums','./images/london/attractions/bigben.jpg','\"The Houses of Parliament and Elizabeth Tower, commonly called Big Ben, are among London\'s most iconic landmarks and must-see London attractions. Technically, Big Ben is the name given to the massive bell inside the clock tower, which weighs more than 13 tons (13,760 kg). The clock tower looks spectacular at night when the four clock faces are illuminated.','You can find more info at visitlondon.com','Galleries and Museums'),(3,'London','Tower Bridge','Historic Sites and Houses','./images/london/attractions/towerbridge.jpg','See inside the most famous bridge in the world and discover the stories behind the engineering, the people, the architecture and the city that built Tower Bridge.','You can find more info at visitlondon.com','Historic Sites and Houses'),(3,'London','Camden Market','Street Markets','./images/london/attractions/camden.jpg','We\'re driven by the belief that you can only keep discovering if you keep looking ... so we\'re always adding interesting stores and traders. No two days are ever the same at Camden Market. Keep checking back to see what\'s new and what\'s next.','You can find more info at https://www.camdenmarket.com/visit-us','Street Markets'),(3,'London','National Gallery','Galleries and Museums','./images/london/attractions/nationalgallery.jpg','Explore the story of European art at the National Gallery, masterpiece by masterpiece, with its collection belonging to the public which includes inspiring works by Botticelli, Leonardo da Vinci, Rembrandt, Gainsborough, Turner, Renoir and Van Gogh. There are free guided tours, audio guides available in multiple languages and free family activities for children of all ages.','You can find more info at visitlondon.com','Galleries and Museums'),(3,'London','Victoria and Albert Museum','Galleries and Museums','./images/london/attractions/victoriaandalbert.jpg','The Victoria and Albert Museum is the world\'s leading museum of art, design, and performance, representing more than 3,000 years of human creativity, with collections unrivaled in their scope and diversity and an inspiring range of events.','You can find more info at visitlondon.com','Galleries and Museums'),(3,'London','Buckingham Palace','Historic Sites and Houses','./images/london/attractions/buckpalace.jpg','Buckingham Palace is the London residence and administrative headquarters of the monarchy of the United Kingdom. Located in the City of Westminster, the palace is often at the centre of state occasions and royal hospitality. It has been a focal point for the British people at times of national rejoicing and mourning.','You can find more info at visitlondon.com','Historic Sites and Houses'),(4,'Edinburgh','National Museum of Scotland','Galleries and Museums','./images/edinburgh/attractions/nationalscotland.jpg','Explore the diversity of the natural world, world cultures, science and technology, art, design and fashion, and Scottish history, all under one roof.','You can find more info at https://www.nms.ac.uk/national-museum-of-scotland/','Galleries and Museums'),(4,'Edinburgh','Scottish National Gallery','Galleries and Museums','./images/edinburgh/attractions/scottishgallery.jpg','Situated in the heart of Edinburgh, the Scottish National Gallery is home to one of the best collections of fine art in the world. This includes masterpieces by Botticelli, Raphael, Titian, Rembrandt, Vermeer, Constable, Turner, Monet, Van Gogh and Gauguin.','https://www.visitscotland.com/info/see-do/scottish-national-gallery-p246151','Galleries and Museums'),(4,'Edinburgh','Stockbridge Market','Street Markets','./images/edinburgh/attractions/stockbridge.jpg','It\'s a foodie heaven and hosts the best street food in Edinburgh, so whether you\'re looking for something special for supper, a continental style lunch, or planning a dinner party - the Stockbridge Market will have some new produce for you to try.','You can find more info at http://www.stockbridgemarket.com/','Street Markets'),(4,'Edinburgh','Edinburgh Farmers Market','Street Markets','./images/edinburgh/attractions/farmers.jpg','Fresh, seasonal produce awaits you at the award-winning Edinburgh Farmers\' Market.','You can find more info at https://www.edinburghfarmersmarket.co.uk/','Street Markets'),(4,'Edinburgh','Palace of Holyroodhouse','Historic Sites and Houses','./images/edinburgh/attractions/holyroodhouse.jpg','Explore the Palace\'s close associations with some of Scotland’s most well-known historic figures such as Mary, Queen of Scots and Bonnie Prince Charlie, and learn how today it is used by The Queen when carrying out official engagements in Scotland.','You can find more info at https://www.rct.uk/visit/palace-of-holyroodhouse','Historic Sites and Houses'),(4,'Edinburgh','The Real Mary Kings Close','Historic Sites and Houses','./images/edinburgh/attractions/marykings.jpg','Hidden beneath the Royal Mile lies Edinburgh’s deepest secret: a warren of hidden ‘closes’ where real people lived, worked and died. For centuries they have lain forgotten and abandoned… until now.','You can find more info at https://www.realmarykingsclose.com/','Historic Sites and Houses'),(5,'Rome','Galleria Borghese','Galleries and Museums','./images/rome/attractions/borghese.jpg','The Museum in the beautiful setting of Villa Borghese in Rome preserves sculptures, reliefs and ancient mosaics, and paintings and sculptures from the fifteenth to the eighteenth century.','You can find more info at https://galleriaborghese.beniculturali.it/','Galleries and Museums'),(5,'Rome','Palazzo Doria Pamphilj','Galleries and Museums','./images/rome/attractions/pamphilj.jpg','Stunning palace located in a central location. Full of galleries of gorgeous paintings. Make sure to ask for the audio guide to get the full experience.','You can find more info at https://www.doriapamphilj.it/roma/','Galleries and Museums'),(5,'Rome','Mercato Trionfale','Street Markets','./images/rome/attractions/trionfale.jpg','Trionfale market is considered the first corner market in Rome and with its 273 stalls is the biggest in town, and among the biggest ones in Italy and even in Europe. Open on Giulio Cesare avenue at the end of ‘800, for years it has been a transit spot for those going out of town or hunting and stopped with carriage or horses to refuel. At that time, it was countryside all around.','You can find more info at http://marketsofrome.com/food-market/102-trionfale-market','Street Markets'),(5,'Rome','Mercato dei Fiori','Street Markets','./images/rome/attractions/fiori.jpg','Many words have been written about the market at Campo dei Fiori in Rome. It has been part of the long history of the capital and has appeared in the scenes of many films. Here you can find some practical information to fully enjoy the market and its unique atmosphere, where ancient and modern live together.','You can find more info at https://www.mercatofiori.com/','Street Markets'),(5,'Rome','Roman Forum','Historic Sites and Houses','./images/rome/attractions/romanforum.jpg','The Roman Forum was where religious and public life in ancient Rome took place. Forum is, along with the Colosseum, the greatest sign of the splendour of the Roman Empire that can be seen today.','You can find more info at https://www.rome.net/roman-forum','Historic Sites and Houses'),(5,'Rome','Colosseum','Historic Sites and Houses','./images/rome/attractions/colosseum.jpg','Perhaps the best-preserved of the monuments of ancient Rome, this huge marble structure was built to hold more than 50,000 spectators to witness bloody contests of might and the slaughter of wild beasts.','You can find more info at https://www.coopculture.it/en/colosseo-e-shop.cfm','Historic Sites and Houses');
UNLOCK TABLES;

--
-- Table structure for table `restaurants`
--

DROP TABLE IF EXISTS `restaurants`;
CREATE TABLE `restaurants` (
  `city_key` int DEFAULT NULL,
  `city_name` varchar(30) DEFAULT NULL,
  `restaurant_name` varchar(30) DEFAULT NULL,
  `subheader` varchar(30) DEFAULT NULL,
  `image_url` varchar(60) DEFAULT NULL,
  `first_info` varchar(600) DEFAULT NULL,
  `more_info` varchar(100) DEFAULT NULL,
  `tags` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `restaurants`
--

LOCK TABLES `restaurants` WRITE;
INSERT INTO `restaurants` VALUES (1,'Paris','Chez Ajia','Asian','./images/paris/restaurants/chez.jpeg','\"A few steps from the metro Saint-Paul, Chez Ajia offers a culinary journey to the small island of Taiwan. In a cozy and modern setting, discover traditional family cooking, which will not fail to awaken your taste buds.','You can find more info at http://www.ajia.fr/','Asian'),(1,'Paris','Royal Dragon','Asian','./images/paris/restaurants/royaldragon.jpg','Taste mouthwatering nems, sushi and soup that are served at Royal DRAGON. If hungry, come here for tasty parfait, beignets and tiramisu. Good wine is among the best drinks to try.','You can find more info at https://www.facebook.com/royalDraogon/','Asian'),(1,'Paris','Via Emilia','Italian','./images/paris/restaurants/viaemilia.jpg','The cozy atmosphere of this place allows guests to relax after a hard-working day. The competent staff works hard, stays positive and makes this place great. If you want to experience fabulous service, you should visit this spot.','You can find more info at http://www.facebook.com/viaemiliaristorante','Italian'),(1,'Paris','Tra di Noi','Italian','./images/paris/restaurants/noi.png','Absolutely brilliant. Off the tourist trail, but a must visit. Very authentic Italian food, great service, faultless all round.','You can find more info at https://www.facebook.com/tradinoiparis/','Italian'),(1,'Paris','La Table de Colette','Local Food','./images/paris/restaurants/colette.jpg','A mix of welcoming staff, incredible, down to earth owner and amazing, fresh food makes this place very special.','You can find more info at http://www.latabledecolette.fr/','Local Food'),(1,'Paris','Boutary','Local Food','./images/paris/restaurants/boutary.jpg','Boutary is a chic and trendy \'boutique bistro\' with traditional French roots but a modern and affordable approach to gastronomic cuisine.','You can find more info at http://www.boutary-restaurant.com/','Local Food'),(2,'Amsterdam','Tasty Asia','Asian','./images/amsterdam/restaurants/tastyasia.jpg','A small, but cozy asian fusion restaurant nearby the famous Rembrandt Square.','You can find more info at http://www.tasty-asia.nl/','Asian'),(2,'Amsterdam','Rakang','Asian','./images/amsterdam/restaurants/rakang.jpg','Situated in Amsterdams nicest area Jordaan, Rakang is a place you shouldn\'t miss. It\'s a place that stimulates your creativity and definitely guarantees you lots of fun.','You can find more info at http://www.rakang.nl/','Asian'),(2,'Amsterdam','Dope','Italian','./images/amsterdam/restaurants/dope.jpg','Exceptional pizza with top notch ingredients and very reasonable value for the money.','You can find more info at https://www.pizzariadope-amsterdam.nl/','Italian'),(2,'Amsterdam','Bussia','Italian','./images/amsterdam/restaurants/bussia.jpg','The best dinner of our week in Amsterdam. The food, service, and atmosphere are perfectly aligned.','You can find more info at http://www.bussia.nl/','Italian'),(2,'Amsterdam','De Silveren Spiegel','Local Food','./images/amsterdam/restaurants/spiegel.jpg','Elegance, tradition and hospitality are the core traits of one of Amsterdam’s finest restaurants, de Silveren Spiegel (the Silver Mirror).','You can find more info at https://www.desilverenspiegel.com/','Local Food'),(2,'Amsterdam','VISSER Amsterdam','Local Food','./images/amsterdam/restaurants/visser.jpg','Fantastic spot in the beautiful and busy Jordaan area of Amsterdam.','You can find more info at http://www.visseramsterdam.nl/','Local Food'),(3,'London','Amrutha Lounge','Asian','./images/london/restaurants/amruthalounge.jpg','Innovative vegan dishes and heart-warming classics are lovingly prepared on the premises our chefs on a daily basis. The food is made from scratch with an emphasis on taking simple ingredients and elevating them to extraordinary levels, that’s our version of ‘Vegan Soul Food’.','You can find more info at https://www.amrutha.co.uk/','Asian'),(3,'London','Yuu Kitchen','Asian','./images/london/restaurants/yuukitchen.jpg','Yuu Kitchen Restaurant features authentic Japanese and South-East Asian flavours. This new gastronomy concept, uses the highest quality produce executed with precision cooking in a fun and exciting setting. The menu is designed for sharing with a choice of small plates that will take you on an explosive flavour journey. Indulge in Asian favourites like gourmet Bao, Korean Ssam and Chicken Karaage.','You can find more info at https://www.yuukitchen.com/','Asian'),(3,'London','E Pellicci','Italian','./images/london/restaurants/epellicci.jpg','A classic East London café that has been serving the local community for over a century!','You can find more info at https://epellicci.co.uk/','Italian'),(3,'London','Morso Abbey Road','Italian','./images/london/restaurants/morsoabbeyroad.jpg','Morso is a modern community-centred restaurant and bar, serving hand-crafted fresh pasta small plates of Italian bites alongside innovative Grappa-based cocktails.','You can find more info at https://www.morsolondon.co.uk/','Italian'),(3,'London','The Lounge Cafe','Local Food','./images/london/restaurants/theloungecafe.jpg','The Victoria and Albert Museum is the world\'s leading museum of art, design, and performance, more than 3,000 years of human creativity, with collections unrivaled in their scope and diversity and an inspiring range of events.','You can find more info at https://www.facebook.com/loungecafewembley/','Local Food'),(3,'London','The Golden Chippy','Local Food','./images/london/restaurants/thegoldenchippy.jpg','Golden Chippy is one of the most popular Fish and Chips Takeaway in Greenwich, London. The food is bursting with flavour that will never disappoint!','You can find more info at https://thegoldenchippy.has.restaurant/','Local Food'),(4,'Edinburgh','Chizuru Tei','Asian','./images/edinburgh/restaurants/chizurutei.jpg','Fresh and quality Japanese food at reasonable price!','You can find more info at https://www.chizurutei.co.uk/','Asian'),(4,'Edinburgh','Wee Buddha','Asian','./images/edinburgh/restaurants/weebuddha.jpg','Eclectic asian food, washed down with draught/bottled beer, cocktails or wine ...','You can find more info at http://www.weebuddha.co.uk/','Asian'),(4,'Edinburgh','Ristorante Isola','Italian','./images/edinburgh/restaurants/isola.jpg','Isola is specialize in regional Sardinian and Mediterranean cuisine.','You can find more info at https://www.ristoranteisola.co.uk/','Italian'),(4,'Edinburgh','Locanda De Gusti','Italian','./images/edinburgh/restaurants/gusti.jpg','TSouthern Italian using the very best of Italian and local Scottish produce.','You can find more info at http://www.locandadegusti.com/','Italian'),(4,'Edinburgh','The Kitchin','Local Food','./images/edinburgh/restaurants/kitchin.jpg','The Kitchin presents modern British seasonal cuisine influenced by French cooking techniques and an appreciation of the best quality ingredients available from Scotland\'s fantastic natural larder.','You can find more info at https://thekitchin.com/','Local Food'),(4,'Edinburgh','Cafe Marmalade','Local Food','./images/edinburgh/restaurants/marmalade.jpg','Outstanding service in a very pleasant atmosphere to go with excellent food.','You can find more info at https://www.facebook.com/cafemarmaladeleith/','Local Food'),(5,'Rome','Shiroya','Asian','./images/rome/restaurants/shiroya.jpg','The best Japanese eating experience in Italy. As good as the best restaurants in Tokyo! Authentic, wellprepared.','You can find more info at http://www.shiroya.it/','Asian'),(5,'Rome','Lamian Bar','Asian','./images/rome/restaurants/lamianbar.jpg','Excellent restaurant. Fantastic cuisine. Extremely helpful staff.','You can find more info at https://www.facebook.com/lamianbar/','Asian'),(5,'Rome','Bono Bottega Nostrana','Italian','./images/rome/restaurants/bono.jpg','Fabulous little gem in Rome, superb food. Simple sandwiches and taster boards lovingly crafted. Lots of drinks for all tastes. An absolute must for your visit to Rome.','You can find more info at http://www.botteganostrana.com/','Italian'),(5,'Rome','Vulio','Italian','./images/rome/restaurants/vulio.jpg','In the center of Rome, near Vatican City, a cool fast food of tipical apulian products.','You can find more info at https://www.facebook.com/vuliopuglia/','Italian'),(5,'Rome','Ristorante Nerone','Local Food','./images/rome/restaurants/ristorante.jpg','Incredible oasis of friendly service and amazing food.','You can find more info at http://www.neronealviminale.it/','Local Food'),(5,'Rome','Pinsitaly Trevi','Local Food','./images/rome/restaurants/pinsitaly.jpg','Excellent food, service and perfect rice balls. Defiantly worth stopping here for a quick bite. A little slice of Italy tucked away.','You can find more info at https://pinsitaly.com/','Local Food');
UNLOCK TABLES;

--
-- Table structure for table `facts`
--

DROP TABLE IF EXISTS `facts`;
CREATE TABLE `facts` (
  `city_key` int DEFAULT NULL,
  `city_name` varchar(50) DEFAULT NULL,
  `fact` varchar(200) DEFAULT NULL,
  `more_info` varchar(800) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `facts`
--

LOCK TABLES `facts` WRITE;
INSERT INTO `facts` VALUES (1,'Paris','City of Intellectuals','You’ve heard for sure people calling Paris the “City of Light”, but do you know why? It has nothing to do with the electrical power or the streetlights of the city. Lights in this case, means intellectuals, this nickname of Paris is referring to the high-concentration of writers, artists and academics that have always been drawn to the city.'),(1,'Paris','The Louvre is the world’s biggest art museum','The Louvre is the world’s largest art gallery and museum, it has over 38,000 pieces of art within its walls, including the most famous painting ever, Mona Lisa. In 2018, 10.8 million visitors passed through the doors of The Louvre, making it the most visited gallery on planet earth!'),(1,'Paris','The Eiffel Tower is not the most visited monument in Paris','Contrary to popular belief, the Eiffel Tower is actually not the most visited monument in Paris! The Eiffel Tower is ranked fourth among the most prized monuments in Paris. The cathedral Notre-Dame ranks first, followed by the Sacré-Coeur Basilica and the Louvre Museum. Be sure to visit them all when in Paris!'),(1,'Paris','Second busiest underground network in Europe','The most popular way that locals get around Paris is by their underground train system, around 5 million people per day use Paris Metro. After Moscow, it’s the busiest underground network in Europe. MEININGER TIP: Count your stations when using their metro  – who knows where you could end up otherwise, as Paris Metro system doesn’t announce their stops like most major cities.'),(1,'Paris','There are more dogs in Paris than children','Dogs are truly man’s best friends, but Parisians are taking it to a whole other level. In Paris they are truly caring about their pets, spending nearly half a million dollars just to make sure their dogs are getting the best treatments, it’s not uncommon to see their owners treating them to a doggy spa session. In MEININGER we love doggies too, take them with you when traveling, they are more then welcome to stay at our hotels.'),(1,'Paris','French came up with the military “dress code”','Paris is the fashion capital, most of the famous fashion brands are French brands (Chanel, Louis Vuitton, Dior, Jacquemus, you name it). Of course they were the ones which came up with the military clothes too. Camouflage clothing in the military was first used by the French, the word “camouflage” roughly translates to “make up for the stage”.'),(1,'Paris','First “Bloody Mary” was made in Paris','The famous “Bloody Mary” cocktail was invented in Paris at the Ritz Hotel. Legend says that this popular cocktail was made for the famous novelist Ernest Hemingway! Hemingway requested for a drink that didn’t smell like alcohol, so he was given vodka mixed with tomato juice.'),(1,'Paris','The French army still use carrier pigeons','The French army is the only one in Europe that still has carrier pigeons in its ranks. They are kept at the Mont Valérien close to Paris, these pigeons can be used to carry out transmissions in case of a major catastrophe.'),(1,'Paris','The Paris Syndrome','One of the weirdest facts about Paris. This condition is most frequent among Japanese visitors. The Japanese media often describes Paris as the most romantic destination in the world and place model looking people all dressed up on the streets of Paris which gives Japanese a slightly wrong perception of Paris. So, usually when they arrive they are super disappointed because the city can’t live up to their unrealistic expectations.'),(1,'Paris','Parisians declined Tom Cruise’s request for becoming an honorary citizen','The government of Paris passed a resolution to prohibit Tom Cruise from becoming an honorary citizen of the city. As you may know, Tom Cruise is a member of Scientology, a controversial religious organization, which France has classified as a cult. In 2005, Tom Cruise wanted to become an honorary citizen of the city of Paris, but the government of Paris blocked that move because of his affiliation with Scientology.'),(2,'Amsterdam','Everyone is a giant','The average Dutch man measures in at 1.83 m (6 ft 1 inches) and their lengthy female counterparts at a respectable 1.71 m (5 ft 6 inches). The Dutch are people you can look up to, literally. I often found myself cursing my 5 ft 4 inches height as I craned my neck upwards to be able to speak to them. The fun thing here is that the Dutch haven’t always been that tall, but in only a century’s time, they went from being amongst the shortest nations to being the tallest people on the planet!'),(2,'Amsterdam','People don\'t like curtains','If you walk around Amsterdam, you soon start to notice that nobody draws their curtains. Nobody. Curious about the neighbors new sofa bed? Want to know what most Dutch folks are watching on the TV? Want to know what they eat for dinner? You can find the answers to all your questions with a stroll along the canals! Of course I’m kidding, because (ironically to some) it’s considered impolite to stare inside.'),(2,'Amsterdam','There are more bikes than people in Amsterdam','The population of Amsterdam is around 825.000, and with an estimated 881.000 bikes in Amsterdam, it’s absolutely correct to say there are more bikes in the city than residents. About 70% of citizens are believed to use their bike daily, meaning that if you don’t own a bike, you are practically a weirdo. The Netherlands is famous for its dedication to cycling, and the vast amount of bikes lining its streets is kind of unbelievable at first.'),(2,'Amsterdam','Amsterdam has more canals than Venice','Venice is definitely the most well-known canalled city in the world, but not because of quantity. Often called the “Venice of the North,” Amsterdam boasts over 165 canals, about 15 more than Venice.'),(2,'Amsterdam','Buildings are wonky','In Amsterdam there are 7 famous leaning houses in a row called the Dancing Houses – but once you see one, you begin to see quite a few more. Building are that wonky because the foundations are build on trees, which are now sinking. What is even more funny is the fact that, instead of rebuilding the houses, they just straighten the facades, so you might see leaning buildings with perfectly straight doors and window frames. I personally find them beautiful!'),(2,'Amsterdam','There are 200+ coffee shops','Licensed coffee shops are allowed to sell soft drugs, and people are allowed to grow cannabis at home for personal use. But you know what’s really funny about it? Since this law was put in place, the amount of people in Amsterdam addicted to drugs has gone from 10,000 to 200, and the amount of locals who smoke weed on a regular basis went down to 5%!'),(2,'Amsterdam','Say no to smoking… Cigarettes!','Smoking tobacco in cafés and restaurants was banned in Amsterdam in 2008, and shops are mixing a kind of herbal tea as a substitute. Essentially, you can light up a joint, but if they catch you with tobacco…look out!'),(2,'Amsterdam','Amsterdam lies below sea level','Amsterdam, and even half of the Netherlands, lies below sea level. Apparently, without the various technologies that have been studied and implemented over the last five hundred years, the city would be submerged under about six feet of water.'),(2,'Amsterdam','There are over 2500 houseboats in the city','Floating in the canals of Amsterdam are over 2,500 houseboats which have become somewhat of an icon of the city. Many of them have been converted into hotels or b&b, so they’re perfect for those who want to experience what it’s like to live on a houseboat. For those who love cats, check out the unique “De Poezenboot.”, also known as the “Cat Boat”.'),(2,'Amsterdam','Amsterdam is one of the safest cities in the world','Surprised? For a city with the reputation of “anything goes” Amsterdam is actually among the safest cities in the world, and in a personal safety survey it ranked 13th. Amsterdam has also a far lower crime rate than most other prevalent European urban communities. After all, the more that is permitted, the less there is to get in trouble for.'),(3,'London','Oldest Subway in the World','London Underground was opened in 1863 for locomotive trains. In 1890, it became the world’s first metro system when electric trains began operating.'),(3,'London','Big Ben it’s not the name of the London’s Iconic Tower','Big Ben is the name for the massive 13 tons bell inside the clock tower and the name of the tower is Elizabeth Tower!'),(3,'London','Where did the Beatles Live in London all together?','The only true home shared by all four Beatles was a flat at 57 Green Street near Hyde Park, where they lived in the autumn of 1963.'),(3,'London','London Eye – The Tallest Ferris Wheel in Europe','London Eye is 135 meters tall and has a diameter of 120 meters. It has 32 capsules and a ride takes 30 minutes. The entire wheel weighs more than 1,000 tons.'),(3,'London','How do we know when the Queen is in the Buckingham Palace?','When the Queen is in the Buckingham Palace you can see her royal flag flying from the flagpole. This flag, which is called the Royal Standard, must only be flown from buildings where the Queen is present.'),(3,'London','Tower Bridge is Haunted?','The Tower Bridge is rumored to be haunted. For years, visitors have claimed sightings of a British police bobby patrolling the bridge and a woman in black roaming the night.'),(3,'London','London Cab Drivers need to memorize every single street in London','Black Cabs are very famous and part of the London culture, you can see them everywhere. But to become a Black Cab driver is not so easy. Typically the training last for 2 to 4 years and candidates must memorize every single street in London.'),(3,'London','Once the Polar Bear swam in the River Thames','In 1251, Henry III was given a polar bear by the King of Norway. Henry III kept the bear in the Tower of London, it had a long chain so that he could swim in the river Thames.'),(3,'London','The Houses of Parliament is the largest palace in the UK','The Houses of Parliament, officially known as the Palace of Westminster, has eight bars, six restaurants, 1,000 rooms, 100 staircases, 11 courtyards, a hair salon and rifle-shooting range.'),(3,'London','Say Cheese!','Each Englishman is daily photographed on 50 street surveillance cameras and a least 15 photos of tourists.'),(4,'Edinburgh','The Edinburgh fringe festival is the largest arts festival in the world','There will be over 3000 shows will be staged with a total of 50,000 performances across 300 venues. The population of Edinburgh doubles in size during Fringe with people travelling from far and wide just to experience it. This festival should be on everyone’s bucket list, this year it kicks off on 3 August. Altogether, Edinburgh\'s Festivals generate over £260m for the Scottish economy and create the equivalent of 5,242 full-time jobs each year.'),(4,'Edinburgh','The Harry Potter movies were filmed in Edinburgh','Much of J K Rowling’s inspiration for the Harry Potter books derived from Edinburgh. In fact, she wrote the majority of Harry Potter books while living in the city and you can visit some of the coffee shops and hotels such as Elephant House and Balmoral Hotel where she spent time writing the novels. You can visit the film locations including GreyFriars Kirkyard and Victoria Street, or take the Potter Trail, a tour that takes you through the relevant sites.'),(4,'Edinburgh','Over 75% of the city’s buildings are listed','Yup, more than 4,500 buildings make the list making Edinburgh home to the most listed sites in the UK after London.'),(4,'Edinburgh','The world’s one and only knighted penguin lives at Edinburgh zoo','And his name is Sir Nils Olav. The King penguin’s role includes inspecting the Norwegian Guard on their visits to the Scottish capital and since his knighthood in 2008, he’s since been promoted in the ranks to Brigadier. Only in Edinburgh!'),(4,'Edinburgh','Edinburgh wasn’t always the capital of Scotland','Weird to think but it’s totally true. Edinburgh replaced Scone as the capital of Scotland in 1437.'),(4,'Edinburgh','It’s the greenest city in the UK','Edinburgh has more trees per head of population than any other city in the UK. The capital is also home to 112 parks, the lungs of the city.'),(4,'Edinburgh','Edinburgh castle sits on an extinct volcano','Edinburgh Castle sits on Castle Rock, a 700 million year old extinct volcano. Make sure you\'re here at 1pm to see the \'One O\'Clock Gun\' fires be shot from the castle. This takes place every day in the capital (except Sundays) where spectators gather in the park to watch.'),(4,'Edinburgh','The castle was once home to an elephant','After a long post out in Sri Lanka in 1838, the 78th Highlanders came back to Edinburgh Castle with a surprise… They brought an elephant back with them as their regimental mascot and, in true Scottish style, it quickly developed a love for beer.'),(4,'Edinburgh','A unicorn is the national animal of Scotland','Sure, unicorns may not be real but that didn’t stop Scotland choosing the mythical creature as its national animal. The country is famed for its myths and legends, so if one place had to have an unicorn, it had to be Scotland.'),(4,'Edinburgh','Edinburgh is the world’s number one festival destination','Who knew? We\'ve already talked about The Edinburgh Fringe Festival in August is the biggest arts festival in the world. Then there\'s the Edinburgh International Book Festival, the largest festival of its kind.'),(5,'Rome','Rome was founded in 735 BC','Rome was thought to be founded in 753 BC by Romulus. Legend says that Romulus and his twin brother Remus were raised by a she-wolf after being abandoned in the Tiber river. Eventually, a shepherd found the boys and took them in as his own. After growing up, Romulus fought and killed Remus, becoming the first ruler of Rome!'),(5,'Rome','Cats are free to Roam in Rome','There is a law in Rome that permits cats to live where they were born without disturbance. While visiting Rome, you will be able to see hundreds of cats resting in the ruins of the Forum and walking on the walls of the Colosseum.'),(5,'Rome','The Roman’s Eyes Were Bigger Than Their Stomach','I’m sure you know just how delicious the Italian food is, but in Ancient Rome, it was common for citizens to vomit between their meals so they could continue to eat more.'),(5,'Rome','Men could only wear togas','In Ancient Rome, only free men could wear a toga, as it was a sign of Roman citizenship.'),(5,'Rome','Women wore Stola’s','The women wore stola’s, which was the female version of a toga.'),(5,'Rome','The Coins in The Trevi Fountain','3,000 Euros are collected from the bottom of the Trevi Fountain every night. All this money is donated to a catholic charity, Caritas, who uses the money to help needy families in Rome.'),(5,'Rome','Roman Breathalyzer','Roman spouses kissed their wives on the mouth at the end of the day. But, instead of doing it to show their unconditional love they were checking their partner’s breath to see if they had been sitting around drinking all day.'),(5,'Rome','Colosseum Casualties','Throughout the battles at the Colosseum, it is estimated that over 500,000 people and 1 million wild animals were killed. The last documented gladiator fight took place in 435 AD.'),(5,'Rome','The Life of Gladiators','Contrary to popular belief, Roman Gladiators rarely fought to the death. Instead they were considered celebrities. However, this fame did not bring ease into their lives. Some Gladiators did by in combat and many were slaves. These harsh conditions did inspire rebellions such as the famous rebellion led by Spartacus.'),(5,'Rome','Emperor Gaius Caligula','The Roman Emperor Gaius Caligula did some questionable things including: making his horse a senator, committing incest with his sisters, feeding prisoners to wild animals, and having conversations with the moon.');
UNLOCK TABLES;