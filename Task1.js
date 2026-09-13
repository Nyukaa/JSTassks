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
  // 1. Эти переменные создаются ВНУТРИ функции once
  let hasBeenCalled = false;
  let result;

  // 2. Мы возвращаем новую внутреннюю функцию
  return function (...args) {
    // 3. ЭТО И ЕСТЬ ЗАМЫКАНИЕ: внутренняя функция "помнит" и имеет
    // доступ к переменным hasBeenCalled и result, хотя функция once
    // уже давно выполнилась и завершила свою работу!
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      result = fn(...args);
      return result;
    }
  };

  // Во все последующие разы функция ничего не возвращает,
  // что в JavaScript автоматически означает return undefined;
};
/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // undefined, fn не вызывается
 */
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
//2677. Chunk Array
// let chunk = function (arr, size) {
//   const outArr = [];
//   let i = 0;
//   while (i < arr.length) {
//     const innerArr = [];

//     for (let j = 0; j < size && i < arr.length; j++) {
//       innerArr.push(arr[i]);
//       i++;
//     }
//     outArr.push(innerArr);
//   }
//   return outArr;
// };
let chunk = function (arr, size) {
  const chunkedArr = [];

  // Шагаем по массиву с шагом, равным size
  for (let i = 0; i < arr.length; i += size) {
    // Отрезаем кусочек от i до i + size и сразу кладем в результирующий массив
    chunkedArr.push(arr.slice(i, i + size));
  }

  return chunkedArr;
};
//2703. Return Length of Arguments Passed
let argumentsLength = function (...args) {
  return args.length;
};
/**
 * @param {string} val
 * @return {Object}
 */
//2704. To Be Or Not To Be
//Когда код вызывает expect(5), внешняя функция завершается
// и мгновенно возвращает объект. На этот объект следующий вызов
// .toBe(5).
// Closure: Ф toBe и notToBe находятся внутри expect. Они в памяти» значение val и помнят его,
// когда сравнивают со своим аргументом otherVal.
// (throw new Error): Если равенство нарушено,
//  код не должен возвращать false. Конструкция throw new Error("...")
let expect = function (val) {
  return {
    toBe(otherVal) {
      if (val === otherVal) {
        return true;
      }
      throw new Error("Not Equal");
    },
    notToBe(otherVal) {
      if (val !== otherVal) {
        return true;
      }
      throw new Error("Equal");
    },
  };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
let sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};
// Ex 1:
// Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
// Output: [1, 2, 3, 4, 5]
// Ex 2:
// Input: arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x
// Output: [{"x": -1}, {"x": 0}, {"x": 1}]
// Ex 3:
// Input: arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]
// Output: [[10, 1], [5, 2], [3, 4]]
//2725. Interval Cancellation
let cancellable = function (fn, args, t) {
  // 1. Вызываем функцию НЕМЕДЛЕННО (на 0-й миллисекунде)
  fn(...args);

  // 2. Запускаем интервал для последующих вызовов каждые t мс
  const timerId = setInterval(() => {
    fn(...args);
  }, t);

  // 3. Возвращаем функцию отмены (замыкание хранит timerId в памяти)
  return function cancelFn() {
    clearInterval(timerId);
  };
};
//2727. Is Object Empty
let isEmpty = function (obj) {
  // Case 1: If it's an array, check its length property
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }

  // Case 2: If it's an object, check if it has any keys
  // Object.keys(obj) returns an array of the object's keys
  return Object.keys(obj).length === 0;
};
