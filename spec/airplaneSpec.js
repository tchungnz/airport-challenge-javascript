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
      expect(airplane.airport).toBeNull;
    });
  });
});
