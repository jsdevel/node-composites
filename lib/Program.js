'use strict';

var CompositeString  = require('./CompositeString');
var inherits = require('util').inherits;

module.exports = Program;

function Program(){
  CompositeString.call(this);

  var push = this.push;

  this.push = function(){
    var args = [].slice.call(arguments);
    args.push('\n');
    push.apply(this, args);
    return this;
  }.bind(this);
}
inherits(Program, CompositeString);
