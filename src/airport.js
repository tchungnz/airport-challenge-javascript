// require('./src/array.js')()

Airport = function () {
  this.planes = [];
}

Airport.prototype.land = function () {
  this.planes.push(plane);
}

Airport.prototype.takeOff = function (plane) {
  this.planes.remove(plane);
}

// Array.prototype.remove = function (value) {
//   if (this.indexOf(value)=== -1) {
//     return false;
//   }
//   else {
//     this.splice(this.indexOf(value), 1);
//   }
// }
