describe('Weather', function(){
  var weather;

  beforeEach(function(){
    weather = new Weather;
    spyOn(Math, 'random').and.returnValue(0);
  });

  describe('stormy', function(){
    it('returns true 20% of the time', function(){
      console.log(weather.stormy)
      console.log(Math.random())
      expect(weather.stormy).toBeTruthy();
    })
  })
});
