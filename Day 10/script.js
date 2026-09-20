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
//     for (let i = 1; i <= 3; i++) {
//     let password = prompt("Enter password:");
//     if (password === correctPassword) {
//         console.log("Access granted");
//     success = true;
//     break;
//     } else {
//         console.log("Wrong password");
//     }
//     }
//     if (success === false) {
//         console.log("Account locked");
//     }


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

//15 Keep asking until user enters an even number
// let num;
// while (true) {
// num = Number(prompt("Enter a number:"));
// if (num % 2 === 0) {
// break;
// }
// }
// console.log("You entered an even number");


//16 Print numbers between two user inputs
// let start = Number(prompt("Enter start number:"));
// let end = Number(prompt("Enter end number:"));
// for (let i = start; i <= end; i++) {
// console.log(i);
// }


//17 Print first 3 odd numbers from 1 to 20
// let count = 0;
// for (let i = 1; i <= 20; i++) {
// if (i % 2 !== 0) {
// console.log(i);
// count++;
// }
// if (count === 3) {
// break;
// }
// }


//18 Count positive numbers among 5 inputs
// let positive = 0;
// for (let i = 1; i <= 5; i++) {
// let num = Number(prompt("Enter number " + i + ":"));
// if (num > 0) {
// positive++;
// }
// }
// console.log("Positive numbers = " + positive);


//19 ATM simulator with 3 withdrawals
// let balance = 1000;
// for (let i = 1; i <= 3; i++) {
// let amount = Number(prompt("Enter withdrawal amount:"));
// if (amount <= balance) {
// balance = balance - amount;
// console.log("Withdrawal successful");
// console.log("Balance = " + balance);
// } else {
// console.log("Insufficient balance");
// }
// }


//20 Guess a random number between 1 and 20 in 5 attempts
// let target = Math.floor(Math.random() * 20) + 1;
// let guessed = false;
// for (let i = 1; i <= 5; i++) {
// let guess = Number(prompt("Guess a number between 1 and 20:"));
// if (guess === target) {
// console.log("Correct guess");
// guessed = true;
// break;
// } else if (guess < target) {
// console.log("Too low");
// } else {
// console.log("Too high");
// }
// }
// if (guessed === false) {
// console.log("You lost. Number was " + target);
// }

