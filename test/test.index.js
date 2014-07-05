describe('index', function(){
  var index           = require('../index');
  var Composite       = require('../lib/Composite');
  var CompositeString = require('../lib/CompositeString');
  var Program = require('../lib/Program');

  it('should expose Composite', function(){
    index.Composite.should.equal(Composite);
  });

  it('should expose CompositeString', function(){
    index.CompositeString.should.equal(CompositeString);
  });

  it('should expose Program', function(){
    index.Program.should.equal(Program);
  });

  it('should allow push to be chained', function(){
    var compoiste = new Composite();
    compoiste.push('a').push('b');
  });
});
