describe('Weather', function(){
  var weather;

  beforeEach(function(){
    weather = new Weather;
  });

  describe('stormy', function(){
    it('returns true 20% of the time', function(){
      spyOn(Math, 'random').and.returnValue(0);
      expect(weather.stormy()).toBeTruthy();
    });
  });

  describe('no stormy', function() {
    it('returns false 80% of the time', function(){
      spyOn(Math, 'random').and.returnValue(0.3);
      expect(weather.stormy()).toBeFalsy();
    });
  });
});
