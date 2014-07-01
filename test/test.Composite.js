'use strict';

describe('Composite', function(){
  var composites = require('..');
  var Composite = composites.Composite;

  describe('instance', function(){
    var sut;

    beforeEach(function(){
      sut = new Composite();
    });

    describe('.push()', function(){
      it('should should accept an array of values', function(){
        var composite = new Composite();
        sut.push(5);
        sut.push(composite);
        sut.push(6);
        composite.push(3);

        sut.join().should.equal('5,3,6');
      });
    });

    describe('.join()', function(){
      it('should joint values together with , by default', function(){
        sut.push(5).push(6).join().should.equal('5,6');
      });
    });
  });
});
