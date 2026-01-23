// Data Types:
// Two Type of Data Types:
// 1. Primitive Data Types
// copy --> real value
let a = 12
let b = a; // a--> 12
a = a+3;
// types: string, number, boolean, null, undefined, symbol,bigint

// 2. Non-Primitive Data Types (Reference Data Types)
// copy --> give refrence of parent
let temp_a= [1, 2, 3];
let temp_b = temp_a;
temp_b.pop(); // remove value

// <-----Primitive Data Types---->
// types: string, number, boolean, null, undefined, symbol,bigint
// string:
// '' - single quotes
// "" - dobule quoutes
// `` - backticks
let d = "name";

d = 'username';
d = `firstname`;
// number:
let e = 12;
e = 12.25;


// boolean:
let f = true;
f = false;
// null:
// you give a value
let g = null;
// undefined:
// you don't give a value, by defualt value
let h;
let aa = [];


// symbol:
// unique immutable value
let u1= Symbol("uid");
let u2= Symbol("uid");
// check u1===u2
let obj ={uid: 1, name: "test", email: "test@test.com"};
let u3 = Symbol("uid");
let u4 = Symbol("uid");
let u5 = Symbol("uid");
obj[u3]= "001";
obj[u4]= "002";
obj[u5]= "003";

console.log(obj);

// make a function to take a name greet to them
function greet(name){
    console.log(`hello ${name}`);
}

greet("abhishek");   

// convert into advanced data types

// 1. Object
// 2. Array
// 3. Function
// 4. Date
// 5. RegExp

// 6. Map
// 7. WeakMap
// 8. Set
// 9. WeakSet

// 10. Proxy
// 11. Promise
// 12. Iterator
// 13. AsyncIterator
 obj = {
    uid: 1,
    name: "test",
    email: "test@test.com",
    greet: function(name){
        console.log(`hello ${name}`);
    }
}

obj.greet("abhishek");

array = [1, 2, 3];
array.forEach(function(item){
    console.log(item);
});

function greet(name){
    console.log(`hello ${name}`);
}

greet("abhishek");

Date.now();

// console.log(obj);

Map = new Map();
Map.set("name", "abhishek");

console.log(Map.get("name"));

proxy = new Proxy(obj, {
    get: function(target, key){
        console.log(`getting value of ${key}`);
        return target[key];
    },
    set: function(target, key, value){
        console.log(`setting value of ${key}`);
        target[key] = value;
    }
});

proxy.greet("abhishek");


// bigint
// cheak range of number , Number.MAX_SAFE_INTEGER
let number = 9090382398893;
number = number + 18;
console.log(number);
// let num2 = BigInt(9090382398893);
// num2 = num2 + bigint(18);
// console.log(num2);

let num3 = 9090382398893n;
num3 = num3 + 18n;
console.log(num3);

// non-primitive data types
// 1. Array
// 2. Object
// 3. Function


let temp_array = [1, 2, 3];
let temp_array1 = ["name", "email", "age"];
let temp_object = {name: "abhishek", email: "test@test.com",age: 12};
let temp_function = function(name){
    console.log(`hello ${name}`);
}
console.log(temp_array);
console.log(temp_array1);
console.log(temp_object);
console.log(temp_function);


// dynamic type
let temp_d = "string";
temp_d = 100;
temp_d = true;
temp_d = {name: "abhishek", email: "test@test.com"};
console.log(temp_d);

// typeof quirks
// typeof 12
// check type of variable use --> ex. typeof NaN, typeof null, 1 + "1", 1 == "1", 1 === "1"
// why typeof NaN --> number
// why typeof null --> object
// why 1 + "1" --> string
// why 1 == "1" --> true
// why 1 === "1" --> false




// operators
// Arithmetic, comparison, logical, assignment, unary, ternary
// Arithmetic:
// +, -, /, ** %
//+--> Add and concatenation
// ex. 1+2, "user" + "name"
//
// ex. 21
// /, *
// ex. 240/2, 25*2
// % (modulas) (sheshfal)
// ex. 12%4 --> 0
// ex. 9%2 --> 1
// ** (square) (exposination)
// ex. 2**3 --> 8
// Comparison (ans: true, false)
// >, <, >=, <=, ==, ===, !=, !==
// Logical (ans: true, false)
// &&, ||, !
// && --> and --> 12<10 && 12>10
// || --> or --> 12<10 || 12>10
// ! --> not --> !(12<10)
// Assignment
// = 
// +=, -=, *=, /=, %=, **=
// ex. let =12; // assign the value to variable
// ex. let +=12; // add the value to variable
// ex. let *=12; // multiply the value to variable
// ex. let /=12; // divide the value to variable
// ex. let %=12; // modulas the value to variable
// ex. let **=12; // square the value to variable



// Unary
// ++, --
// a = 12;
// ex. a++;
// ex. a--;


// Ternary
// ?:   
// ex. condition ? true : false;
// 12 > 10 ? console.log("true") : console.log("false");
// 12 < 10 ? console.log("true") : console.log("false");




// typeof null --> object
// typeof undefined --> undefined
// typeof NaN --> number
// typeof true --> boolean
// typeof false --> boolean
// typeof 12 --> number
// typeof "12" --> string
// typeof {} --> object
// typeof [] --> object
// typeof function --> function
// typeof Symbol --> symbol
// typeof BigInt --> bigint
// typeof 12.3 --> number
// typeof Infinity --> number

// instanceof
// let obj = {name: "abhishek", email: "test@test.com"};
// console.log(obj instanceof Object);



// conditional statements
// if, if-else, if-else-if, switch
// loops
// for, while, do-while, for-in, for-of
// error handling
// try-catch-finally, throw
// type conversion
// implicit and explicit
// type coercion
// truthy and falsy values

// if conditional statements
let age = 18;
if(age >= 18){
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}

// if-else-if conditional statements
let marks = 85;
if(marks >= 90){
    console.log("You got A grade");
} else if(marks >= 80){
    console.log("You got B grade");
} else if(marks >= 70){
    console.log("You got C grade");
} else if(marks >= 60){
    console.log("You got D grade");
} else {
    console.log("You got F grade");
}


// switch conditional statements
let day = 3;
switch(day){
    case 1: console.log("Monday");
    break;
    case 2: console.log("Tuesday");
    break;
    case 3: console.log("Wednesday");
    break;
    case 4: console.log("Thursday");
    break;
    case 5: console.log("Friday");
    break;
    case 6: console.log("Saturday");
    break;
    case 7: console.log("Sunday");
    break;
    default: console.log("Invalid day");
}

//  early return pattern
function checkEvenOdd(num){
    if(num % 2 === 0){
        return "Even";
    }
    return "Odd";
}
console.log(checkEvenOdd(4));
console.log(checkEvenOdd(7));

function cheakPositiveNegative(num){
    if(num < 0) return "Negative";
    else return "Positive";
}
console.log(cheakPositiveNegative(-5));
console.log(cheakPositiveNegative(10));

// loops
// for loop
for(let i=1; i<=5; i++){
    console.log(i);
}
// while loop
let j = 1;
while(j<=5){
    console.log(j);
    j++;
}
// do-while loop
let k = 1;
do{
    console.log(k);
    k++;
}while(k<=5);
// for-in loop
let person = {name: "abhishek", age: 18, email: "test@test.com"};
for(let key in person){
    console.log(key, person[key]);
}
// for-of loop
let colors = ["red", "green", "blue"];
for(let color of colors){
    console.log(color);
}
// try-catch-finally
try{
    console.log("Try block");
    console.log(a);
}catch(e){
    console.log("Catch block");
    console.log(e);
}finally{
    console.log("Finally block");
}




function getParticipants() {
var attendanceList = [];
var elements = document.querySelectorAll("div[data-self-name]");
for (var item of elements) {
var name = item.innerHTML;
attendanceList.push(name);
}
var participants = attendanceList.join(", ")
console.log(participants);
}



// rock paper scissors game
function rpsGame(userChoice) {
    var choices = ['rock', 'paper', 'scissors'];
    var computerChoice = choices[Math.floor(Math.random() * 3)];
    var result = '';    
    if (userChoice === computerChoice) {
        result = 'It\'s a tie!';    
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            result = 'You lose! Paper covers Rock.';        
        } else {
            result = 'You win! Rock crushes Scissors.';        
        }   
    }
    }


    // second version of rock paper scissors game
    function rpsGameV2(userChoice, computerChoice) {
        if(userChoice === "rock" && computerChoice === "scissors" ) return "You win! Rock crushes Scissors.";
        if(userChoice === "rock" && computerChoice === "paper" ) return "You lose! Paper covers Rock.";
        if(userChoice === "paper" && computerChoice === "rock" ) return "You win! Paper covers Rock.";
        if(userChoice === "paper" && computerChoice === "scissors" ) return "You lose! Scissors cut Paper.";
        if(userChoice === "scissors" && computerChoice === "paper" ) return "You win! Scissors cut Paper.";
        if(userChoice === "scissors" && computerChoice === "rock" ) return "You lose! Rock crushes Scissors.";
        return "It's a tie!";
    }
    console.log(rpsGameV2("rock", "scissors"));
    console.log(rpsGameV2("rock", "paper"));
    console.log(rpsGameV2("paper", "rock"));    


    // third version of rock paper scissors game
    function rpsGameV3(userChoice, computerChoice) {
        var rpsDatabase = {
            "rock": {"scissors": "You win! Rock crushes Scissors.", "paper": "You lose! Paper covers Rock."},
            "paper": {"rock": "You win! Paper covers Rock.", "scissors": "You lose! Scissors cut Paper."},
            "scissors": {"paper": "You win! Scissors cut Paper.", "rock": "You lose! Rock crushes Scissors."}
        };
        if(userChoice === computerChoice) return "It's a tie!";
        return rpsDatabase[userChoice][computerChoice];
    }
    
    console.log("Third Version:");
    console.log(rpsGameV3("rock", "scissors"));
    console.log(rpsGameV3("rock", "paper"));
    console.log(rpsGameV3("paper", "rock"));    