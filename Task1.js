//2626. Array Reduce Transformation
let reduce = function (nums, fn, init) {
  let acc = init;
  for (const element of nums) {
    acc = fn(acc, element);
  }
  return acc;
};
//2634. Filter Elements from Array
let filter = function (arr, fn) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};
//2619. Array Prototype Last
Array.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  }
  // return this[this.length - 1]; same as below
  return this.at(-1);
};
//2621. Sleep
async function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(resolve, millis);
  });
}
//2620. Counter
let createCounter = function (n) {
  let count = n;
  return function () {
    return count++;
  };
};
//2629. Function Composition
let compose = function (functions) {
  return function (x) {
    let result = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }
    return result;
  };
};
