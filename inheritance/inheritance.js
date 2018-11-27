Function.prototype.inherits = function inherits(Parent) {
  function Surrogate () {}
  Surrogate.prototype = Parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
  
};