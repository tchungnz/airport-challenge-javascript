describe ('Airport', function() {

  var airport;

  beforeEach (function () {
    airport = new Airport ();
    plane = jasmine.createSpy('Plane');
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
      spyOn(Math, 'random').and.returnValue(0.2);
      airport.land(plane);
      expect(airport.planes).toEqual([plane]);
    });
  });

  describe ('when a plane has taken off', function () {
    it('the airport does not have the plane', function () {
      spyOn(Math, 'random').and.returnValue(0.2);
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.planes).not.toContain(plane);
    });
  });

  describe ('when the weather is stormy', function(){
    it('planes cannot take off', function(){
      spyOn(Math, 'random').and.returnValue(0);
      expect(function(){
        airport.takeOff(plane)
      }).toThrowError("Not safe to take off!");
    })

    it('planes cannot land', function(){
      spyOn(Math, 'random').and.returnValue(0);
      expect(function(){
        airport.land(plane)
      }).toThrowError("Not safe to land!")
    })
  })
});
