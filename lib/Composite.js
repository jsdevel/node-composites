'use strict';

module.exports = Composite;

function Composite(seperator){
  seperator = typeof seperator === 'string' ? seperator :  ',';
  var nodes = [];

  this.push = function(){
    [].slice.call(arguments).forEach(function(node){
      nodes.push(node);
    });
    return this;
  }.bind(this);

  this.unshift = function(){
    [].slice.call(arguments).forEach(function(node){
      nodes.unshift(node);
    });
    return this;
  }.bind(this);

  this.join = function(){
    return nodes.join(seperator);
  }.bind(this);

  this.toString = function(){
    return this.join();
  }.bind(this);
}
