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
//2635. Apply Transform Over Each Element in Array
let map = function (arr, fn) {
  let returnedArray = [];
  for (let i = 0; i < arr.length; i++) {
    //returnedArray[i] = fn(arr[i], i);
    // Использование push вместо прямой записи по индексу
    returnedArray.push(fn(arr[i], i));
  }
  return returnedArray;
};
//2648. Generate Fibonacci Sequence
let fibGenerator = function* () {
  //Функция-генератор function* умеет приостанавливать свое выполнение на ключевых словах yield, возвращать промежуточное значение, а затем продолжать работу с того же места.
  let current = 0;
  let next = 1;

  while (true) {
    // Сначала возвращаем текущее число Фибоначчи
    yield current; //Выдает значение наружу и ставит функцию на паузу

    // Пересчитываем значения для следующего шага
    // Используем деструктурирующее присваивание, чтобы обновить обе переменные одновременно
    //let temp = current + next;
    //current = next;
    //next = temp;
    [current, next] = [next, current + next];
  }
};
//2665. Counter II
let createCounter2 = function (init) {
  let currentValue = init;

  return {
    increment() {
      currentValue++;
      return currentValue;
    },
    decrement() {
      currentValue--;
      return currentValue;
    },
    reset() {
      currentValue = init;
      return currentValue;
    },
  };
};
// var createCounter = function (init) {
//   let currentValue = init;

//   return {
//     increment: () => ++currentValue,
//     decrement: () => --currentValue,
//     reset: () => (currentValue = init),
//   };
// };

// var createCounter = function (init) {
//   let currentValue = init;

//   return {
//     increment() {
//       return ++currentValue;
//     },
//     decrement() {
//       return --currentValue;
//     },
//     reset() {
//       currentValue = init;
//       return currentValue;
//     },
//   };
// };

//2666. Allow One Function Call
let once = function (fn) {
  let hasBeenCalled = false;
  let result;

  return function (...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      result = fn(...args); // вызываем оригинальную функцию с аргументами
      return result;
    }

    // Во все последующие разы функция ничего не возвращает,
    // что в JavaScript автоматически означает return undefined;
  };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // undefined, fn не вызывается
 */
