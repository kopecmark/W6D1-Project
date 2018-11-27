Function.prototype.inherits = function(Parent) {
  function Surrogate () {}
  Surrogate.prototype = Parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

Function.prototype.inherits2 = function inherits2(Parent) {
  this.prototype = Object.create(Parent);
  this.prototype.constructor = this;
};

function MovingObject () {}

function Ship () {}
Ship.inherits2(MovingObject);

function Asteroid () {}
Asteroid.inherits2(MovingObject);