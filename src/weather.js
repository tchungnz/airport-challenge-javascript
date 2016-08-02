Weather = function(){

};

Weather.prototype.stormy = function() {
  return Math.floor(Math.random() * 5 + 1) === 1
};
