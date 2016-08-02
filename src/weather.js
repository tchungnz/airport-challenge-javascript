Weather = function(){

};

Weather.prototype.stormy = function(){
  Math.floor(Math.random() * 5 + 1) === 1;
};
