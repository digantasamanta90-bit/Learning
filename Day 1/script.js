// Q1. Trim Username
// Create a variable:
// let username = "     Dibyo     ";
// Remove the extra spaces from the beginning and end and print the cleaned username.
// Expected Output:
// Dibyo

// let username = "     Dibyo     ";
// let newName = username.trim();
// console.log(newName);


// Q2. Uppercase + Trim
// Given:
// let name = "     javascript     ";
// Using method chaining, remove the spaces and convert the string to uppercase.
// Expected Output:
// JAVASCRIPT

// let name = "     javascript     ";
// let finalName = name.trim().toUpperCase();
// console.log(finalName);


// Q3. Slice a String
// Given:
// let message = "Hello JavaScript";
// Print only:
// JavaScript
// Use slice().

// let message = "Hello JavaScript";
// let result = message.slice(6);
// console.log(result);


// Q4. Slice from the End
// Given:
// let word = "Programming";
// Use slice() with a negative index to print:
// ming

// let word = "Programming";
// let result = word.slice(-4);
// console.log(result);


// Q5. Replace a Word
// Given:
// let sentence = "I love Java";
// Replace "Java" with "JavaScript".
// Expected Output:
// I love JavaScript

// let sentence = "I love Java";
// let result = sentence.replace("Java", "JavaScript");
// console.log(result);


// Q6. Replace All Occurrences
// Given:
// let sentence = "Java is powerful. Java is popular. Java is everywhere.";
// Replace every occurrence of "Java" with "JavaScript".

// let sentence = "Java is powerful. Java is popular. Java is everywhere.";
// let result = sentence.replaceAll("Java", "JavaScript");
// console.log(result);


// Q7. Repeat a String
// Create:
// let star = "*";
// Print the star 10 times using repeat().
// Expected Output:
// **********

// let star = "*";
// let result = star.repeat(10);
// console.log(result);


// Q8. Remove Elements Using Splice
// Given:
// let fruits = ["apple", "banana", "mango", "orange", "grapes"];
// Remove "mango" using splice().
// Expected Array:
// ["apple", "banana", "orange", "grapes"]

// let fruits = ["apple", "banana", "mango", "orange", "grapes"];
// fruits.splice(2, 1);
// console.log(fruits);


// Q9. Add Elements Using Splice
// Given:
// let fruits = ["apple", "banana", "grapes"];
// Insert "mango" and "orange" between "banana" and "grapes".
// Expected Array:
// ["apple", "banana", "mango", "orange", "grapes"]

// let fruits = ["apple", "banana", "grapes"];
// fruits.splice(2, 0, "mango", "orange");
// console.log(fruits);


// Q10. Replace an Array Element
// Given:
// let fruits = ["apple", "banana", "mango", "grapes"];
// Replace "mango" with "orange" using splice().

// let fruits = ["apple", "banana", "mango", "grapes"];
// fruits.splice(2, 1, "orange");
// console.log(fruits);


// Q11. Remove Multiple Elements
// Given:
// let numbers = [10, 20, 30, 40, 50, 60];
// Remove 30, 40, and 50 using a single splice() operation.
// Expected Array:
// [10, 20, 60]

// let numbers = [10, 20, 30, 40, 50, 60];
// numbers.splice(2, 3);
// console.log(numbers);


// Q12. Sort Numbers
// Given:
// let numbers = [50, 10, 40, 20, 30];
// Sort the numbers in ascending order.
// Expected Output:
// [10, 20, 30, 40, 50]

// let numbers = [50, 10, 40, 20, 30];
// numbers.sort((a, b) => a - b);
// console.log(numbers)


// Q13. Sort in Descending Order
// Using the same array, sort it in descending order.
// Expected Output:
// [50, 40, 30, 20, 10]

// let numbers = [50, 10, 40, 20, 30];
// numbers.sort((a, b) => b - a);
// console.log(numbers);


// Q14. Understand Default Sort
// Predict the output before running the code:
// let numbers = [10, 2, 30, 4, 5];
// console.log(numbers.sort());
// Then explain why the result is different from normal numerical sorting.

// Expected Output:
// [10, 2, 30, 4, 5]
// Because javascript sees the first digit of the number in the array and treats the weightage and prints the number as strings. 1 from "10", 2 for "2", 3 from "30", 4 for 4 and 5 for 5
// let numbers = [10, 2, 30, 4, 5];
// console.log(numbers.sort());


// Q15. Student Object
// Create an object called student containing:
// name
// age
// course
// marks
// isPassed
// Print all the values.

// const student = {
//     name: "Dibyo",
//     age: 20,
//     course: "Computer Science",
//     marks: 82,
//     isPassed: true
// };
// console.log(student.name);
// console.log(student.age);
// console.log(student.course);
// console.log(student.marks);
// console.log(student.isPassed);


// Q16. Update Object Properties
// Given:
// const student = {
//     name: "John",
//     age: 20,
//     marks: 75
// };
// Change:
// age → 21
// marks → 85
// Then print the updated object.

// const student = {
//     name: "John",
//     age: 20,
//     marks: 75
// };
// student.age = 21;
// student.marks = 85;
// console.log(student);


// Q17. Add a New Property
// Given:
// const student = {
//     name: "John",
//     age: 20
// };
// Add:
// course: "Computer Science"
// Print the object.

// const student = {
//     name: "John",
//     age: 20
// };
// student.course = "Computer Science";
// console.log(student);


// Q18. Delete a Property
// Given:
// const student = {
//     name: "John",
//     age: 20,
//     grade: "A",
//     city: "Kolkata"
// };
// Delete the city property.

// const student = {
//     name: "John",
//     age: 20,
//     grade: "A",
//     city: "Kolkata"
// };
// delete student.city;
// console.log(student);


// Q19. Student Database
// Create a nested object with 3 students.
// Print:
// Priya 21 A+

// const classInfo = {
//     student1: {
//         name: "Rahul",
//         age: 20,
//         grade: "A"
//     },
//     student2: {
//         name: "Priya",
//         age: 21,
//         grade: "A+"
//     },
//     student3: {
//         name: "Amit",
//         age: 19,
//         grade: "B"
//     }
// };
// console.log(
//     classInfo.student2.name,
//     classInfo.student2.age,
//     classInfo.student2.grade
// );


// Q20. Access Nested Data
// Using the same object, print:
// 1. Student 1's name
// 2. Student 2's grade
// 3. Student 3's age

// const classInfo = {
//     student1: {
//         name: "Rahul",
//         age: 20,
//         grade: "A"
//     },
//     student2: {
//         name: "Priya",
//         age: 21,
//         grade: "A+"
//     },
//     student3: {
//         name: "Amit",
//         age: 19,
//         grade: "B"
//     }
// };
// console.log(classInfo.student1.name);
// console.log(classInfo.student2.grade);
// console.log(classInfo.student3.age);


// Q21. Update Nested Object
// Change Student 1's grade from:
// A
// to:
// A+
// Then print the updated Student 1 object.

// const classInfo = {
//     student1: {
//         name: "Rahul",
//         age: 20,
//         grade: "A"
//     },
//     student2: {
//         name: "Priya",
//         age: 21,
//         grade: "A+"
//     },
//     student3: {
//         name: "Amit",
//         age: 19,
//         grade: "B"
//     }
// };
// classInfo.student1.grade = "A+";
// console.log(classInfo.student1);


// Q22. Add Property to Nested Object
// Add a city property to Student 2:
// city: "Kolkata"
// Then print Student 2's complete information.

// const classInfo = {
//     student1: {
//         name: "Rahul",
//         age: 20,
//         grade: "A"
//     },
//     student2: {
//         name: "Priya",
//         age: 21,
//         grade: "A+"
//     },
//     student3: {
//         name: "Amit",
//         age: 19,
//         grade: "B"
//     }
// };
// classInfo.student2.city = "Kolkata";
// console.log(classInfo.student2);


// Q23. Absolute Value
// Use Math.abs() to convert:
// -25
// into:
// 25

// let number = -25;
// let result = Math.abs(number);
// console.log(result);


// Q24. Maximum and Minimum
// Given:
// let a = 10;
// let b = 25;
// let c = 15;
// let d = 40;
// Find:
// 1. Maximum number
// 2. Minimum number
// Use Math.max() and Math.min().

// let a = 10;
// let b = 25;
// let c = 15;
// let d = 40;
// let maximum = Math.max(a, b, c, d);
// let minimum = Math.min(a, b, c, d);
// console.log(maximum);
// console.log(minimum);


// Q25. Square Root
// Find the square root of:
// 144
// using Math.sqrt().

// let number = 144;
// let result = Math.sqrt(number);
// console.log(result);


// Q26. Power
// Calculate:
// 2⁵
// using Math.pow().

// let result = Math.pow(2, 5);
// console.log(result);

// Q27. Rounding
// Predict the output before executing.
// console.log(Math.round(4.4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.1));
// console.log(Math.ceil(4.9));
// console.log(Math.floor(4.1));
// console.log(Math.floor(4.9));
// Expected Output:
// 4
// 5
// 5
// 5
// 4
// 4

// console.log(Math.round(4.4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.1));
// console.log(Math.ceil(4.9));
// console.log(Math.floor(4.1));
// console.log(Math.floor(4.9));


// Q28. Random Number 1–10
// Generate a random integer between:
// 1 and 10
// using Math.random().

// let randomNumber = Math.floor(Math.random() * 10) + 1;
// console.log(randomNumber);


// Q29. Random Number 1–100
// Generate a random integer between:
// 1 and 100.

// let randomNumber = Math.floor(Math.random() * 100) + 1;
// console.log(randomNumber);


// Q30. Random Number 50–100
// Generate a random integer between:
// 50 and 100.

// let randomNumber = Math.floor(Math.random() * 51) + 50;
// console.log(randomNumber);


// Q31. Random Dice Roll
// Simulate rolling a six-sided dice.
// Every time the program runs, it should generate:
// 1, 2, 3, 4, 5, or 6.

// let dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);


// Q32. Username Generator
// Given:
// let name = "     Dibyo Banerjee     ";
// Create a username by:
// 1. Removing extra spaces
// 2. Converting the name to lowercase
// 3. Replacing the space with "_"
// Expected Output:
// dibyo_banerjee

// let name = "     Dibyo Banerjee     ";
// let username = name.trim().toLowerCase().replace(" ", "_");
// console.log(username);


// Q33. Sentence Cleaner
// Given:
// let sentence = "     I love Java. Java is powerful. Java is popular.     ";
// Perform:
// 1. Remove spaces from both ends
// 2. Replace all "Java" with "JavaScript"
// 3. Print the final sentence
// Expected Output:
// I love JavaScript. JavaScript is powerful. JavaScript is popular.

// let sentence = "     I love Java. Java is powerful. Java is popular.     ";
// let result = sentence.trim().replaceAll("Java", "JavaScript");
// console.log(result);


// Q34. Random OTP Generator
// Generate a random 4-digit OTP.
// Example:
// 4827
// The OTP should be different on different executions.
// Range:
// 1000–9999

// let otp = Math.floor(Math.random() * 9000) + 1000;
// console.log(otp);


// Q35. Random Username Number
// Given:
// let username = "Dibyo";
// Generate a username such as:
// Dibyo472
// Dibyo819
// Dibyo125
// The last three digits should be random.

// let username = "Dibyo";
// let randomNumber = Math.floor(Math.random() * 900) + 100;
// let newUsername = username + randomNumber;
// console.log(newUsername);


// Q36. Student Result Object
// Create:
// const student = {
//     name: "Dibyo",
//     marks: 82
// };
// Grade rules:
// marks >= 90 → A+
// marks >= 80 → A
// marks >= 70 → B
// otherwise → C
// Add the calculated grade to the object.
// Expected Object:
// {
//     name: "Dibyo",
//     marks: 82,
//     grade: "A"
// }

// const student = {
//     name: "Dibyo",
//     marks: 82
// };
// if (student.marks >= 90) {
//     student.grade = "A+";
// } else if (student.marks >= 80) {
//     student.grade = "A";
// } else if (student.marks >= 70) {
//     student.grade = "B";
// } else {
//     student.grade = "C";
// }
// console.log(student);


// Q37. Array Manipulation Challenge
// Given:
// let fruits = [
//     "apple",
//     "banana",
//     "mango",
//     "orange",
//     "banana",
//     "grapes"
// ];
// Perform:
// 1. Remove the first "banana"
// 2. Add "pineapple" after "mango"
// 3. Replace all "banana" values with "watermelon"
// 4. Sort the array alphabetically

// let fruits = [
//     "apple",
//     "banana",
//     "mango",
//     "orange",
//     "banana",
//     "grapes"
// ];
// console.log(fruits);
// fruits.splice(1,1)
// console.log(fruits);
// fruits.splice(2,0,"pineapple")
// console.log(fruits);
// fruits.replaceAll("banana","watermelon");
// console.log(fruits);



// Q38. Mini Student Database
// Create a nested object containing 3 students.
// Each student should have:
// name
// age
// marks
// grade
// city
// Then:
// 1. Print Student 1's name
// 2. Print Student 2's marks
// 3. Change Student 3's grade
// 4. Add a new property isPassed
// 5. Print the complete object

// const students = {
//     student1: {
//         name: "Rahul",
//         age: 20,
//         marks: 85,
//         grade: "A",
//         city: "Kolkata"
//     },
//     student2: {
//         name: "Priya",
//         age: 21,
//         marks: 92,
//         grade: "A+",

//         city: "Delhi"
//     },
//     student3: {
//         name: "Amit",
//         age: 19,
//         marks: 68,
//         grade: "C",
//         city: "Mumbai"
//     }
// };
// console.log(students.student1.name);
// console.log(students.student2.marks);
// students.student3.grade = "B";
// students.student1.isPassed = "Passed"
// students.student2.isPassed = "Passed"
// students.student3.isPassed = "Passed"
// console.log(students);


// Q39. Random Number Guessing
// Generate a random number between 1–10.
// Create:
// let guess = 7;
// Check whether the guess matches the generated number.
// Print:
// Correct Guess!
// or
// Wrong Guess!

// let randomNumber = Math.floor(Math.random() * 10) + 1;
// let guess = 7;
// if (guess === randomNumber) {
//     console.log("Correct Guess!");
// } else {
//     console.log("Wrong Guess!");
// }



// Q40. Random Password Generator
// Generate a simple password using:
// uppercase letters
// lowercase letters
// numbers
// The password should contain 8 characters.
// Use string methods and Math.random().

// let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
// let password = "";
// for (let i = 0; i < 8; i++) {
//     let randomIndex = Math.floor(Math.random() * characters.length);
//     password = password + characters[randomIndex];
// }
// console.log(password);


// Q41: Shuffle name with password as Q40

// let btn = document.querySelector(".btn");
// let h = document.querySelector(".header");
// let innerDiv = document.querySelector(".inner-loader");

// let a = 0;
// let c = (b = Math.floor(Math.random() * 10)) ? b : 1;

// btn.addEventListener("click", function () {
//     btn.style.pointerEvents = "none";

//     let intervalId = setInterval(() => {
//         a++;
//         h.innerHTML = a + "%";
//         innerDiv.style.width = `${a}%`;
//     }, c * 10);

//     setTimeout(function () {
//         clearInterval(intervalId);
//         btn.innerHTML = "Downloaded!!";
//         btn.style.opacity = "0.5";
//         console.log(`Download Time: ${c} secs...`);
//     }, c * 1000);
// });