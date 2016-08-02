describe('Weather', function(){
  var weather;

  beforeEach(function(){
    weather = new Weather;
    spyOn(Math, 'random').andReturn(0.1);
  });

  describe('stormy', function(){
    it('returns true 20% of the time', function(){
      expect(weather.stormy).toEqual(true);
    })
  })
});
