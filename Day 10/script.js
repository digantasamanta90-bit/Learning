//7 Check if user is eligible to vote
// let age = Number(prompt("Enter your age:"));
// if (age >= 18) {
// console.log("Eligible");
// } else {
// console.log("Not eligible");
// }


//8 Print multiplication table of 5
// for (let i = 1; i <= 10; i++) {
// console.log("5 x " + i + " = " + (5 * i));
// }


//9 Count numbers greater than 8 between 1 and 15
// let count = 0;
// for (let i = 1; i <= 15; i++) {
// if (i > 8) {
// count++;
// }
// }
// console.log("Count = " + count);


//10 Check password and print access status

// let password = prompt("Enter password");
// let againPassword = prompt("Enter password again");
// let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).+$/;
// if (passwordRegex.test(password) && password === againPassword) {
//     console.log("Access granted");
// } else {
//     console.log("Access denied");
// }


//11 Allow only 3 password attempts
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


//12 Count how many times user types yes
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


//13 Print numbers divisible by 7 from 1 to 50
// for (let i = 1; i <= 50; i++) {
// if (i % 7 === 0) {
// console.log(i);
// }
// }


//14 Find sum of all odd numbers from 1 to 30
// let sum = 0;
// for (let i = 1; i <= 30; i++) {
// if (i % 2 !== 0) {
// sum = sum + i;
// }
// }
// console.log("Sum = " + sum);