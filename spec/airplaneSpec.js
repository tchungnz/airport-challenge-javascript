describe('Airplane', function(){
  var airplane;

  beforeEach(function(){
    airplane = new Airplane();
    airport = jasmine.createSpy('Airport');
  });

  describe('when constructed it', function(){
    it('can fly', function(){
      expect(airplane.fly).toEqual(true);
    });

    it('has no airport', function(){
      expect(airplane.airport).toBeNull();
    });
  });

  describe('when it lands', function() {
    it('changes fly to false and it lands at airport', function() {
      airplane.land(airport);
      expect(airplane.fly).toBeFalsy();
      expect(airplane.airport).toEqual(airport);
    });
  });

  describe('when it takesoff', function() {
    it('changes fly to true and it leaves the airport', function() {
      airplane.takeOff(airport);
      expect(airplane.fly).toBeTruthy();
      expect(airplane.airport).toBeNull();
    });
  });

});
