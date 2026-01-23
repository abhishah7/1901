// loop in javascript

// for loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// while loop
let j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}
// do-while loop
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);
// for-in loop
let person = { name: "abhishek", age: 18, email: "test@test.com" };
for (let key in person) {
  console.log(key, person[key]);
}
// for-of loop
let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

// break
for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}

// continue
for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}

// for each

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.forEach(function (item) {
  console.log(item);
});

console.log("first example");
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log("second example");

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

console.log("third example");

for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`, i);
  } else {
    console.log(`${i} is odd`, i);
  }
}


console.log("fourth example");

let i1 = 1;
while (i1 <= 15) {
  if (i1 % 2 !== 0) {
     console.log(`${i1} is odd`, i1);
  } 
  i1++;
}


console.log("fifth example");

for(let i=1; i<=10; i++){
    console.log(`5 * ${i} = ${5*i}`);
}
// using user input
let u = prompt("give a number");
for(let i=1; i<=10; i++){
    console.log(`${u} * ${i} = ${u*i}`);
}
console.log("sixth eaxample")

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}
console.log(sum);


console.log("seventh example");

for(let i=1; i<=50; i++){
    if(i%3 ===0){
        console.log(i);
    }
}

console.log("eight example");
let num2 = prompt("give a number");
for(let i=1; i<=num2; i++){
    if(i%2 ===0){
        console.log(i, " is even");
    }
    else{
        console.log(i, " is odd");
    }
}


console.log("nine example");

for(let i=1; i<=100; i++){
    if(i%3 ===0 || i%5 ===0){
        console.log(i);
    }
}


console.log("ten example");

for(let i=1; i<=100; i++){
    if(i%7 ===0){
        console.log(i);
        break;
    }
}


console.log("eleven example");

for(let i=1; i<=20; i++){
    if(i%3 ===0){
        continue;
    }
    console.log(i);
}


console.log("twelve example");
let count = 0;
for(let i=1; i<=100; i++){
    if(i%2 === 1){
        count++;
        console.log(i);
    }

    if(count === 5){
        console.log("count is 5");
        break;
    }
}