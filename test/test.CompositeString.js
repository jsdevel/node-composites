'use strict';

describe('CompositeString', function(){
  var composites = require('..');
  var CompositeString = composites.CompositeString;
  var Composite       = composites.Composite;

  it('should be an instance of Composite', function(){
    (new CompositeString()).should.be.an.instanceOf(Composite);
  });

  describe('instantiated', function(){
    var sut;

    beforeEach(function(){
      sut = new CompositeString();
      sut.push(5);
      sut.push(4);
      sut.push(3);
      sut.push({toString:function(){return 'foo';}});
    });

    it('joins without commas', function(){
      sut.join().should.equal('543foo');
    });

    it('converts nodes to strings', function(){
      (sut.toString()).should.equal('543foo');
    });
  });
});
