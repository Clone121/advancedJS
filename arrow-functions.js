/**
 * To run this file in Gitpod, use the
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

/*function addTwoNumbers(a, b) {
  return a+b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum);*/

// Arrow Function with Parameters

const addTwoNumbers = (a, b) => {
  return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters 

const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(3, 5);
console.log(sum);

// Implicit Returns

const greeting = message => console.log(message);
greeting('Hello, John');


// Returning Multiple Lines

const returnMultipleLines = () => (
  `<p>
    This is a multiple string!
  </p>`
)
console.log(returnMultipleLines());