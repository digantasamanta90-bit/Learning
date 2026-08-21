// Q1. Global vs Function Scope
// Predict the output:
// let x = 10;
// function test() {
//     let x = 20;
//     console.log(x);
// }
// test();
// console.log(x);

// 20
// 10
// The x inside test() is a different local variable. It overwrites the global x only inside the function.


// Q2. Variable Shadowing
// What will be printed:
// let name = "Dibyo";
// function greet() {
//     let name = "John";
//     console.log(name);
// }
// greet();
// console.log(name);

// John
// Dibyo
// Variable shadowing means a variable declared in an inner scope has the same name as a variable in an outer scope, hiding the outer variable inside that scope.


// Q3. Block Scope
// Predict the output:
// let x = 100;
// {
//     let x = 200;
//     console.log(x);
// }
// console.log(x);

// 200
// 100
// The x inside the block is a separate block-scoped variable. It does not change the outer x.


// Q4. let and Block Scope
// if (true) {
//     let a = 10;
//     const b = 20;
// }
// console.log(a);
// console.log(b);

// This causes a ReferenceError because a and b are declared using let and const inside the if block. They only exist inside that block and cannot be accessed outside.


// Q5. Scope Challenge
// Predict the output:
// let a = 10;

// function outer() {
//     let a = 20;
//     if (true) {
//         let a = 30;
//         console.log(a);
//     }

//     console.log(a);
// }
// outer();
// console.log(a);

// 30
// 20
// 10


// Q6. Basic Lexical Scope
// Predict the output:
// let x = 10;
// function outer() {
//     let y = 20;
//     function inner() {
//         console.log(x);
//         console.log(y);
//     }
//     inner();
// }
// outer();

// 10
// 20
// inner() can access y because y belongs to its outer function. It can access x through the global scope.


// Q7. Inner Function Access
// What will happen?
// function outer() {
//     let a = 10;
//     function inner() {
//         let b = 20;
//         console.log(a);
//         console.log(b);
//     }
//     inner();
//     console.log(a);
//     console.log(b);
// }
// outer();

// a and b are accessible inside inner().
// a is accessible inside outer().
// b causes a ReferenceError outside inner() because b has function scope only inside inner().


// Q8. Lexical Scope Challenge
// Predict the output:
// let a = 1;
// function outer() {
//     let a = 2;
//     function inner() {
//         let a = 3;
//         console.log(a);
//     }
//     inner();
// }
// outer();
// console.log(a);

// 3
// 1


// Q9. Can Outer Access Inner?
// What happens?
// function outer() {
//     function inner() {
//         let secret = 100;
//     }
//     inner();
//     console.log(secret);
// }
// outer();

// This causes a ReferenceError because secret is declared inside inner(). Variables inside an inner function cannot be accessed by the outer function.


// Q10. Function as an Argument
// repeatTask() receives a function and executes it n times.

// function repeatTask(task, n) {
//     for (let i = 0; i < n; i++) {
//         task();
//     }
// }
// let sayHello = function () {
//     console.log("Hello");
// };
// repeatTask(sayHello, 5);


// Q11. Calculator Using Higher-Order Function
// The operation function decides which calculation will be performed.

// function add(a, b) {
//     return a + b;
// }
// function subtract(a, b) {
//     return a - b;
// }
// function multiply(a, b) {
//     return a * b;
// }
// function calculate(a, b, operation) {
//     return operation(a, b);
// }
// console.log(calculate(10, 5, add));
// console.log(calculate(10, 5, multiply));
// console.log(calculate(10, 5, subtract));


// Q12. Even / Odd Function Factory
// checkNumber() returns a different function depending on the type.

// function checkNumber(type) {
//     if (type === "even") {
//         return function(num) {
//             return num % 2 === 0;
//         };
//     } else if (type === "odd") {
//         return function(num) {
//             return num % 2 !== 0;
//         };
//     }
// }
// let checkEven = checkNumber("even");
// let checkOdd = checkNumber("odd");
// console.log(checkEven(10));
// console.log(checkEven(7));
// console.log(checkOdd(10));
// console.log(checkOdd(7));


// Q13. Greater Than Function Factory
// greaterThan() returns a function that remembers n.

// function greaterThan(n) {
//     return function(num) {
//         return num > n;
//     };
// }
// let greaterThan10 = greaterThan(10);
// console.log(greaterThan10(15));
// console.log(greaterThan10(5));


// Q14. Custom Filter Function
// Create your own version of filter():

// function myFilter(arr, condition) {

// }
// Incomplete


// Q15. Student Object
// getTotal() returns the total marks and getAverage() returns the average.

// const student = {
//     name: "Dibyo",
//     marks1: 80,
//     marks2: 90,
//     marks3: 70,
//     getTotal() {
//         return this.marks1 + this.marks2 + this.marks3;
//     },
//     getAverage() {
//         return this.getTotal() / 3;
//     }
// };
// console.log(student.getTotal());
// console.log(student.getAverage());


// Q16. Bank Account
// deposit() adds money, withdraw() removes money, and checkBalance() shows the balance.

// const account = {
//     balance: 5000,
//     deposit(amount) {
//         this.balance += amount;
//     },
//     withdraw(amount) {
//         if (amount <= this.balance) {
//             this.balance -= amount;
//         } else {
//             console.log("Insufficient balance");
//         }
//     },
//     checkBalance() {
//         return this.balance;
//     }
// };
// account.deposit(1000);
// account.withdraw(2000);
// console.log(account.checkBalance());


// Q17. Rectangle Object
// area() calculates length × width and perimeter() calculates 2 × (length + width).

// const rectangle = {
//     length: 10,
//     width: 5,
//     area() {
//         return this.length * this.width;
//     },
//     perimeter() {
//         return 2 * (this.length + this.width);
//     }
// };
// console.log(rectangle.area());
// console.log(rectangle.perimeter());


// Q18. Basic this
// Predict the output:
// const person = {
//     name: "Dibyo",
//     introduce() {
//         console.log(this.name);
//     }
// };
// person.introduce();

// Dibyo
// Here, this refers to the person object.


// Q19. Multiple Properties with this

// const employee = {
//     name: "John",
//     salary: 50000,
//     bonus: 10000,
//     getTotalSalary() {
//         return this.salary + this.bonus;
//     }
// };
// console.log(employee.getTotalSalary());


// Q20. this and Object Methods
// Predict the output:
// const user = {
//     name: "Dibyo",
//     greet() {
//         console.log("Hello " + this.name);
//     }
// };
// user.greet();

// Hello Dibyo
// this.name is better because the method can work with the object that calls it. 


// Q21. Scope + Higher-Order Function
// Predict the output:
// let x = 10;

// function outer() {
//     let x = 20;
//     function test() {
//         console.log(x);
//     }
//     return test;
// }
// let func = outer();
// func();

// 20
// func() prints 20 because test() forms a closure over the x inside outer().


// Q22.

// function multiplier(n) {
//     return function (num) {
//         return num * n;
//     };
// };
// let double = multiplier(2);
// let triple = multiplier(3);

// console.log(double(5));
// console.log(triple(5)); 


// Q23. Object + Higher-Order Function

// function add(a, b) {
//     return a + b;
// }
// function subtract(a, b) {
//     return a - b;
// }
// function multiply(a, b) {
//     return a * b;
// }
// const calculator = {
//     calculate(a, b, operation) {
//         return operation(a, b);
//     }
// };
// console.log(calculator.calculate(10, 5, add));
// console.log(calculator.calculate(10, 5, subtract));
// console.log(calculator.calculate(10, 5, multiply));


// Q24. Student Result System



































