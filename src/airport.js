// require('./src/array.js')()

Airport = function () {
  this.planes = [];
  weather = new Weather;
}

Airport.prototype.land = function () {
  if(weather.stormy()){
    throw new Error("Not safe to land!")
  }
  else{
    this.planes.push(plane);
  }
}

Airport.prototype.takeOff = function (plane) {
  if(weather.stormy()){
    throw new Error("Not safe to take off!");
  }
  else{
    this.planes.remove(plane);
  }
}
