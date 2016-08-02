describe ('Airport', function() {

  var airport;

  beforeEach (function () {
    airport = new Airport ();
    plane = jasmine.createSpy('Plane')
  });

  describe ('when constructed it', function () {
    it('has an array of empty planes', function () {
      expect(airport.planes).toEqual([]);
    });
    it('has a function land plane', function () {
      expect(airport.land).toBeDefined();
    });
    it('has a function take off plane', function () {
      expect(airport.takeOff).toBeDefined();
    });
  });

  describe ('when a plane is landed', function () {
    it('the airport has a plane', function () {
      airport.land(plane);
      expect(airport.planes).toEqual([plane]);
    });
  });

  describe ('when a plane has taken off', function () {
    it('the airport has a plane', function () {
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.planes).not.toContain(plane);
    });
  });

});
