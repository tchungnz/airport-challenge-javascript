Array.prototype.remove = function (value) {
  if (this.indexOf(value)=== -1) {
    return false;
  }
  else {
    this.splice(this.indexOf(value), 1);
  }
}
