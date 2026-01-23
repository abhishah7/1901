// types of function
// 1. Named Function
// 2. Anonymous Function
// 3. Arrow Function

// 1. Named Function
function greet(name) {
    console.log(`hello ${name}`);
}

// 2. Anonymous Function
var temp_function = function(name) {
    console.log(`hello ${name}`);
}

// 3. Arrow Function
var temp_function = (name) => {
    console.log(`hello ${name}`);
}   


function cart(products) {
  console.log(`${products} are in cart`);
}

cart("apple");
cart("mango");
cart("banana");

function printC(name,count,price,discount) {
 console.log(`name is ${name} and count is ${count} and price is ${price} and discount is ${discount}`);
}

printC("apple",10,100,10);

// function expression
var cart = function(products) {
  console.log(`${products} are in cart`);
};

cart("apple");
cart("mango");
cart("banana");


// default parameter
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!
greet("John"); // Output: Hello, John!

// rest parameter
function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

console.log(sum(1, 2, 3, 4, 5));


function rest1(...args){
    console.log(args);
}

rest1(1,2,3,4,5);

// function expression
var sum = function(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
};

console.log(sum(1, 2, 3, 4, 5));


// eary return function
function checkAge(age) {
  if (age < 18) {
    return "Underage";
  }
  return "Adult";
}
console.log(checkAge(16)); // Output: Underage
console.log(checkAge(20)); // Output: Adult



// first class function
function greet(name) {
  return function(message) {
    console.log(`Hello, ${name}! ${message}`);
  };
} 

const greetJohn = greet("John");
greetJohn("Welcome to the platform!"); // Output: Hello, John! Welcome to the platform!


// function can be passed as argument to another function

function temp_b(fnc){
    fnc();
}
temp_b(function fnc2(){
    console.log("first class function");
});


// function can be returned from another function
function abcd(){
    return function (){
        console.log("function returned from another function");
    }
}

var temp = abcd();
temp();
// abcd();
abcd()(); // call a function that returns another function


// higher order function
function higherOrderFunction(fnc, value) {
  return fnc(value);
} 
function square(x) {
  return x * x;
}
console.log(higherOrderFunction(square, 5)); // Output: 25