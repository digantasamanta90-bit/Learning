// Q1. Arrow Functions
// Write a regular function multiply(a, b), then rewrite it as arrow functions.

// Regular function
// function multiply(a, b) {
//     return a * b;
// }
// console.log(multiply(5, 4));

// Arrow function with explicit return
// const multiplyArrow = (a, b) => {
//     return a * b;
// };
// console.log(multiplyArrow(5, 4));

// Arrow function with implicit return
// const multiplyImplicit = (a, b) => a * b;
// console.log(multiplyImplicit(5, 4));


// Q2. isEven Arrow Function
// Return true if a number is even, otherwise false.

// const isEven = (num) => num % 2 === 0;
// console.log(isEven(10));
// console.log(isEven(7));


// Q3. Convert greet() into an Arrow Function

// const greet = (name) => "Hello, " + name + "!";
// console.log(greet("Dibyo"));


// Q4. Arrow Function Returning Another Function
// square()(5) should return 25.

// const square = () => {
//     return (num) => num * num;
// };
// console.log(square()(5));


// Q5. setTimeout
// Print "Welcome!" after 2 seconds.

// setTimeout(() => {
//     console.log("Welcome!");
// }, 2000);


// Q6. Predict the Output Order
// Output: A, C, B
// setTimeout runs after the current synchronous code finishes.

// console.log("A");
// setTimeout(() => console.log("B"), 0);
// console.log("C");


// Q7. setInterval
// Print 1 to 5, one number per second, then stop.

// for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, i * 1000);
// }


// Q8. Countdown Timer
// Print 10 to 1, then print "Liftoff!".

// for (let i = 10; i >= 1; i--) {
//     setTimeout(() => {
//         console.log(i);
//         if (i === 1) {
//             console.log("Liftoff!");
//         }
//     }, (11 - i) * 1000);
// }


// Q9. this Keyword with Regular Function
// Create a car object and log the brand.

// const car = {
//     brand: "BMW",

//     showBrand: function () {
//         console.log(this.brand);
//     }
// };

// car.showBrand();


// Q10. this Keyword with Arrow Function
// The arrow function does not get its own this.
// It uses this from its surrounding lexical scope.

// const car = {
//     brand: "BMW",

//     showBrand: function () {
//         console.log(this.brand);
//     },

//     showBrandArrow: () => {
//         console.log(this.brand);
//     }
// };

// car.showBrand();
// car.showBrandArrow();


// Q11. Fix getScore()
// Use a regular function so this refers to the player object.

// const player = {
//     score: 100,

//     getScore() {
//         console.log(this.score);
//     }
// };

// player.getScore();


// Q12. forEach
// Print each number multiplied by 3.

// let numbers = [4, 8, 15, 16, 23, 42];

// numbers.forEach((num) => {
//     console.log(num * 3);
// });


// Q13. map
// Create an array containing the square of each number.

// let numbers = [4, 8, 15, 16, 23, 42];

// let squared = numbers.map((num) => num * num);
// console.log(squared);


// Q14. filter
// Create an array containing only numbers greater than 10.

// let numbers = [4, 8, 15, 16, 23, 42];

// let greaterThanTen = numbers.filter((num) => num > 10);
// console.log(greaterThanTen);


// Q15. every
// Check if all numbers are greater than 0.

// let numbers = [4, 8, 15, 16, 23, 42];

// let allPositive = numbers.every((num) => num > 0);
// console.log(allPositive);


// Q16. some
// Check if at least one number is divisible by 5.

// let numbers = [4, 8, 15, 16, 23, 42];

// let divisibleByFive = numbers.some((num) => num % 5 === 0);
// console.log(divisibleByFive);


// Q17. reduce
// Find the sum of all numbers.

// let numbers = [4, 8, 15, 16, 23, 42];

// let sum = numbers.reduce((total, num) => total + num, 0);
// console.log(sum);


// Q18. reduce Challenge
// Find the maximum value without using Math.max.

// let numbers = [4, 8, 15, 16, 23, 42];

// let maximum = numbers.reduce((max, num) => {
//     return num > max ? num : max;
// }, numbers[0]);

// console.log(maximum);


// Q19. filter and map
// Get the squares of only the even numbers.

// let numbers = [4, 8, 15, 16, 23, 42];

// let evenSquares = numbers
//     .filter((num) => num % 2 === 0)
//     .map((num) => num * num);

// console.log(evenSquares);


// Q20. Default Parameters
// Greet a user with a default greeting.

// function greetUser(name, greeting = "Hello") {
//     console.log(greeting + ", " + name + "!");
// }

// greetUser("Dibyo");
// greetUser("Dibyo", "Good Morning");


// Q21. Default Tax Parameter
// Return the price including tax.

// function calculatePrice(price, tax = 0.05) {
//     return price + price * tax;
// }

// console.log(calculatePrice(100));
// console.log(calculatePrice(100, 0.1));


// Q22. createProfile()
// Call the function with 1, 2, and 3 arguments.

// function createProfile(name, age = 18, city = "Unknown") {
//     return {
//         name: name,
//         age: age,
//         city: city
//     };
// }

// console.log(createProfile("Dibyo"));
// console.log(createProfile("Dibyo", 20));
// console.log(createProfile("Dibyo", 20, "Kolkata"));


// Q23. Spread Operator with Math.max and Math.min

// let arr = [3, 7, 1, 9, 2];

// console.log(Math.max(...arr));
// console.log(Math.min(...arr));


// Q24. Combine Two Arrays Using Spread

// let fruits = ["apple", "banana"];
// let veggies = ["carrot", "peas"];

// let food = [...fruits, ...veggies];
// console.log(food);


// Q25. Copy an Object Using Spread
// Changing userCopy should not affect user.

// let user = {
//     name: "Amit",
//     age: 25
// };

// let userCopy = {
//     ...user
// };

// userCopy.age = 30;

// console.log(user);
// console.log(userCopy);


// Q26. Split a String Using Spread

// let word = "javascript";

// let characters = [...word];
// console.log(characters);


// Q27. Rest Parameters
// Return the sum of any number of arguments.

// function sumAll(...nums) {
//     return 
// }
//INCOMPLETE


// Q28. introduce()
// Print the full name and all hobbies.

// function introduce(firstName, lastName, ...hobbies) {
//     console.log("Name: " + firstName + " " + lastName);
// INCOMPLETE

// Q29. findLongest()
// Return the longest string.

// function findLongest(...words) {
//     return 
//INCOMPLETE

// Q30. Object Destructuring
// Destructure name and course.

// const student = {
//     name: "Riya",
//     age: 20,
//     email: "riya@example.com",
//     course: "Computer Science"
// };

// const { name, course } = student;

// console.log(name);
// console.log(course);


// Q31. Rename email to contact While Destructuring

// const student = {
//     name: "Riya",
//     age: 20,
//     email: "riya@example.com",
//     course: "Computer Science"
// };

// const { email: contact } = student;

// console.log(contact);


// Q32. Array Destructuring
// Get the first two marks.

// const marks = [88, 92, 79, 85];

// const [mark1, mark2] = marks;

// console.log(mark1);
// console.log(mark2);


// Q33. Destructuring with a Default Value

// const student = {
//     name: "Riya",
//     age: 20,
//     email: "riya@example.com",
//     course: "Computer Science"
// };

// const { name, grade = "Not Assigned" } = student;

// console.log(name);
// console.log(grade);


// Q34. Destructuring Directly in a Function Parameter

// const student = {
//     name: "Riya",
//     age: 20,
//     email: "riya@example.com",
//     course: "Computer Science"
// };

// function printStudent({ name, age }) {
//     console.log(name + " is " + age + " years old");
// }

// printStudent(student);


// Q35. summarizeStudent Arrow Function
// Use default parameter destructuring.

// const summarizeStudent = 
//INCOMPLETE


// Q36. map with Arrow Functions
// Convert student objects into formatted strings.

// const students = [
//     { name: "Riya", marks: 88 },
//     { name: "Amit", marks: 92 },
//     { name: "John", marks: 79 }
// ];

// const results = students.map((student) => {
//     return student.name + " scored " + student.marks;
// });

// console.log(results);


// Q37. setTimeout Inside forEach
// Print each name one after another, 1 second apart.

// const names = ["Riya", "Amit", "John", "Dibyo"];

// names.forEach((name, index) => {
//     setTimeout(() => {
//         console.log(name);
//     }, (index + 1) * 1000);
// });