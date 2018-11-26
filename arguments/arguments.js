const sum = function() {
  let result = 0;
  let args = Array.from(arguments);
  args.forEach((num) => {
    result+=num;
  });
  return result;
};

const sum2 = (...nums) => {
  let result = 0;
  nums.forEach((num) => {
    result+=num;
  });
  return result;
};

Function.prototype.myBind = function () {
  let ctx = arguments[0];
  const func = this; 
  let bindArgs = Array.from(arguments).slice(1);
  
  return function innerFunc (...callArgs) {
      func.apply(ctx, bindArgs.concat(callArgs));
    }; 
  };
  
  Function.prototype.myBind2 = function (ctx, ...bindArgs) {
    let ctx2 = ctx;
    const func = this; 
    let bindArgs2 = Array.from(arguments).slice(1);
    
    return function innerFunc (...callArgs) {
      func.apply(ctx, bindArgs.concat(callArgs));
    }; 
  };

    class Cat {
    constructor(name) {
      this.name = name;
    }

    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }

  class Dog {
    constructor(name) {
      this.name = name;
    }
  }

  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");
  
console.log(markov.says.myBind(pavlov, "meow", "Kush")());

