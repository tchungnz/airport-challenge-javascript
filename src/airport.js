// require('./src/array.js')()

const AIRPORT_CAPACITY = 5;

Airport = function (capacity = 10) {
  this.AIRPORT_CAPACITY = capacity;
  this.planes = [];
  weather = new Weather;
}

Airport.prototype.land = function () {
  if (this.capacityFull()) {
    throw new Error("The airport is full!");
  }
  if(weather.stormy()){
    throw new Error("Not safe to land!");
  }
  else{
    this.planes.push(plane);
  }
}

Airport.prototype.takeOff = function (plane) {
  if (weather.stormy()){
    throw new Error("Not safe to take off!");
  }
  this.planes.remove(plane);
}

Airport.prototype.capacityFull = function () {
  return this.planes.length >= AIRPORT_CAPACITY;
}
