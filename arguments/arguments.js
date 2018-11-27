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

Function.prototype.myBind = function () { // uses the arguments Array-like object
  let ctx = arguments[0];
  const func = this; 
  let bindArgs = Array.from(arguments).slice(1);
  
  return function innerFunc (...callArgs) {
      func.apply(ctx, bindArgs.concat(callArgs));
    }; 
  };
  
Function.prototype.myBind2 = function (ctx, ...bindArgs) { // uses the rest operator
    let ctx2 = ctx;
    const func = this; 
    let bindArgs2 = Array.from(arguments).slice(1);
    
    return function innerFunc (...callArgs) {
      func.apply(ctx, bindArgs.concat(callArgs));
    }; 
  };

const curriedSum = (numArgs) => {
  
  let numbers = [];
  const _curriedSum = (num) => {
    numbers.push(num);
      
    if (numbers.length === numArgs) {
      let sum = 0;
      numbers.forEach((n) => sum += n);
      return sum;
    } else {
      return _curriedSum;
    }
  };
  return _curriedSum;
};

Function.prototype.curry = (numArgs) => {
  let args = [];
  const _curried = (num) => {
    args.push(num);
      
    if (args.length === numArgs) {
      args.forEach((n) => func(n));
      return this.apply(null,args);
    } else {
      return _curried;
    }
  };
  return _curried;
};


