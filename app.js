// STRINGS

// firstVariable = "hello world";
// firstVariable = 1;
// let secondVariable = firstVariable;
// secondVariable = "any string";

// console.log(firstVariable); //1

// const yourName = "Ariel";
// let hello = `Hello, my name is ${yourName}`
// console.log(hello);

// 1.
// var firstVariable = "Hello World";
//  firstVariable =  1;
//  let secondVariable = firstVariable;
//  secondVariable = "any string";

//  console.log(firstVariable);


// //  2.
// const yourName = "Jerome";
// let hey = "Hello my name is Jerome!";
// console.log(hey);



//BOOLEANS

// const a = 4; 
// const b = 53; 
// const c = 57; 
// const d = 16; 
// const e = 'Kevin';

// console.log(a < b); 
// console.log(c > d); 
// console.log('Name' == 'Name');

// 1. 
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log(e == 'Kevin');

// //FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false); 
// console.log(false && false && false && false && false || true); 
// console.log(false === false) 
// console.log(e == 'Kevin'); 
// console.log(a <= b <= c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations) 
// console.log(a == a || d); // note: the answer is a simple arithmetic equation, not something "weird" console.log(48 __ '48');



//the Farm
// let animal = "cow";

// const moo = (a) => {
//    return a.toLowerCase === "cow"? "mooooo" : "hey, that's not a cow"
// } 

// console.log(moo(animal));

//Driver's Ed
// let driver = false;
// const age = 16;
// if (age >= 16) {
//    driver = true;
// }
// console.log(driver);

// let age = 16 ;
// const person = "John Doe";
// function myFunction(person) {
// if (person >= 16) {
//    return("Here are the keys");
// } else {
//    return("Sorry you're too young");
//  }
// }
// console.log(myFunction(person));




//LOOPS

//The Basics
// 1. - Write a loop that will print out all the numbers from 0 to 10, inclusive
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < 10; i++); {
   
// }
// console.log(num);
//  2. - Write a loop that will print out all the numbers from 10 up to and including 400

// for (let i = 10; i <= 400; i++) {
//    console.log(i);
// }

// 3. Write a loop that will print out every third number starting with 12 and going no higher than 4000

// for (let i = 12; i <= 4000; i += 3) {
//    console.log(i);

//Get Even
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
// for (let i = 2; i <= 100; i += 2) {
//    console.log(i + "<-- is an even number");
// }

//Give Me 5
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five:
// for (let i = 1; i <= 100; i++) {
//    if(i % 5==0 && i % 3==0) {
//          console.log(i + " I found a number. High five!" + " I found a 3. Three is a crowd");
//       }
   


//Savings Account

//ARRAYS & CONTROL FLOW
/* The things is arrays are called values.
They always guarntee values will be in order. 
You could model cars with an array*/

// ### B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes
// // 1.
// const quotes = ["coding is great", "I am sleepy", "coding is a way out"];

// ### C. Accessing elements

// Given the following array `const randomThings = [1, 10, "Hello", true]`

// - How do you access the 1st element in the array?
// randomthings [0];
// - Change the value of `"Hello"` to `"World"`
// randomthings [2] = "World";
// - Check the value of the array to make sure it updated the array using `console.log()`
// console.log(randomthings);

// ### D. Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// What would you write to access the 3rd element of the array?
// ourClass [2];
// // Change the value of "Github" to "Octocat"
// ourClass [4] = "Octocat";
// // Add a new element, "Cloud City" to the array
// ourClass.push("Cloud City");

// ### E. Mix It Up

// Note: You don't really need `.splice()` for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: `const myArray = [5, 10, 500, 20]`

// - Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// - Remove the 5from the beginning of the array.
// - Add the string "Bob Marley"to the beginning of the array.
// - Remove the string of your choice from the end of the array.
// - Reverse this array using `Array.prototype.reverse()`. 
// - Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
const myArray = [5, 10, 500, 20];
myArray.push = "Aegon";
myArray.pop = [0];
myArray.unshift = "Bob Marley";
myArray.shift = [3];
myArray.reverse();
console.log(myArray);

// ### F. Biggie Smalls

// Create a variable that contains an integer.

// Write an `if ... else` statement that:

// - `console.log()s` "little number" if the number is entered is less than 100
// - `console.log()s` "big number" if the number is greater than or equal to 100.
let myNum = 1;
if (myNum < 100) {
   console.log("little number");
} else {
   console.log("big number");
}

// Monkey in the middle
if ( myNum < 5) {
   console.log("little number");
} else if (myNum > 10) {
   console.log("big number");
} else {
   console.log("monkey");
}

const kristynsCloset = [
   "left shoe",
   "cowboy boots",
   "right sock",
   "GA hoodie",
   "green pants",
   "yellow knit hat",
   "marshmallow peeps"
 ];
 console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
 kristynsCloset.splice(6, 0, "raybans");
 kristynsCloset.splice(5, 1, "stained knit hat" );


 const thomsCloset = [
   [
     // These are Thom's shirts
     "grey button-up",
     "dark grey button-up",
     "light blue button-up",
     "blue button-up",
   ],[
     // These are Thom's pants
     "grey jeans",
     "jeans",
     "PJs"
   ],[
     // Thom's accessories
     "wool mittens",
     "wool scarf",
     "raybans"
   ]
 ];
 let shirt = thomsCloset [0][0]
 let x = thomsCloset [1][0]
 let y = thomsCloset [2][0]
 console.log(`Thom is looking fierce in a  ${shirt} with ${x} with ${y} `);

thomsCloset [1][2] = "Footie Pajamas"

function printGreetingwith  (name)  {
   return "Hey there " + name 
}
console.log(printGreetingwith("john"));

function printCoolthat (name) {
   return "You are so cool " + name
}
console.log(printCoolthat("Jerome"));


function calculateCubethat (a) {
   volume = a * a * a
}
console.log(calculateCubethat(5));

const isVowelThat = function(letter) {
   let vowels = ["a", "e", "i", "o", "u"];
   letter.toLowerCase() 
   if(vowels.includes(letter) ) {
      return true;
   } else {
      return false;
   }
}
console.log(isVowelThat("e"));

//OBJECTS


// let longest = array.reduce( (firstEl, secondEl) => {
//         //if the first el is greater than the second el return firstEl
//         return firstEl.length > secondEl.length ? firstEl : secondEl;
//     }
// );

// console.log(longest);
