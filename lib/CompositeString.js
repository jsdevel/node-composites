'use strict';

var Composite  = require('./Composite');
var inherits = require('util').inherits;

module.exports = CompositeString;

function CompositeString(){
  Composite.call(this, '');
}
inherits(CompositeString, Composite);
