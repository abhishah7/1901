// types of function
// 1. Named Function
// 2. Anonymous Function
// 3. Arrow Function

// 1. Named Function
function greet(name) {
  console.log(`hello ${name}`);
}

// 2. Anonymous Function
var temp_function3 = function (name) {
  console.log(`hello ${name}`);
};

// 3. Arrow Function
var temp_function2 = (name) => {
  console.log(`hello ${name}`);
};

function cart(products) {
  console.log(`${products} are in cart`);
}

cart("apple");
cart("mango");
cart("banana");

function printC(name, count, price, discount) {
  console.log(
    `name is ${name} and count is ${count} and price is ${price} and discount is ${discount}`,
  );
}

printC("apple", 10, 100, 10);

// function expression
var cart = function (products) {
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

function rest1(...args) {
  console.log(args);
}

rest1(1, 2, 3, 4, 5);

// function expression
var sum = function (...numbers) {
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
  return function (message) {
    console.log(`Hello, ${name}! ${message}`);
  };
}

const greetJohn = greet("John");
greetJohn("Welcome to the platform!"); // Output: Hello, John! Welcome to the platform!

// function can be passed as argument to another function

function temp_b2(fnc) {
  fnc();
}
temp_b2(function fnc2() {
  console.log("first class function");
});

// function can be returned from another function
function abcd() {
  return function () {
    console.log("function returned from another function");
  };
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

// pure and impure function
// pure function
function pureAdd(a, b) {
  return a + b;
}
console.log(pureAdd(2, 3)); // Output: 5
console.log(pureAdd(2, 3)); // Output: 5
console.log(pureAdd(2, 3)); // Output: 5

// impure function
let counter = 0;
function impureAdd() {
  counter++;
  console.log(counter);
}

impureAdd(); // Output: 1
impureAdd(); // Output: 2
impureAdd(); // Output: 3

// closure function
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

let fnc = outer();
fnc(); // 1
fnc(); // 2
fnc(); // 3

// method 2

function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}

let fnc1 = outer();
fnc1();
fnc1();
fnc1();
// method 3
console.log("method 3");
let fnc2 = (function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
})();

fnc2();
fnc2();
fnc2();

// lexical scope
function outerFunction() {
  let outerVariable = "I am from outer function";
  function innerFunction() {
    console.log(outerVariable);
  }
  innerFunction();
}

outerFunction();
// Output: I am from outer function

// another example of lexical scope
function outerFunction1() {
  let outerVariable1 = "I am from outer function 1";
  function innerFunction1() {
    let innerVariable1 = "I am from inner function 1";

    function innermostFunction1() {
      console.log(outerVariable1);
      console.log(innerVariable1);
    }
    innermostFunction1();
  }
  innerFunction1();
}

outerFunction1();

console.log("end of function.js");
function calculateTotal(...scores) {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  return total;
}
console.log(calculateTotal(10, 20, 30, 40, 50));


function ffff(){ return;}



