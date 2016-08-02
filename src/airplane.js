Airplane = function () {
  this.fly = true;
  this.airport = null;
}

Airplane.prototype.land = function (airport) {
  this.fly = false;
  this.airport = airport;
}

Airplane.prototype.takeOff = function () {
  this.fly = true;
  this.airport = null;
}
