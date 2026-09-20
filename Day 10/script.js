
// Q7

// 7

// let age = prompt("Enter your age");

// if (age === null || age.trim() === "") {
//     console.log("Invalid input");
// } else if (isNaN(age) || Number(age) < 0) {
//     console.log("Invalid input");
// } else if (Number(age) >= 18 && Number(age) <110) {
//     console.log("Eligible");
// }else if (Number(age) >= 110) {
//     console.log("Are you fucking mad?");
// } else {
//     console.log("Not eligible");
// }


// 8

// for (let i = 1; i <= 10; i++) {
//     console.log(`5 x ${i} = ${5 * i}`);
// }


// 9

// let count = 0;

// for (let i = 1; i <= 15; i++) {
//     if (i > 8) {
//         count++;
//     }
// }

// console.log(count);

// Q10
// 10

// 10

// let password = prompt("Enter password");
// let againPassword = prompt("Enter password again");

// let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).+$/;
// if (passwordRegex.test(password) && password === againPassword) {
//     console.log("Access granted");
// } else {
//     console.log("Access denied");
// }


//11.

// let correctPassword = "12345";
// let success = false;
// for (let i = 1; i <= 3; i++) {
// let password = prompt("Enter password:");
// if (password === correctPassword) {
// console.log("Access granted");
// success = true;
// break;
// } else {
// console.log("Wrong password");
// }
// }
// if (success === false) {
// console.log("Account locked");
// }


// 12

// let count = 0;
// while (true) {
// let word = prompt("Enter a word:");
// if (word === "stop") {
// break;
// }
// if (word === "yes") {
// count++;
// }
// }
// console.log("yes typed = " + count);


//13.

//javascript
// for (let i = 1; i <= 50; i++) {
// if (i % 7 === 0) {
// console.log(i);
// }
// }


//14.

//javascript
// let sum = 0;
// for (let i = 1; i <= 30; i++) {
// if (i % 2 !== 0) {
// sum = sum + i;
// }
// }
// console.log("Sum = " + sum);

