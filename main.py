from flask import Flask
from flask_cors import CORS
import json
from flask_mysqldb import MySQL

cities_options = ["Flights", "Where to Stay", "Attractions", "Restaurants", "Facts"]

app = Flask(__name__)
CORS(app)
if __name__ == "__name__":
    app.run(debug=True)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '918273645ttt'
app.config['MYSQL_DB'] = 'easytravel_db'

mysql = MySQL(app)


@app.route('/')
def hello_world():
    return json.dumps("Welcome to EasyTravel!")


@app.route('/cities', methods=['GET'])
def cities_data():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM cities")
    fetchedData = cur.fetchall()
    cur.close()
    return json.dumps(fetchedData)


@app.route('/citiesoptions', methods=['GET'])
def cities_options_data():
    return json.dumps(cities_options)


@app.route('/searchoptions', methods=['GET'])
def search_options():
    cur = mysql.connection.cursor()
    cur.execute("SELECT city_name FROM cities")
    cities_names = cur.fetchall()
    cur.close()
    return json.dumps(cities_names)


@app.route('/parisattractions', methods=['GET'])
def paris_attractions_data():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM attractions WHERE city_key = 1")
    paris_attractions = cur.fetchall()
    cur.close()
    return json.dumps(paris_attractions)


@app.route('/amsterdamattractions', methods=['GET'])
def amsterdam_attractions_data():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM attractions WHERE city_key = 2")
    amsterdam_attractions = cur.fetchall()
    cur.close()
    return json.dumps(amsterdam_attractions)


@app.route('/londonattractions', methods=['GET'])
def london_attractions_data():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM attractions WHERE city_key = 3")
    london_attractions = cur.fetchall()
    cur.close()
    return json.dumps(london_attractions)


@app.route('/edinburghattractions', methods=['GET'])
def edinburgh_attractions_data():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM attractions WHERE city_key = 4")
    edinburgh_attractions = cur.fetchall()
    cur.close()
    return json.dumps(edinburgh_attractions)


@app.route('/romeattractions', methods=['GET'])
def rome_attractions_data():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM attractions WHERE city_key = 5")
    rome_attractions = cur.fetchall()
    cur.close()
    return json.dumps(rome_attractions)


@app.route('/parisrestaurants', methods=['GET'])
def paris_restaurants_data():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM restaurants WHERE city_key = 1")
    paris_restaurants = cur.fetchall()
    cur.close()
    return json.dumps(paris_restaurants)


@app.route('/amsterdamrestaurants', methods=['GET'])
def amsterdam_restaurants_data():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM restaurants WHERE city_key = 2")
    amsterdam_restaurants = cur.fetchall()
    cur.close()
    return json.dumps(amsterdam_restaurants)


@app.route('/londonrestaurants', methods=['GET'])
def london_restaurants_data():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM restaurants WHERE city_key = 3")
    london_restaurants = cur.fetchall()
    cur.close()
    return json.dumps(london_restaurants)


@app.route('/edinburghrestaurants', methods=['GET'])
def edinburgh_restaurants_data():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM restaurants WHERE city_key = 4")
    edinburgh_restaurants = cur.fetchall()
    cur.close()
    return json.dumps(edinburgh_restaurants)


@app.route('/romerestaurants', methods=['GET'])
def rome_restaurants_data():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM restaurants WHERE city_key = 5")
    rome_restaurants = cur.fetchall()
    cur.close()
    return json.dumps(rome_restaurants)


@app.route('/parisfacts', methods=['GET'])
def paris_facts_data():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM facts WHERE city_key = 1")
    paris_facts = cur.fetchall()
    cur.close()
    return json.dumps(paris_facts)


@app.route('/amsterdamfacts', methods=['GET'])
def amsterdam_facts_data():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM facts WHERE city_key = 2")
    amsterdam_facts = cur.fetchall()
    cur.close()
    return json.dumps(amsterdam_facts)


@app.route('/londonfacts', methods=['GET'])
def london_facts_data():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM facts WHERE city_key = 3")
    london_facts = cur.fetchall()
    cur.close()
    return json.dumps(london_facts)


@app.route('/edinburghfacts', methods=['GET'])
def edinburgh_facts_data():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM facts WHERE city_key = 4")
    edinburgh_facts = cur.fetchall()
    cur.close()
    return json.dumps(edinburgh_facts)


@app.route('/romefacts', methods=['GET'])
def rome_facts_data():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM facts WHERE city_key = 5")
    rome_facts = cur.fetchall()
    cur.close()
    return json.dumps(rome_facts)

    