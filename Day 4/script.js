// 1. Select the element with id="header" using two different methods, and log its tagName to the console.

// const header1 = document.getElementById("header");
// console.log(header1.tagName);
// const header2 = document.querySelector("#header");
// console.log(header2.tagName);


// 2. Use getElementsByClassName to select all elements with the class item, then log how many elements were found.

// const items = document.getElementsByClassName("item");
// console.log(items.length);


// 3. Use querySelectorAll to select every <p> tag on the page and change their text color to blue.

// const paragraphs = document.querySelectorAll("p");
// paragraphs.forEach((paragraph) => {
//     paragraph.style.color = "blue";
// });


// 4. Create a new <h2> element with the text "Welcome!" and append it to the <body>.

// const heading = document.createElement("h2");
// heading.innerText = "Welcome!";
// document.body.appendChild(heading);


// 5. Select the first element with the class .box and change its innerHTML to "Updated!".

// const box = document.querySelector(".box");
// box.innerHTML = "Updated!";


// 6. Add a click event listener to a button with id="btn" that logs "Button clicked" to the console.

// const button = document.getElementById("btn");
// button.addEventListener("click", () => {
//     console.log("Button clicked");
// });


// 7. Create a <li> element, set its text to "New Item", and append it to a <ul> with id="list".

// const list = document.getElementById("list");
// const newItem = document.createElement("li");
// newItem.innerText = "New Item";
// list.appendChild(newItem);


// 8. Explain the difference between getElementsByClassName and querySelectorAll in terms of what they return.

// getElementsByClassName returns a live HTMLCollection.
// This means it automatically updates when matching elements are added or removed.
// querySelectorAll returns a static NodeList.
// This means it does not automatically update after the selection is made.
        

// 9. Select all <div> elements with the class card and add a mouseover event listener to each that changes their background color.

// const cards = document.querySelectorAll("div.card");
// cards.forEach((card) => {
//     card.addEventListener("mouseover", () => {
//         card.style.backgroundColor = "yellow";
//     });
// });


// 10. Create a <p> element, add a class using classList.add, set its text, and append it inside <div id="container">.

// const container = document.getElementById("container");
// const paragraph = document.createElement("p");
// paragraph.classList.add("new-paragraph");
// paragraph.innerText = "This is a new paragraph";
// container.appendChild(paragraph);


// 11. Given a parent <div class="wrapper"> containing a <span> child, remove the <span> using removeChild.

// const wrapper = document.querySelector(".wrapper");
// const span = wrapper.querySelector("span");
// wrapper.removeChild(span);


// 12. Add a dblclick event listener to an <h1> that toggles its text between "Hello" and "Goodbye".

// const heading = document.querySelector("h1");
// heading.addEventListener("dblclick", () => {
//     if (heading.innerText === "Hello") {
//         heading.innerText = "Goodbye";
//     } else {
//         heading.innerText = "Hello";
//     }
// });


// 13. Use querySelector to select input[type="text"] and log its current value.

// const input = document.querySelector('input[type="text"]');
// console.log(input.value);


// 14. Write a function that creates 5 <div> elements, gives each a unique id, and appends them to a container.

// function createBoxes() {
//     const container = document.getElementById("container");
//     for (let i = 1; i <= 5; i++) {
//         const box = document.createElement("div");
//         box.id = `box-${i}`;
//         box.innerText = `Box ${i}`;
//         container.appendChild(box);
//     }
// }
// createBoxes();


// 15. Add a click event listener to a parent <ul> that detects which <li> was clicked and logs its text content.

