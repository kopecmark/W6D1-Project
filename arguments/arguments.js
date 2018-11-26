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


// // simple myBind with no args
// Function.prototype.myBind = function (ctx) {
//   return () => this.apply(ctx);
// };

// myBind with arguments
Function.prototype.myBind = function (ctx, ...bindArgs) {
  return (...callArgs) => {
    return this.apply(ctx, bindArgs.concat(callArgs));
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  meow() {
    console.log(`${this.name} says meow!`);
  }
}

const curie = new Cat("Curie");
setTimeout(curie.meow.myBind(curie), 1000);
