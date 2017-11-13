let favoriteCityId = "rome";

console.log(favoriteCityId);

favoriteCityId = "paris";

console.log(favoriteCityId);

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];

console.log(citiesId);

// si je fait un = sur une constant sa plante on doit faire un push

citiesId.push("tokyo")

console.log(citiesId);

function getWeather(cityId){
    let city = cityId;
    let temperature = 20 ;
    return{city , temperature};
}

const weather = getWeather(favoriteCityId)


console.log(weather);

const {city ,temperature } = weather

console.log(city);
console.log(temperature);


let [parisId,nycId,...othersCitiesId] = citiesId;

console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);

class Trip{

    constructor(id, name, imageUrl){

        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        return 'Trip' + id, name, imageUrl
    }

    get price(){
        return this._price;
    }

    set price(newPrice){
        this._price = newPrice;
    }

  

}

let parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg')

console.log(parisTrip);
console.log(parisTrip.name);

Trip.prototype.toString = function(){
    
        return 'Trip ['+this.id+' , ' +this.name+' , '+ this.imageUrl+ ' , '+ this._price +']'
    
    }

parisTrip._price = 100;

console.log(parisTrip.toString());

Trip.getDefaultTrip = function(){
    return  new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
}

const defaultTrip =Trip.getDefaultTrip();

console.log(defaultTrip.toString());

class FreeTrip extends Trip{

        constructor(id, name, imageUrl){
            super(id, name, imageUrl)
            this.price = 0;
        }

}

const freeTrip = new FreeTrip('nantes','Nantes','img/nanges.jpg')

console.log(freeTrip.toString());

FreeTrip.prototype.toString = function(){
    
        return 'Free' + Trip.prototype.toString.call(this);
    
    }

console.log(freeTrip.toString());

class TripService {
    constructor() {
    // TODO Set of 3 trips
    //
    this.tripSet = new Set([
     new Trip('paris', 'Paris', 'img/paris.jpg'),
     new Trip('nantes', 'Nantes', 'img/nanges.jpg'),
     new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
    ])
    }
    findByName(tripName) {
    // TODO return promise
    }
    }
    class PriceService {
    constructor() {
    // TODO Map of 2 trips
    // 'paris' --> price = 100
    // 'rio-de-janeiro' --> price = 800)
    // no price for 'nantes'
    }
    findPriceByTripId(tripId) {
    // TODO return promise
    }
    }