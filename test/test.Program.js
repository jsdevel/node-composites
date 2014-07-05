'use strict';

describe('Program', function(){
  var assert    = require('assert');
  var composites = require('..');
  var Composite = composites.Composite;
  var Program   = composites.Program;

  it('is an instance of Composite', function(){
    (new Program()).should.be.an.instanceOf(Composite);
  });

  describe('instance', function(){
    var sut;

    beforeEach(function(){
      sut = new Program();
    });

    describe('.join()', function(){
      it('should join values together with newline', function(){
        sut.push('if(', 5, ')');
        sut.toString().should.equal('if(5)\n');
      });
    });

    it('should allow push to be chained', function(){
      var compoiste = new Program();
      compoiste.push('a').push('b').toString().should.equal('a\nb\n');
    });
  });
});
