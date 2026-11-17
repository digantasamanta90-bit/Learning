// // Q1. Implement Your Own forEach, map, and filter
//
// Array.prototype.myForEach = function(callback) {
//   for (let i = 0; i < this.length; i++) {
//     callback(this[i], i, this);
//   }
// };
// Array.prototype.myMap = function(callback) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(callback(this[i], i, this));
//   }
//   return result;
// };
// Array.prototype.myFilter = function(callback) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this) === true) {
//       result.push(this[i]);
//     }
//   }
//   return result;
// };
//
//
// // Q2. GroupBy Using reduce
//
// function groupBy(array, key) {
//   return array.reduce(function(result, currentItem) {
//     let groupValue = currentItem[key];
//     if (groupValue === undefined) {
//       groupValue = "unknown";
//     }
//     if (result[groupValue] === undefined) {
//       result[groupValue] = [];
//     }
//     result[groupValue].push(currentItem);
//     return result;
//   }, {});
// }
//
//
// // Q3. Flatten an Array to Any Depth
//

//
// // Q4. Implement a Currying Function
//
// function curry(fn) {
//   return function curriedFunction(...args) {
//     if (args.length >= fn.length) {
//       return fn(...args);
//     } else {
//       return function(...nextArgs) {
//         let combinedArgs = args.concat(nextArgs);
//         return curriedFunction(...combinedArgs);
//       };
//     }
//   };
// }
//
//
// // Q5. Deep Search Inside a Nested Object
//
// function deepSearch(data, target) {
//   if (data === target) {
//     return true;
//   }
//   if (typeof data === "object" && data !== null) {
//     for (let key in data) {
//       if (deepSearch(data[key], target) === true) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
//
//
// // Q6. Implement a Multiplier Function Factory
//
// function multiplier(n) {
//   return function(number) {
//     return number * n;
//   };
// }
// function adder(n) {
//   return function(number) {
//     return number + n;
//   };
// }
//
//
// // Q7. Implement Function Composition and Pipe
//
// function compose(...fns) {
//   return function(value) {
//     let result = value;
//     for (let i = fns.length - 1; i >= 0; i--) {
//       result = fns[i](result);
//     }
//     return result;
//   };
// }
// function pipe(...fns) {
//   return function(value) {
//     let result = value;
//     for (let i = 0; i < fns.length; i++) {
//       result = fns[i](result);
//     }
//     return result;
//   };
// }
//
//
// // Q8. Build a Custom Template Engine
//
// function renderTemplate(template, data) {
//   let result = template;
//   while (result.indexOf("{{") !== -1) {
//     let start = result.indexOf("{{");
//     let end = result.indexOf("}}");
//     let path = result.substring(start + 2, end);
//     let keys = path.split(".");
//     let value = data;
//     
//     for (let i = 0; i < keys.length; i++) {
//       if (value === undefined || value === null) {
//         break;
//       }
//       value = value[keys[i]];
//     }
//     
//     if (value === undefined || value === null) {
//       value = "";
//     }
//     
//     result = result.substring(0, start) + value + result.substring(end + 2);
//   }
//   return result;
// }
//
//
// // Q9. Parse a URL Query String
//

//
//
// // Q10. Implement reduce from Scratch
//
// Array.prototype.myReduce = function(callback, initialValue) {
//   if (this.length === 0 && initialValue === undefined) {
//     throw new TypeError("Reduce of empty array with no initial value");
//   }
//   
//   let accumulator = initialValue;
//   let startIndex = 0;
//   
//   if (initialValue === undefined) {
//     accumulator = this[0];
//     startIndex = 1;
//   }
//   
//   for (let i = startIndex; i < this.length; i++) {
//     accumulator = callback(accumulator, this[i], i, this);
//   }
//   
//   return accumulator;
// };
//
//
// // Q11. Object Deep Clone
//

//
//
// // Q12. Object Diff
//
// function objectDiff(obj1, obj2) {
//   let diff = {};
//   
//   for (let key in obj1) {
//     if (!(key in obj2)) {
//       diff[key] = { oldValue: obj1[key], newValue: undefined };
//     } else if (typeof obj1[key] === "object" && typeof obj2[key] === "object" && obj1[key] !== null && obj2[key] !== null) {
//       let nestedDiff = objectDiff(obj1[key], obj2[key]);
//       if (Object.keys(nestedDiff).length > 0) {
//         diff[key] = nestedDiff;
//       }
//     } else if (obj1[key] !== obj2[key]) {
//       diff[key] = { oldValue: obj1[key], newValue: obj2[key] };
//     }
//   }
//   
//   for (let key in obj2) {
//     if (!(key in obj1)) {
//       diff[key] = { oldValue: undefined, newValue: obj2[key] };
//     }
//   }
//   
//   return diff;
// }
//
//
// // Q13. Implement a Memoization Function
//
// function memoize(fn) {
//   let cache = {};
//   return function(...args) {
//     let key = JSON.stringify(args);
//     if (cache[key] !== undefined) {
//       return cache[key];
//     }
//     let result = fn.apply(this, args);
//     cache[key] = result;
//     return result;
//   };
// }
//
//
// // Q14. Implement a Custom Debounce Function
//
// function debounce(callback, delay) {
//   let timer;
//   function debouncedFunc(...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       callback.apply(this, args);
//     }, delay);
//   }
//   debouncedFunc.cancel = function() {
//     clearTimeout(timer);
//   };
//   return debouncedFunc;
// }
//
//
// // Q15. Implement a Custom Throttle Function
//

//
//
// // Q16. Implement Custom Promise.all()
//
// function myPromiseAll(promises) {
//   return new Promise(function(resolve, reject) {
//     let results = [];
//     let completed = 0;
//     if (promises.length === 0) {
//       resolve(results);
//       return;
//     }
//     for (let i = 0; i < promises.length; i++) {
//       Promise.resolve(promises[i]).then(function(value) {
//         results[i] = value;
//         completed++;
//         if (completed === promises.length) {
//           resolve(results);
//         }
//       }).catch(function(error) {
//         reject(error);
//       });
//     }
//   });
// }
//
//
// // Q17. Implement Custom Promise.allSettled()
//

//
//
// // Q18. Implement Custom Promise.race()
//
// function myPromiseRace(promises) {
//   return new Promise(function(resolve, reject) {
//     for (let i = 0; i < promises.length; i++) {
//       Promise.resolve(promises[i]).then(resolve).catch(reject);
//     }
//   });
// }
//
//
// // Q19. Build a Promise-Based Retry Mechanism
//
// async function retry(operation, retries, delayMs) {
//   try {
//     let result = await operation();
//     return result;
//   } catch (error) {
//     if (retries === 0) {
//       throw error;
//     }
//     await new Promise(function(resolve) {
//       setTimeout(resolve, delayMs);
//     });
//     return retry(operation, retries - 1, delayMs);
//   }
// }
//
//
// // Q20. Build a Concurrent Task Scheduler
//
