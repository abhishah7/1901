# JavaScript Fundamentals - Advanced Guide

## Table of Contents

1. [Variable Declarations](#variable-declarations)
2. [Hoisting & Temporal Dead Zone](#hoisting--temporal-dead-zone)
3. [Data Types](#data-types)
4. [Scope Management](#scope-management)
5. [Functions](#functions)
6. [Function Types & Declarations](#function-types--declarations)
7. [Advanced Function Concepts](#advanced-function-concepts)
8. [Control Flow Statements](#control-flow-statements)
9. [Loops & Iteration](#loops--iteration)
10. [Error Handling](#error-handling)
11. [String Methods & Manipulation](#string-methods--manipulation)
12. [Array Methods & Operations](#array-methods--operations)
13. [Object Manipulation](#object-manipulation)
14. [Asynchronous JavaScript](#asynchronous-javascript)
15. [Best Practices & Performance](#best-practices--performance)

---

## Variable Declarations

### Overview

JavaScript provides three ways to declare variables: `var`, `let`, and `const`. Each has distinct behavior regarding scope, hoisting, and redeclaration.

### Declaration Methods

```javascript
var a = 10000000; // Function-scoped, hoisted
var _t = "temp"; // Legacy variable declaration
b = 223; // Implicit global (avoid in strict mode)

let temp2 = "abc"; // Block-scoped, not hoisted into TDZ
const temp3 = "i like your knowledge"; // Block-scoped, immutable
```

### Key Differences Table

| Feature        | var             | let         | const       |
| -------------- | --------------- | ----------- | ----------- |
| Scope          | Function        | Block       | Block       |
| Hoisting       | Yes (undefined) | Yes (TDZ)   | Yes (TDZ)   |
| Redeclaration  | Allowed         | Not allowed | Not allowed |
| Reassignment   | Allowed         | Allowed     | Not allowed |
| Initialization | Optional        | Optional    | Required    |

---

## Hoisting & Temporal Dead Zone

### Hoisting Mechanism

Hoisting splits variable declaration into two phases:

1. **Declaration Phase**: Variable name is registered (moves to top)
2. **Initialization Phase**: Variable is assigned a value (stays in place)

### Hoisting Impact by Type

```javascript
// VAR - Hoisted with 'undefined'
console.log(temp_d); // Output: undefined
var temp_d = 123;

// LET - Hoisted but in Temporal Dead Zone (TDZ)
console.log(j); // ReferenceError: Cannot access 'j' before initialization
let j = 1000;

// CONST - Same TDZ as let
console.log(k); // ReferenceError: Cannot access 'k' before initialization
const k = 500;
```

---

## Advanced Examples

### Example 1: Implicit Global Declaration

```javascript
var a = 10000000;
var _t = "temp";
b = 223; // b is implicitly declared as a global variable

let temp2 = "abc";
const temp3 = "i like your knowledge";

console.log(a, _t, b, temp2, temp3);
// Output: 10000000 temp 223 abc i like your knowledge
```

**Analysis**: Variables `a`, `_t`, `temp2`, and `temp3` are declared with their respective keywords. The variable `b` is implicitly declared as a global (in non-strict mode).

---

### Example 2: Redeclaring Variables

```javascript
d = 24; // Implicitly declared global
var d = "hello"; // Redeclares d with 'var'

console.log(d); // Output: hello
```

**Analysis**: Since `var` allows redeclaration, the second assignment overwrites the first value (24 → "hello").

---

### Example 3: Global Scope Behavior

```javascript
a1 = 10; // Implicit global
console.log(a1); // Output: 10

{
  a1 = 100; // Modifies global variable
  console.log(a1); // Output: 100
}

function abc() {
  a1 = 1000; // Modifies global variable
  console.log(a1); // Output: 1000
}
abc();
console.log(a1); // Output: 1000
```

**Console Output**: `10 → 100 → 1000 → 1000`

**Analysis**: With `var`, block scope doesn't create a new scope. All assignments modify the global `a1`.

---

## Scope Management

### Example 4: Block Scope with 'let' (Recommended)

```javascript
console.log("using let");

let aa = 10;
console.log(aa); // Output: 10

{
  let aa = 100; // Block-scoped, separate variable
  console.log(aa); // Output: 100
}

function abc() {
  let aa = 1000; // Function-scoped, separate variable
  console.log(aa); // Output: 1000
}
abc();
console.log(aa); // Output: 10 (outer scope unchanged)
```

**Console Output**: `using let → 10 → 100 → 1000 → 10`

**Analysis**: Each scope creates its own `aa` variable. The outer `aa` remains isolated.

---

### Example 5: Function Scope with 'var' (Legacy)

```javascript
console.log("using var");

var aa1 = 10;
console.log(aa1); // Output: 10

{
  var aa1 = 100; // Overwrites global variable
  console.log(aa1); // Output: 100
}

function abc() {
  var aa1 = 1000; // Creates function scope
  console.log(aa1); // Output: 1000
}
abc();
console.log(aa1); // Output: 100
```

**Console Output**: `using var → 10 → 100 → 1000 → 100`

**Analysis**: `var` is function-scoped, not block-scoped. Block scope `{}` doesn't create a new scope.

---

### Example 6: Temporal Dead Zone (TDZ) Error

```javascript
console.log(j); // ❌ ReferenceError: Cannot access 'j' before initialization
let j = 1000;
```

**Error Type**: `ReferenceError`

**Analysis**: Variables declared with `let` enter the Temporal Dead Zone from block start until declaration point. They cannot be accessed before initialization.

---

### Example 7: Hoisting Comparison

```javascript
// With var
var temp_d;
console.log(temp_d); // Output: undefined (hoisted, not initialized)
temp_d = 123;

// With let
let temp_d2 = 123;
console.log(temp_d2); // Works fine (properly initialized before use)
```

**Analysis**:

- `var`: Hoisted with `undefined` initialization
- `let`: Hoisted but remains in TDZ until declaration

---

## Data Types

JavaScript has two categories of data types: **Primitive** and **Non-Primitive** (Reference).

### Primitive Data Types

#### Example 1: Strings

```javascript
let name = "John"; // Double quotes
let alternateName = "Doe"; // Single quotes
let greeting = `Hello, ${name}`; // Template literals (interpolation)

console.log(greeting); // Output: Hello, John
console.log(alternateName); // Output: Doe
console.log(name); // Output: John
```

**Analysis**: Strings can use single quotes, double quotes, or backticks. Backticks enable template literals with `${variable}` interpolation.

---

#### Example 2: Numbers

```javascript
let age = 30;
let pi = 3.14159;
let temperature = 25.5;

console.log(age); // Output: 30
console.log(pi); // Output: 3.14159
console.log(temperature); // Output: 25.5
```

**Analysis**: JavaScript has a single `Number` type for both integers and decimals. Special values include `Infinity`, `-Infinity`, and `NaN`.

---

#### Example 3: Booleans

```javascript
let isTrue = true;
let isFalse = false;

console.log(isTrue); // Output: true
console.log(isFalse); // Output: false
```

**Analysis**: Booleans are used for logical operations and conditional statements. Truthy/falsy values include `0`, `''`, `null`, `undefined`, and `NaN`.

---

#### Example 4: Null and Undefined

```javascript
let nullValue = null;
let undefinedValue;

console.log(nullValue); // Output: null
console.log(undefinedValue); // Output: undefined
```

**Analysis**:

- `null`: Intentional absence of value (assigned explicitly)
- `undefined`: Unintentional absence (default for uninitialized variables)

**Key Difference**: `typeof null === 'object'` (bug), `typeof undefined === 'undefined'`

---

#### Example 5: Symbols (Unique Identifiers)

```javascript
let uniqueSymbol = Symbol("unique");
let anotherUniqueSymbol = Symbol("unique");

console.log(uniqueSymbol); // Output: Symbol(unique)
console.log(anotherUniqueSymbol); // Output: Symbol(unique)
console.log(uniqueSymbol === anotherUniqueSymbol); // Output: false
```

**Analysis**: Symbols are immutable and globally unique identifiers. Even if created with same description, they are never equal. Used as object keys to avoid collisions.

---

#### Example 6: BigInt (Large Integers)

```javascript
let bigNumber = 1234567890123456789012345678901234567890n;
let anotherBigNumber = 9007199254740992n;

console.log(bigNumber); // Output: 1234567890123456789012345678901234567890n
console.log(anotherBigNumber); // Output: 9007199254740992n
console.log(typeof bigNumber); // Output: 'bigint'
```

**Analysis**: BigInt handles integers larger than `Number.MAX_SAFE_INTEGER` (2^53 - 1). Suffix `n` creates BigInt literals.

---

### Non-Primitive Data Types

#### Example 7: Arrays

```javascript
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "string", true, null, { key: "value" }];

console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(numbers[0]); // Output: 1
console.log(numbers.length); // Output: 5
console.log(Array.isArray(numbers)); // Output: true
```

**Analysis**: Arrays are ordered collections (indexed from 0). They can contain mixed types and are mutable. `typeof array === 'object'`.

---

#### Example 8: Objects

```javascript
let person = {
  name: "John",
  age: 30,
  isStudent: true,
};

console.log(person); // Output: { name: 'John', age: 30, isStudent: true }
console.log(person.name); // Output: John
console.log(person["age"]); // Output: 30
```

**Analysis**: Objects represent collections of key-value pairs. They are mutable and passed by reference.

---

#### Example 9: Functions

```javascript
// Function Declaration
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Function Expression
const greetArrow = (name) => console.log(`Hello, ${name}!`);

// Functions are first-class objects
const greetCall = greet;
greetCall("John"); // Output: Hello, John!

// Functions can be passed as arguments
function execute(fn, value) {
  fn(value);
}
execute(greet, "Alice"); // Output: Hello, Alice!
```

**Analysis**: Functions are first-class objects in JavaScript. They can be assigned to variables, passed as arguments, returned from functions, and stored in data structures.

---

## Operators in JavaScript

### Arithmetic Operators

```javascript
// Basic arithmetic
let a = 20,
  b = 10;

console.log(a + b); // 30 (addition)
console.log(a - b); // 10 (subtraction)
console.log(a * b); // 200 (multiplication)
console.log(a / b); // 2 (division)
console.log(a % b); // 0 (modulus - remainder)
console.log(a ** 2); // 400 (exponentiation - power)

// String concatenation
console.log("Hello " + "World"); // "Hello World"
console.log("Age: " + 25); // "Age: 25" (number coerced to string)

// Modulus examples
console.log(12 % 4); // 0 (12 divided by 4 has no remainder)
console.log(9 % 2); // 1 (9 divided by 2 has remainder 1)
```

**Key Point**: The `+` operator performs both addition and string concatenation depending on operand types.

---

### Comparison Operators

```javascript
let x = 15,
  y = "15";

// Comparison (returns boolean)
console.log(x > 10); // true
console.log(x < 20); // true
console.log(x >= 15); // true
console.log(x <= 15); // true

// Loose equality (== - performs type coercion)
console.log(x == y); // true (15 == "15" after coercion)

// Strict equality (=== - no type coercion)
console.log(x === y); // false (number !== string)

// Inequality
console.log(x != y); // false (loose equality)
console.log(x !== y); // true (strict inequality)
```

**Best Practice**: Use `===` and `!==` to avoid unexpected type coercion.

---

### Logical Operators

#### AND Operator (&&)

```javascript
// Example 1: Both conditions must be true
let x = 10;
let y = 20;

if (x > 5 && y > 5) {
  console.log("Both are greater than 5"); // Output
} else {
  console.log("One or both are not greater than 5");
}
```

#### OR Operator (||)

```javascript
// Example 2: At least one condition must be true
let isAdmin = true;
let isLoggedIn = false;

if (isAdmin || isLoggedIn) {
  console.log("Access granted"); // Output
} else {
  console.log("Access Denied");
}
```

#### NOT Operator (!)

```javascript
// Example 3: Inverts the boolean value
let temp = 35;

if (!(temp > 30)) {
  console.log("Hot day");
} else {
  console.log("Pleasant day"); // Output
}
```

#### Truthy & Falsy Values

```javascript
// Example 4: Understanding falsy values
let a = 0;

if (a) {
  console.log("Truthy value");
} else {
  console.log("Falsy value"); // Output (0 is falsy)
}

// Other falsy values: "", null, undefined, NaN, false
// All other values are truthy
```

**Truth Table**:

- `true && true = true`
- `true && false = false`
- `true || false = true`
- `false || false = false`

---

### Assignment Operators

```javascript
let value = 10;

value += 5; // value = value + 5; → 15
console.log(value); // 15

value -= 3; // value = value - 3; → 12
console.log(value); // 12

value *= 2; // value = value * 2; → 24
console.log(value); // 24

value /= 4; // value = value / 4; → 6
console.log(value); // 6

value %= 4; // value = value % 4; → 2
console.log(value); // 2

value **= 3; // value = value ** 3; → 8
console.log(value); // 8
```

---

### Unary Operators

#### Post-Increment (a++)

```javascript
// Example 8: Post-increment returns value then increments
let a = 5;
a++;
console.log(a); // Output: 6
```

#### Pre-Increment (++a)

```javascript
// Example 9: Pre-increment increments then returns value
let a = 8;
++a;
console.log(a); // Output: 9
```

#### Post vs Pre-Increment Difference

```javascript
// Example 10: Post-increment
let b = 4;
let c = b++;
console.log(b, c); // Output: 5, 4 (c gets old value, b increments)

// Example 11: Pre-increment
let b = 4;
let c = ++b;
console.log(b, c); // Output: 5, 5 (b increments first, c gets new value)
```

#### Post-Decrement

```javascript
// Example 12: Post-decrement
let m = 10;
console.log(m--); // Output: 10
console.log(m); // Output: 9
```

#### Complex Example

```javascript
// Example 13: Combining increment in expression
let n = 5;
let result = n++ + ++n;
console.log(result); // Output: 11
// n++ returns 5 (then n becomes 6), ++n increments n to 7 and returns 7
// 5 + 7 = 12, but n++ happens after evaluation so result = 11
```

#### Increment in Function Context

```javascript
// Example 14: Increment with function
let likes = 100;

function likePost() {
  return ++likes;
}

console.log(likePost()); // Output: 101
console.log(likes); // Output: 101
```

#### Decrement in Condition

```javascript
// Example 15: Post-decrement in condition
let count = 5;

if (count-- === 5) {
  console.log("Matched"); // Output (count was 5, now becomes 4)
} else {
  console.log("Not Matched");
}
```

---

### Ternary Conditional Operator

#### Basic Ternary

```javascript
// Example 5: Basic grade assignment
let score = 78;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
console.log("Grade:", grade); // Output: Grade: C
```

#### Nested Ternary

```javascript
// Example 6: Status based on points
let points = 120;
let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";
console.log("Status:", status); // Output: Status: Gold
```

#### Ternary with Logical Operators

```javascript
// Example 7: Combining logical operators with ternary
let loggedIn = true;
let hasToken = false;
let access = loggedIn && hasToken ? "Allow" : "Deny";
console.log("access:", access); // Output: access: Deny
```

**Syntax**: `condition ? valueIfTrue : valueIfFalse`

---

## Advanced Data Types & Objects

### Objects (Reference Type)

```javascript
let user = {
  uid: 1,
  name: "Abhishek",
  email: "abhishek@test.com",
  greet: function (name) {
    console.log(`Hello ${name}, welcome!`);
  },
};

console.log(user.uid); // 1
console.log(user["email"]); // abhishek@test.com
user.greet("John"); // Hello John, welcome!
```

**Key Point**: Objects are passed by reference, not by value.

---

### Arrays (Reference Type)

```javascript
let numbers = [1, 2, 3, 4, 5];
let mixed = ["name", 25, true, null, { key: "value" }];

console.log(numbers[0]); // 1
console.log(numbers.length); // 5

// Array methods
numbers.forEach(function (item) {
  console.log(item);
});
// Output: 1, 2, 3, 4, 5

// Array modification
let arr = [1, 2, 3];
arr.pop(); // Removes last element [1, 2]
console.log(arr); // [1, 2]
```

**Key Point**: Arrays are reference types. Assigning an array to another variable creates a reference, not a copy.

```javascript
let temp_a = [1, 2, 3];
let temp_b = temp_a; // temp_b points to same array
temp_b.pop(); // Removes from original

console.log(temp_a); // [1, 2]
console.log(temp_b); // [1, 2]
```

---

### Symbols (Unique Identifiers)

```javascript
// Symbols are unique and immutable
let uid1 = Symbol("uid");
let uid2 = Symbol("uid");

console.log(uid1 === uid2); // false (each Symbol is unique)
console.log(typeof uid1); // "symbol"

// Use case: Avoid property name collisions
let user = {
  uid: 1,
  name: "Test",
  email: "test@test.com",
};

let privateId1 = Symbol("uid");
let privateId2 = Symbol("uid");
let privateId3 = Symbol("uid");

user[privateId1] = "001";
user[privateId2] = "002";
user[privateId3] = "003";

console.log(user);
// { uid: 1, name: 'Test', email: 'test@test.com', [Symbol(uid)]: '001', [Symbol(uid)]: '002', [Symbol(uid)]: '003' }

// Symbol properties are not enumerable
for (let key in user) {
  console.log(key); // Only: uid, name, email (Symbol keys excluded)
}
```

---

### Map (Modern Key-Value Storage)

```javascript
let map = new Map();

// Set values
map.set("name", "Abhishek");
map.set("age", 25);
map.set("email", "abhishek@test.com");

// Get values
console.log(map.get("name")); // "Abhishek"
console.log(map.get("age")); // 25

// Check existence
console.log(map.has("name")); // true
console.log(map.has("phone")); // false

// Get size
console.log(map.size); // 3

// Delete entries
map.delete("age");
console.log(map.size); // 2

// Iterate over Map
map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
// Output: name: Abhishek, email: abhishek@test.com
```

**Difference from Objects**:

- Maps can use any type as key (objects only allow strings/symbols)
- Maps maintain insertion order
- Maps have `.size` property
- Maps have `.has()`, `.get()`, `.set()`, `.delete()` methods

---

### Proxy (Intercept & Control Object Operations)

```javascript
let user = {
  uid: 1,
  name: "Test",
  email: "test@test.com",
};

// Create a Proxy to intercept get/set operations
let proxy = new Proxy(user, {
  get: function (target, key) {
    console.log(`Getting value of ${key}`);
    return target[key];
  },
  set: function (target, key, value) {
    console.log(`Setting ${key} to ${value}`);
    target[key] = value;
  },
});

console.log(proxy.name);
// Output: Getting value of name
// Output: Test

proxy.name = "John";
// Output: Setting name to John

console.log(user.name); // "John" (original object modified)
```

**Use Cases**:

- Validation
- Logging
- Computed properties
- Security control

---

### BigInt (Large Integer Handling)

```javascript
// Regular numbers have a limit
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
let num = 9090382398893;
num = num + 18;
console.log(num); // May lose precision

// BigInt suffix 'n' for large numbers
let num1 = 9090382398893n;
num1 = num1 + 18n;
console.log(num1); // 9090382398911n (correct precision maintained)

// BigInt operations
let big1 = 100n;
let big2 = 20n;
console.log(big1 + big2); // 120n
console.log(big1 * big2); // 2000n
console.log(big1 / big2); // 5n (integer division only)

// Cannot mix BigInt and Number
// console.log(100n + 20); // TypeError: Cannot mix BigInt and other types
```

**When to use**:

- Working with numbers larger than `Number.MAX_SAFE_INTEGER`
- Financial calculations
- Large ID numbers
- Cryptographic operations

---

## Primitive vs Reference Type Copying

### Primitive Copy (By Value)

```javascript
let a = 12;
let b = a; // Copy value
a = a + 3;

console.log(a); // 15
console.log(b); // 12 (unchanged, separate copy)
```

**Behavior**: Primitives are copied by value. Each variable has its own independent copy.

---

### Reference Type Copying (By Reference)

```javascript
let tempA = [1, 2, 3];
let tempB = tempA; // Reference copy (points to same array)
tempB.pop(); // Remove element

console.log(tempA); // [1, 2] (original affected!)
console.log(tempB); // [1, 2]

// To create a true copy of reference types:
let tempC = [1, 2, 3];
let tempD = [...tempC]; // Spread operator creates shallow copy
tempD.pop();

console.log(tempC); // [1, 2, 3] (original unchanged)
console.log(tempD); // [1, 2]
```

**Key Difference**: Reference types share the same data in memory. Modifications through one variable affect the original.

---

## Summary: Quick Reference

| Aspect              | Details                                                     |
| ------------------- | ----------------------------------------------------------- |
| **Var Scope**       | Function-scoped, hoisted with `undefined`                   |
| **Let/Const Scope** | Block-scoped, hoisted but in TDZ                            |
| **Redeclaration**   | Only `var` allows redeclaration                             |
| **Primitive Types** | String, Number, Boolean, Null, Undefined, Symbol, BigInt    |
| **Reference Types** | Array, Object, Function, Date, RegExp, Map, Set, Proxy      |
| **Key Principle**   | Primitives passed by value; References passed by reference  |
| **Operators**       | Arithmetic, Comparison, Logical, Assignment, Unary, Ternary |

---

## Best Practices

✅ **DO:**

- Use `const` by default
- Use `let` for variables that need to change
- Avoid `var` in modern JavaScript
- Use template literals for string interpolation
- Be explicit with `null` vs leaving variables `undefined`

❌ **DON'T:**

- Create implicit globals (always declare variables)
- Rely on hoisting behavior
- Mix variable declaration styles
- Access variables before declaration (with `let`/`const`)
- Treat `null` and `undefined` as interchangeable

---

## Dynamic Typing & Type Quirks

### Example: Dynamic Type Reassignment

JavaScript is **dynamically typed**, meaning a variable can hold any data type and can change at runtime.

```javascript
// Dynamic type - same variable, different types
let temp_d = "string";
console.log(typeof temp_d); // Output: 'string'

temp_d = 100;
console.log(typeof temp_d); // Output: 'number'

temp_d = true;
console.log(typeof temp_d); // Output: 'boolean'

temp_d = { name: "abhishek", email: "test@test.com" };
console.log(typeof temp_d); // Output: 'object'

console.log(temp_d);
// Output: { name: 'abhishek', email: 'test@test.com' }
```

**Analysis**: The same variable (`temp_d`) can hold different types throughout program execution. This flexibility is a defining feature of JavaScript.

---

### typeof Quirks & Edge Cases

The `typeof` operator has several **quirky behaviors** that surprise developers:

#### Quirk 1: typeof null

```javascript
console.log(typeof null); // Output: 'object' (NOT 'null')
// This is a known JavaScript bug from early implementations
// Correct check: value === null
```

**Why?**: This is a historic bug in JavaScript. `null` is actually a primitive, but `typeof` returns `'object'`.

---

#### Quirk 2: typeof NaN

```javascript
console.log(typeof NaN); // Output: 'number' (NOT 'nan')
console.log(NaN === NaN); // Output: false (NaN is not equal to itself!)

// Correct way to check for NaN:
console.log(Number.isNaN(NaN)); // Output: true
console.log(isNaN("hello")); // Output: true (coercion issue!)
console.log(Number.isNaN("hello")); // Output: false (strict check)
```

**Why?**: `NaN` stands for "Not-a-Number" but is technically a number type. It has the unique property that it's not equal to itself.

---

### Type Coercion Examples

JavaScript performs **implicit type coercion** in certain operations, which can lead to unexpected results:

#### Example 1: String Concatenation vs Addition

```javascript
console.log(1 + "1"); // Output: "11" (string concatenation)
console.log(1 + 1); // Output: 2 (numeric addition)
console.log("1" + 1); // Output: "11" (string concatenation)
```

**Analysis**: When adding a number and string, JavaScript coerces the number to a string.

---

#### Example 2: Loose Equality (==) vs Strict Equality (===)

```javascript
// Loose Equality (==) - performs type coercion
console.log(1 == "1"); // Output: true (coerces string to number)
console.log(1 == true); // Output: true (coerces true to 1)
console.log(0 == false); // Output: true (coerces false to 0)
console.log(null == undefined); // Output: true (special case)

// Strict Equality (===) - NO type coercion
console.log(1 === "1"); // Output: false (different types)
console.log(1 === true); // Output: false (boolean vs number)
console.log(0 === false); // Output: false (boolean vs number)
console.log(null === undefined); // Output: false (different types)
```

**Best Practice**: Always use `===` to avoid unexpected type coercion.

---

### Truthy & Falsy Values

```javascript
// Falsy values
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(false)); // false

// All other values are truthy
console.log(Boolean(1)); // true
console.log(Boolean("hello")); // true
console.log(Boolean([])); // true (array is truthy!)
console.log(Boolean({})); // true (object is truthy!)
```

**Key Insight**: Empty arrays and objects are **truthy** even though they're "empty".

---

## Type Checking Best Practices

```javascript
// ❌ AVOID: Unreliable checks
typeof variable == "object"; // Could be null, array, or object

// ✅ DO: Use specific checks
Number.isNaN(value); // For NaN
Array.isArray(value); // For arrays
value === null; // For null
value === undefined; // For undefined
typeof value === "string"; // For strings
typeof value === "number"; // For numbers
typeof value === "boolean"; // For booleans
```

---

## **Last Updated**: January 20, 2026

## Functions

### Overview

Functions are reusable blocks of code designed to perform specific tasks. They are **first-class objects** in JavaScript, meaning they can be assigned to variables, passed as arguments, and returned from other functions.

### Function Declaration Syntax

```javascript
// Basic function declaration
function greet(name) {
  console.log(`hello ${name}`);
}

greet("John"); // Output: hello John
```

**Characteristics**:

- Functions are hoisted to the top of their scope
- Can be called before declaration
- Clear, readable syntax
- Ideal for main application logic

---

## Function Types & Declarations

### 1. Named Functions

Named functions are declared with the `function` keyword and have an explicit name.

```javascript
// Named Function
function greet(name) {
  console.log(`hello ${name}`);
}

greet("Alice"); // Output: hello Alice
```

**Advantages**:

- Easier to debug (name appears in stack trace)
- Can be hoisted
- Self-documenting code

---

### 2. Anonymous Functions

Anonymous functions have no name and are typically assigned to variables or used as callbacks.

```javascript
// Anonymous Function
var temp_function = function (name) {
  console.log(`hello ${name}`);
};

temp_function("Bob"); // Output: hello Bob
```

**Characteristics**:

- No name identifier
- Must be assigned before use
- Not hoisted (stored in variable)
- Often used as callbacks

---

### 3. Arrow Functions

Arrow functions provide a concise syntax using the `=>` operator (ES6+).

```javascript
// Arrow Function
var temp_function = (name) => {
  console.log(`hello ${name}`);
};

temp_function("Charlie"); // Output: hello Charlie

// Concise syntax (implicit return)
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8

// Single parameter (parentheses optional)
const square = (x) => x * x;
console.log(square(4)); // Output: 16
```

**Advantages**:

- Cleaner, more concise syntax
- Implicit return (if body has single expression)
- Lexically bound `this` (no own `this`)
- Great for array methods like `.map()`, `.filter()`

**Disadvantages**:

- Cannot be used as constructors (no `new`)
- No `arguments` object
- Different `this` binding

---

### Function Parameters & Arguments

#### Basic Parameters

```javascript
function cart(products) {
  console.log(`${products} are in cart`);
}

cart("apple"); // Output: apple are in cart
cart("mango"); // Output: mango are in cart
cart("banana"); // Output: banana are in cart
```

#### Multiple Parameters

```javascript
function printC(name, count, price, discount) {
  console.log(
    `name is ${name} and count is ${count} and price is ${price} and discount is ${discount}`,
  );
}

printC("apple", 10, 100, 10);
// Output: name is apple and count is 10 and price is 100 and discount is 10
```

---

### Function Expressions

Function expressions assign a function to a variable. The function may be named or anonymous.

```javascript
// Function expression (anonymous)
var cart = function (products) {
  console.log(`${products} are in cart`);
};

cart("apple"); // Output: apple are in cart
cart("mango"); // Output: mango are in cart
cart("banana"); // Output: banana are in cart

// Function expression with sum
var sum = function (...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
};

console.log(sum(1, 2, 3, 4, 5)); // Output: 15
```

**Difference from Declaration**:

- Not hoisted (must be defined before use)
- More flexible (can be conditional)
- Can be anonymous

---

### Default Parameters

Default parameters provide fallback values when arguments are not supplied.

```javascript
// Default parameter
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!
greet("John"); // Output: Hello, John!
```

**Use Cases**:

- Providing sensible defaults
- Avoiding `undefined` errors
- Cleaner parameter handling

---

### Rest Parameters (...)

Rest parameters allow a function to accept unlimited number of arguments as an array.

```javascript
// Rest parameter
function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// Rest parameter with logging
function rest1(...args) {
  console.log(args); // Output: [1, 2, 3, 4, 5]
}

rest1(1, 2, 3, 4, 5);
```

**Characteristics**:

- Must be the last parameter
- Collects remaining arguments into an array
- Flexible function signatures
- Replaces `arguments` object

---

### Early Return Pattern

Early returns simplify logic by exiting the function when conditions are met.

```javascript
// Early return function
function checkAge(age) {
  if (age < 18) {
    return "Underage";
  }
  return "Adult";
}

console.log(checkAge(16)); // Output: Underage
console.log(checkAge(20)); // Output: Adult
```

**Benefits**:

- Reduces nested conditionals
- Clearer code flow
- Easier to read and maintain

---

## Advanced Function Concepts

### First-Class Functions

First-class functions can be treated as data: assigned to variables, passed as arguments, and returned from other functions.

```javascript
// First-class function - storing in variable
function greet(name) {
  return function (message) {
    console.log(`Hello, ${name}! ${message}`);
  };
}

const greetJohn = greet("John");
greetJohn("Welcome to the platform!");
// Output: Hello, John! Welcome to the platform!
```

---

### Functions as Arguments (Callbacks)

Functions can be passed as arguments to other functions for execution.

```javascript
// Function can be passed as argument to another function
function temp_b(fnc) {
  fnc();
}

temp_b(function fnc2() {
  console.log("first class function");
});
// Output: first class function
```

**Common Use Cases**:

- Event handlers
- Array methods (`.map()`, `.filter()`, `.forEach()`)
- Asynchronous callbacks
- Higher-order functions

---

### Functions Returning Functions

A function can return another function, creating closures.

```javascript
// Function can be returned from another function
function abcd() {
  return function () {
    console.log("function returned from another function");
  };
}

var temp = abcd();
temp(); // Output: function returned from another function

// Or call directly
abcd()(); // Output: function returned from another function
```

**Benefits**:

- Creates closures
- Function factories
- Decorator patterns
- Partial application

---

### Higher-Order Functions

Higher-order functions take functions as arguments or return functions.

```javascript
// Higher order function
function higherOrderFunction(fnc, value) {
  return fnc(value);
}

function square(x) {
  return x * x;
}

console.log(higherOrderFunction(square, 5)); // Output: 25
```

**Common Higher-Order Functions**:

#### map() - Transform Elements

```javascript
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map((x) => x * x);
console.log(squared); // [1, 4, 9, 16, 25]
```

#### filter() - Filter Elements

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter((x) => x % 2 === 0);
console.log(evens); // [2, 4, 6]
```

#### forEach() - Iterate Elements

```javascript
const fruits = ["apple", "banana", "orange"];
fruits.forEach((fruit) => console.log(fruit));
// Output: apple, banana, orange
```

#### reduce() - Accumulate Values

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15
```

---

### Closures

A closure is a function that has access to variables from its parent scope, even after the parent function has executed.

```javascript
function makeMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15
```

**Key Points**:

- Inner function "remembers" outer scope variables
- Useful for data privacy
- Foundation for many JavaScript patterns

---

### Function Hoisting

Named functions are hoisted to the top of their scope, allowing them to be called before declaration.

```javascript
// Function can be called before declaration (hoisting)
greetUser("John"); // Output: Hello John!

function greetUser(name) {
  console.log(`Hello ${name}!`);
}
```

**Note**: Function expressions and arrow functions are NOT hoisted (only the variable declaration is hoisted as `undefined`).

---

### Common Function Patterns

#### Immediately Invoked Function Expression (IIFE)

```javascript
(function () {
  console.log("This runs immediately!");
})();
// Output: This runs immediately!

// With parameters
(function (name) {
  console.log(`Hello ${name}!`);
})("Alice");
// Output: Hello Alice!
```

**Use Cases**:

- Avoid global scope pollution
- Create private variables
- Module pattern

#### Function as Method

```javascript
const calculator = {
  value: 0,
  add: function (num) {
    this.value += num;
    return this;
  },
  subtract: function (num) {
    this.value -= num;
    return this;
  },
  result: function () {
    return this.value;
  },
};

console.log(calculator.add(5).subtract(2).result()); // Output: 3
```

#### Constructor Function

```javascript
function User(name, email) {
  this.name = name;
  this.email = email;
}

const user1 = new User("John", "john@example.com");
console.log(user1.name); // Output: John
```

---

### Pure vs Impure Functions

#### Pure Function (Recommended)

```javascript
// Pure function - same input always produces same output
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (predictable)
```

**Characteristics**:

- No side effects
- Deterministic (same input = same output)
- Easier to test and debug
- Cacheable results

#### Impure Function

```javascript
let total = 0;

// Impure function - depends on external state
function addToTotal(amount) {
  total += amount;
  return total;
}

console.log(addToTotal(5)); // 5
console.log(addToTotal(5)); // 10 (different output, same input!)
```

**Issues**:

- Depends on external state
- Hard to predict behavior
- Difficult to test
- Side effects (modifies external data)

**Best Practice**: Write pure functions whenever possible!

---

### Function Summary Table

| Type           | Syntax                   | Hoisted | When to Use                    |
| -------------- | ------------------------ | ------- | ------------------------------ |
| Named Function | `function name() {}`     | Yes     | Main logic, reusable functions |
| Anonymous      | `function() {}`          | No      | Callbacks, one-time use        |
| Arrow          | `() => {}`               | No      | Array methods, modern code     |
| Expression     | `var fn = function() {}` | No      | Conditional functions          |
| IIFE           | `(function() {})()`      | No      | Avoid global scope             |

---

## Control Flow Statements

Control flow statements allow you to make decisions and execute code conditionally.

### If Statement

```javascript
let age = 20;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}
// Output: You are an adult
```

**Syntax**:

```javascript
if (condition) {
  // Code executes if condition is true
} else if (anotherCondition) {
  // Code executes if anotherCondition is true
} else {
  // Code executes if all conditions are false
}
```

---

### Switch Statement

```javascript
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
// Output: Wednesday
```

**Characteristics**:

- Use `break` to prevent fall-through
- `default` case is optional
- Compares using strict equality (`===`)
- More readable than nested if-else for multiple cases

---

### Ternary Operator (Conditional Expression)

```javascript
let age = 25;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Output: Adult

// Nested ternary
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(grade); // Output: B
```

**Best Practice**: Avoid deeply nested ternaries. Use if-else for complex logic.

---

## Loops & Iteration

Loops execute code repeatedly until a condition is met.

### For Loop

```javascript
// Traditional for loop
for (let i = 0; i < 5; i++) {
  console.log(i); // Output: 0, 1, 2, 3, 4
}

// Loop through array
let fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Output: apple, banana, orange
```

**Components**:

- **Initialization**: `let i = 0` (setup counter)
- **Condition**: `i < 5` (test before iteration)
- **Increment**: `i++` (update after iteration)

---

### While Loop

```javascript
let count = 0;

while (count < 5) {
  console.log(count); // Output: 0, 1, 2, 3, 4
  count++;
}

// Do-while (executes at least once)
let num = 0;
do {
  console.log(num); // Output: 0
  num++;
} while (num < 0); // Condition is false, but runs once
```

---

### For...In Loop

```javascript
// Iterate over object properties
let person = {
  name: "John",
  age: 30,
  city: "New York",
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output: name: John, age: 30, city: New York

// For array (not recommended)
let arr = ["a", "b", "c"];
for (let index in arr) {
  console.log(index, arr[index]); // 0 a, 1 b, 2 c
}
```

**Use Case**: Iterating over object properties (keys)

---

### For...Of Loop

```javascript
// Iterate over array values (preferred over for...in)
let fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
  console.log(fruit);
}
// Output: apple, banana, orange

// Works with strings
let text = "Hello";
for (let char of text) {
  console.log(char);
}
// Output: H, e, l, l, o

// Works with Map and Set
let myMap = new Map([
  ["a", 1],
  ["b", 2],
]);
for (let [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}
// Output: a: 1, b: 2
```

**Benefits**:

- Cleaner syntax than for loops
- No need for index management
- Works with all iterables
- Better readability

---

### ForEach Method

```javascript
let numbers = [1, 2, 3, 4, 5];

numbers.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
});
// Output: Index 0: 1, Index 1: 2, etc.

// Object forEach alternative
let obj = { a: 1, b: 2, c: 3 };
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
```

---

### Break and Continue

```javascript
// Break - exit loop
for (let i = 0; i < 10; i++) {
  if (i === 5) break; // Exit when i equals 5
  console.log(i); // Output: 0, 1, 2, 3, 4
}

// Continue - skip iteration
for (let i = 0; i < 5; i++) {
  if (i === 2) continue; // Skip when i equals 2
  console.log(i); // Output: 0, 1, 3, 4
}
```

---

## Error Handling

Error handling ensures your program doesn't crash unexpectedly.

### Try-Catch Block

```javascript
try {
  // Code that might throw an error
  let result = JSON.parse("invalid json");
} catch (error) {
  // Handle the error
  console.log("Error caught:", error.message);
} finally {
  // Runs regardless of error
  console.log("Cleanup complete");
}
```

**Flow**:

1. Try block executes
2. If error occurs, catch block runs
3. Finally block always runs (optional)

---

### Throwing Errors

```javascript
function validateAge(age) {
  if (age < 0) {
    throw new Error("Age cannot be negative");
  }
  if (age < 18) {
    throw new Error("Must be 18 or older");
  }
  console.log("Valid age:", age);
}

try {
  validateAge(-5);
} catch (error) {
  console.log(error.message); // Output: Age cannot be negative
}
```

---

### Error Types

```javascript
// SyntaxError - Invalid syntax
// let x = ;  // SyntaxError

// TypeError - Wrong data type
let num = 5;
// num.toUpperCase();  // TypeError: num.toUpperCase is not a function

// ReferenceError - Undefined variable
// console.log(undefinedVar);  // ReferenceError

// RangeError - Invalid range
// new Array(-1);  // RangeError: Invalid array length

// Custom error
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

try {
  throw new ValidationError("Custom error message");
} catch (error) {
  console.log(error.name, error.message);
}
// Output: ValidationError Custom error message
```

---

## String Methods & Manipulation

Strings have many built-in methods for manipulation and inspection.

### 1. String Case Conversion Methods

#### toUpperCase()

```javascript
let text = "Hello World";

console.log(text.toUpperCase()); // Output: HELLO WORLD

// Practical use
let email = "john@example.com";
console.log(email.toUpperCase()); // JOHN@EXAMPLE.COM

// Case-insensitive comparison
let input = "hello";
console.log(input.toUpperCase() === "HELLO"); // true
```

**Use Cases**:

- Normalizing input for comparison
- Formatting text display
- Validation (case-insensitive matching)

---

#### toLowerCase()

```javascript
let text = "Hello World";

console.log(text.toLowerCase()); // Output: hello world

// Practical use
let userName = "JohnDoe";
console.log(userName.toLowerCase()); // johndoe

// API key normalization
let apiKey = "ABC123XYZ";
console.log(apiKey.toLowerCase()); // abc123xyz
```

**Use Cases**:

- Standardizing user input
- Creating URLs or filenames
- Case-insensitive searches

---

#### trim()

```javascript
let text = "   Hello World   ";

console.log(text.trim()); // Output: "Hello World"
console.log(text.length); // 19
console.log(text.trim().length); // 11

// Trim from start only
console.log(text.trimStart()); // Output: "Hello World   "
console.log(text.trimLeft()); // Same as trimStart()

// Trim from end only
console.log(text.trimEnd()); // Output: "   Hello World"
console.log(text.trimRight()); // Same as trimEnd()

// Remove all whitespace
let whitespace = "  H e l l o  ";
console.log(whitespace.trim()); // "H e l l o"
```

**Practical Example**:

```javascript
// Form input validation
function processUserInput(input) {
  let clean = input.trim();
  if (clean.length === 0) {
    return "Error: Empty input";
  }
  return clean;
}

console.log(processUserInput("   John   ")); // "John"
console.log(processUserInput("   ")); // "Error: Empty input"
```

---

### 2. String Search Methods

#### indexOf()

```javascript
let text = "Hello World";

console.log(text.indexOf("o")); // Output: 4
console.log(text.indexOf("World")); // Output: 6
console.log(text.indexOf("x")); // Output: -1 (not found)

// Search from specific position
console.log(text.indexOf("o", 5)); // Output: 7

// Case-sensitive
console.log(text.indexOf("hello")); // Output: -1
console.log(text.indexOf("Hello")); // Output: 0

// Find all occurrences
let str = "apple apple apple";
let index = 0;
let count = 0;
while ((index = str.indexOf("apple", index)) !== -1) {
  count++;
  index += 5; // Move past this match
}
console.log(count); // Output: 3
```

---

#### lastIndexOf()

```javascript
let text = "Hello World";

console.log(text.lastIndexOf("o")); // Output: 7 (last 'o')
console.log(text.lastIndexOf("Hello")); // Output: 0
console.log(text.lastIndexOf("x")); // Output: -1

// Last occurrence before position
console.log(text.lastIndexOf("o", 6)); // Output: 4

// Get last word
let sentence = "The quick brown fox";
let lastSpace = sentence.lastIndexOf(" ");
console.log(sentence.substring(lastSpace + 1)); // Output: fox
```

---

#### includes()

```javascript
let text = "Hello World";

console.log(text.includes("World")); // Output: true
console.log(text.includes("world")); // Output: false (case-sensitive)
console.log(text.includes("o W")); // Output: true

// Search from position
console.log(text.includes("World", 6)); // Output: true
console.log(text.includes("World", 7)); // Output: false

// Check multiple conditions
let email = "john@example.com";
console.log(email.includes("@") && email.includes(".")); // true (valid format)

// Array-like check
let message = "Welcome to JavaScript";
let keywords = ["JavaScript", "Python", "Java"];
let found = keywords.some((keyword) => message.includes(keyword));
console.log(found); // Output: true
```

---

#### startsWith()

```javascript
let text = "Hello World";

console.log(text.startsWith("Hello")); // Output: true
console.log(text.startsWith("hello")); // Output: false (case-sensitive)
console.log(text.startsWith("World")); // Output: false

// Start position
console.log(text.startsWith("World", 6)); // Output: true

// URL validation
let url = "https://example.com";
console.log(url.startsWith("https://")); // Output: true

// Protocol check
function isSecureUrl(url) {
  return url.startsWith("https://");
}

console.log(isSecureUrl("https://bank.com")); // true
console.log(isSecureUrl("http://bank.com")); // false
```

---

#### endsWith()

```javascript
let text = "Hello World";

console.log(text.endsWith("World")); // Output: true
console.log(text.endsWith("world")); // Output: false (case-sensitive)
console.log(text.endsWith("Hello")); // Output: false

// Check length
console.log(text.endsWith("World", 11)); // Output: true (check first 11 chars)

// File type validation
function isImageFile(filename) {
  const imageExtensions = [".jpg", ".jpeg", ".png", ".gif"];
  return imageExtensions.some((ext) => filename.toLowerCase().endsWith(ext));
}

console.log(isImageFile("photo.jpg")); // true
console.log(isImageFile("document.pdf")); // false
```

---

### 3. String Extraction Methods

#### slice()

```javascript
let text = "Hello World";

// Extract substring (start to end)
console.log(text.slice(0, 5)); // Output: Hello
console.log(text.slice(6)); // Output: World

// Negative indices (from end)
console.log(text.slice(-5)); // Output: World (last 5 chars)
console.log(text.slice(0, -6)); // Output: Hello

// Swap first and last word
let sentence = "Hello World";
let firstSpace = sentence.indexOf(" ");
let lastWord = sentence.slice(firstSpace + 1);
let firstWord = sentence.slice(0, firstSpace);
console.log(`${lastWord} ${firstWord}`); // Output: World Hello
```

**Use Cases**:

- Extract substrings
- Remove trailing characters
- Parse strings

---

#### substring()

```javascript
let text = "Hello World";

console.log(text.substring(0, 5)); // Output: Hello
console.log(text.substring(6)); // Output: World

// Negative numbers treated as 0
console.log(text.substring(-5)); // Output: Hello World (same as substring(0))

// Arguments reversed if first > second
console.log(text.substring(5, 0)); // Output: Hello (same as substring(0, 5))

// Difference from slice
console.log("Hello".slice(-3)); // Output: llo
console.log("Hello".substring(-3)); // Output: Hello (treats -3 as 0)
```

**slice() vs substring()**:

- `slice()` accepts negative indices
- `substring()` treats negatives as 0
- `slice()` is generally preferred

---

#### charAt()

```javascript
let text = "Hello World";

console.log(text.charAt(0)); // Output: H
console.log(text.charAt(6)); // Output: W
console.log(text.charAt(100)); // Output: "" (empty string)

// First character
console.log(text.charAt(0).toUpperCase() + text.slice(1)); // "Hello World"

// Capitalize each word
function capitalizeWords(text) {
  return text
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

console.log(capitalizeWords("hello world javascript"));
// Output: Hello World Javascript
```

---

#### charCodeAt()

```javascript
let text = "Hello";

console.log(text.charCodeAt(0)); // Output: 72 (H)
console.log(text.charCodeAt(1)); // Output: 101 (e)

// Check if uppercase
function isUpperCase(char) {
  return char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90;
}

console.log(isUpperCase("A")); // true
console.log(isUpperCase("a")); // false

// Convert character code to character
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // "Hello"

// Reverse encode
let str = "Hello";
let codes = [];
for (let i = 0; i < str.length; i++) {
  codes.push(str.charCodeAt(i));
}
console.log(codes); // [72, 101, 108, 108, 111]
```

---

### 4. String Replacement & Splitting Methods

#### split()

```javascript
let text = "Hello World";

// Split by space
console.log(text.split(" ")); // Output: ["Hello", "World"]

// Split into characters
console.log(text.split("")); // Output: ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]

// Split with limit
console.log(text.split(" ", 1)); // Output: ["Hello"]

// Split by regex
console.log("a1b2c3".split(/\d/)); // Output: ["a", "b", "c", ""]

// CSV parsing
let csv = "John,30,john@example.com";
let [name, age, email] = csv.split(",");
console.log(name, age, email); // John 30 john@example.com

// Multiple delimiters
let text2 = "apple; orange, banana";
let fruits = text2.split(/[;,]/); // Split by ; or ,
console.log(fruits); // ["apple", " orange", " banana"]
```

---

#### replace()

```javascript
let text = "Hello World World";

// Replace first occurrence
console.log(text.replace("World", "JavaScript"));
// Output: Hello JavaScript World

// Replace all (use regex with global flag)
console.log(text.replace(/World/g, "JavaScript"));
// Output: Hello JavaScript JavaScript

// Case-insensitive replace
console.log(text.replace(/world/i, "JavaScript"));
// Output: Hello JavaScript World

// Replace with function
let result = text.replace(/\w+/g, (word) => word.toUpperCase());
console.log(result); // HELLO WORLD WORLD

// Template replacement
function replaceTemplate(template, data) {
  return template.replace(/{(\w+)}/g, (match, key) => data[key] || match);
}

let template = "Hello {name}, you are {age} years old";
let data = { name: "John", age: 30 };
console.log(replaceTemplate(template, data));
// Output: Hello John, you are 30 years old
```

---

#### repeat()

```javascript
let text = "Hello";

console.log(text.repeat(2)); // Output: HelloHello
console.log(text.repeat(3)); // Output: HelloHelloHello
console.log("*".repeat(10)); // Output: **********

// Create pattern
console.log("=".repeat(20)); // Output: ====================

// Padding alternative
let num = "5";
console.log(num.repeat(3)); // Output: 555

// Generate repetitive content
let dashes = "-".repeat(50);
console.log(`${dashes}`); // Long line of dashes
```

---

### 5. String Padding Methods

#### padStart()

```javascript
let text = "5";

console.log(text.padStart(3, "0")); // Output: 005
console.log(text.padStart(5, "*")); // Output: ****5

// Numeric formatting
let price = "19.99";
console.log("$" + price.padStart(8, " ")); // Output: $   19.99

// Create column alignment
let numbers = [5, 50, 500];
numbers.forEach((num) => {
  console.log(String(num).padStart(4, " "));
});
// Output:
//    5
//   50
//  500

// Credit card masking
function maskCardNumber(card) {
  let last4 = card.slice(-4);
  return "*".repeat(12) + last4;
}

console.log(maskCardNumber("1234567890123456")); // Output: ****0123456
```

---

#### padEnd()

```javascript
let text = "5";

console.log(text.padEnd(3, "0")); // Output: 500
console.log(text.padEnd(5, "*")); // Output: 5****

// Create fixed-width columns
let data = ["Name", "Age", "City"];
data.forEach((item) => {
  console.log(item.padEnd(15, ".") + " |");
});
// Output:
// Name........... |
// Age............ |
// City........... |

// Message formatting
function formatMessage(msg, width = 20) {
  return msg.padEnd(width, " ") + "|";
}

console.log(formatMessage("Hello")); // "Hello               |"
console.log(formatMessage("JavaScript", 15)); // "JavaScript     |"
```

---

### 6. Advanced String Examples

#### String Template Processing

```javascript
// Template with replacements
let template = "Welcome {user}, you have {count} messages";

function interpolate(template, values) {
  return template.replace(/{(\w+)}/g, (match, key) => {
    return values[key] !== undefined ? values[key] : match;
  });
}

let result = interpolate(template, { user: "John", count: 5 });
console.log(result); // "Welcome John, you have 5 messages"
```

---

#### Email Validation with String Methods

```javascript
function validateEmail(email) {
  // Convert to lowercase for consistency
  email = email.toLowerCase().trim();

  // Check basic format
  if (!email.includes("@")) return false;
  if (!email.includes(".")) return false;

  let [local, domain] = email.split("@");

  // Validate parts
  if (local.length === 0 || domain.length === 0) return false;
  if (!domain.includes(".")) return false;

  let [name, tld] = domain.split(".");
  if (name.length === 0 || tld.length < 2) return false;

  return true;
}

console.log(validateEmail("john@example.com")); // true
console.log(validateEmail("   invalid.email   ")); // false
console.log(validateEmail("no-at-sign.com")); // false
```

---

## Array Methods & Operations

Arrays have powerful methods for manipulation, filtering, and transformation.

### 1. Array Modification Methods (Mutating)

#### push()

```javascript
let arr = [1, 2, 3];

// Add single element
arr.push(4);
console.log(arr); // Output: [1, 2, 3, 4]

// Add multiple elements
arr.push(5, 6, 7);
console.log(arr); // Output: [1, 2, 3, 4, 5, 6, 7]

// Returns new length
let newLength = arr.push(8);
console.log(newLength); // Output: 8

// Practical example - building a list
let items = [];
items.push("apple");
items.push("banana");
items.push("orange");
console.log(items); // ["apple", "banana", "orange"]
```

---

#### pop()

```javascript
let arr = [1, 2, 3, 4, 5];

// Remove last element
let removed = arr.pop();
console.log(removed); // Output: 5
console.log(arr); // Output: [1, 2, 3, 4]

// Pop empty array returns undefined
let empty = [];
console.log(empty.pop()); // Output: undefined

// Implement stack using array
class Stack {
  constructor() {
    this.items = [];
  }
  push(x) {
    this.items.push(x);
  }
  pop() {
    return this.items.pop();
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2
```

---

#### unshift()

```javascript
let arr = [2, 3, 4];

// Add element at start
arr.unshift(1);
console.log(arr); // Output: [1, 2, 3, 4]

// Add multiple elements
arr.unshift(-2, -1);
console.log(arr); // Output: [-2, -1, 1, 2, 3, 4]

// Returns new length
let newLength = arr.unshift(0);
console.log(newLength); // Output: 7

// Prepend to history
let history = ["action2"];
history.unshift("action1");
console.log(history); // ["action1", "action2"]
```

---

#### shift()

```javascript
let arr = [1, 2, 3, 4, 5];

// Remove first element
let removed = arr.shift();
console.log(removed); // Output: 1
console.log(arr); // Output: [2, 3, 4, 5]

// Process queue
let queue = ["task1", "task2", "task3"];
while (queue.length > 0) {
  let task = queue.shift();
  console.log("Processing:", task);
}
// Output: Processing: task1, Processing: task2, Processing: task3
```

---

#### splice()

```javascript
let arr = [1, 2, 3, 4, 5];

// Remove elements (delete 2 elements starting at index 2)
let removed = arr.splice(2, 2);
console.log(removed); // Output: [3, 4]
console.log(arr); // Output: [1, 2, 5]

// Insert elements (insert at index 2, remove 0 elements)
let arr2 = [1, 2, 5];
arr2.splice(2, 0, 3, 4);
console.log(arr2); // Output: [1, 2, 3, 4, 5]

// Replace elements
let arr3 = [1, 2, 3, 4, 5];
arr3.splice(1, 2, 20, 30); // Replace indices 1,2 with 20,30
console.log(arr3); // Output: [1, 20, 30, 4, 5]

// Remove all elements from index 2 onwards
let arr4 = [1, 2, 3, 4, 5];
arr4.splice(2);
console.log(arr4); // Output: [1, 2]
```

---

### 2. Array Transformation Methods (Non-Mutating)

#### map()

```javascript
let arr = [1, 2, 3, 4, 5];

// Transform each element
let doubled = arr.map((x) => x * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// Extract property from objects
let users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 35 },
];

let names = users.map((user) => user.name);
console.log(names); // Output: ["John", "Jane", "Bob"]

// Convert to strings
let numbers = [1, 2, 3];
let strings = numbers.map((n) => String(n));
console.log(strings); // Output: ["1", "2", "3"]

// With index and array parameters
let arr2 = [10, 20, 30];
let indexed = arr2.map((value, index) => `${index}: ${value}`);
console.log(indexed);
// Output: ["0: 10", "1: 20", "2: 30"]
```

---

#### filter()

```javascript
let arr = [1, 2, 3, 4, 5, 6];

// Keep even numbers
let evens = arr.filter((x) => x % 2 === 0);
console.log(evens); // Output: [2, 4, 6]

// Keep numbers greater than 3
let greater = arr.filter((x) => x > 3);
console.log(greater); // Output: [4, 5, 6]

// Filter objects
let users = [
  { name: "John", age: 30, active: true },
  { name: "Jane", age: 25, active: false },
  { name: "Bob", age: 35, active: true },
];

let activeUsers = users.filter((user) => user.active);
console.log(activeUsers);
// Output: [{ name: "John", age: 30, active: true }, { name: "Bob", age: 35, active: true }]

// Remove duplicates
let arr2 = [1, 2, 2, 3, 3, 3, 4];
let unique = arr2.filter(
  (value, index, array) => array.indexOf(value) === index,
);
console.log(unique); // Output: [1, 2, 3, 4]
```

---

#### reduce()

```javascript
let arr = [1, 2, 3, 4, 5];

// Sum all elements
let sum = arr.reduce((acc, x) => acc + x, 0);
console.log(sum); // Output: 15

// Product of all elements
let product = arr.reduce((acc, x) => acc * x, 1);
console.log(product); // Output: 120

// Count occurrences
let items = ["apple", "banana", "apple", "orange", "banana", "apple"];
let count = items.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});
console.log(count);
// Output: { apple: 3, banana: 2, orange: 1 }

// Flatten nested array
let nested = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let flattened = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]

// Transform array of objects to object
let records = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];
let keyed = records.reduce((acc, record) => {
  acc[record.id] = record.name;
  return acc;
}, {});
console.log(keyed); // { 1: "John", 2: "Jane" }
```

---

#### forEach()

```javascript
let arr = [1, 2, 3, 4, 5];

// Simple iteration
arr.forEach((x) => console.log(x));
// Output: 1, 2, 3, 4, 5

// With index and array
arr.forEach((value, index, array) => {
  console.log(`${index}: ${value}`);
});
// Output: 0: 1, 1: 2, 2: 3, 3: 4, 4: 5

// Iterate objects in array
let users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
];

users.forEach((user) => {
  console.log(`${user.name} is ${user.age} years old`);
});
// Output: John is 30 years old, Jane is 25 years old

// Note: forEach doesn't return anything
let result = [1, 2, 3].forEach((x) => x * 2);
console.log(result); // Output: undefined
```

---

#### find()

```javascript
let arr = [1, 2, 3, 4, 5];

// Find first element greater than 3
let found = arr.find((x) => x > 3);
console.log(found); // Output: 4

// Find in objects
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" },
];

let user = users.find((u) => u.id === 2);
console.log(user); // Output: { id: 2, name: "Jane" }

// Find returns undefined if not found
let notFound = arr.find((x) => x > 100);
console.log(notFound); // Output: undefined

// Use with condition
function findUser(users, predicate) {
  return users.find(predicate);
}

let activeUser = findUser(users, (u) => u.name === "Bob");
console.log(activeUser); // { id: 3, name: "Bob" }
```

---

### 3. Array Search & Index Methods

#### indexOf()

```javascript
let arr = [1, 2, 3, 4, 5, 3];

// Find index
console.log(arr.indexOf(3)); // Output: 2
console.log(arr.indexOf(5)); // Output: 4
console.log(arr.indexOf(10)); // Output: -1

// Find from position
console.log(arr.indexOf(3, 3)); // Output: 5

// Find string in array
let fruits = ["apple", "banana", "orange"];
console.log(fruits.indexOf("banana")); // Output: 1

// Check if exists
if (fruits.indexOf("apple") !== -1) {
  console.log("Apple found!");
}
```

---

#### includes()

```javascript
let arr = [1, 2, 3, 4, 5];

console.log(arr.includes(3)); // Output: true
console.log(arr.includes(10)); // Output: false

// From position
console.log(arr.includes(3, 4)); // Output: false (search from index 4)

// Check multiple
let arr2 = ["red", "green", "blue"];
console.log(arr2.includes("red")); // true
console.log(arr2.includes("yellow")); // false

// More readable than indexOf
// ✅ Prefer: arr.includes(5)
// ❌ Avoid: arr.indexOf(5) !== -1
```

---

### 4. Array Sorting & Reversing Methods

#### sort()

```javascript
let arr = [3, 1, 4, 1, 5, 9];

// Default sort (alphabetical - problematic for numbers)
let sorted = arr.sort();
console.log(sorted); // Output: [1, 1, 3, 4, 5, 9]

// Numeric sort (ascending)
let numbers = [30, 5, 20, 100];
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [5, 20, 30, 100]

// Numeric sort (descending)
numbers.sort((a, b) => b - a);
console.log(numbers); // Output: [100, 30, 20, 5]

// Sort strings
let words = ["banana", "apple", "cherry"];
words.sort();
console.log(words); // Output: ["apple", "banana", "cherry"]

// Sort objects
let users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 35 },
];

users.sort((a, b) => a.age - b.age);
console.log(users);
// Output sorted by age: [{ name: "Jane", age: 25 }, { name: "John", age: 30 }, { name: "Bob", age: 35 }]

// Case-insensitive sort
let names = ["Bob", "alice", "Charlie"];
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(names); // ["alice", "Bob", "Charlie"]
```

---

#### reverse()

```javascript
let arr = [1, 2, 3, 4, 5];

arr.reverse();
console.log(arr); // Output: [5, 4, 3, 2, 1]

// String reversal
let str = "hello";
let reversed = str.split("").reverse().join("");
console.log(reversed); // Output: olleh

// Check palindrome
function isPalindrome(str) {
  let clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversed = clean.split("").reverse().join("");
  return clean === reversed;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("hello")); // false
```

---

### 5. Array Combining & Flattening Methods

#### concat()

```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Combine arrays
let combined = arr1.concat(arr2);
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

// Original arrays unchanged
console.log(arr1); // [1, 2, 3]

// Combine multiple arrays
let arr3 = [7, 8, 9];
let result = arr1.concat(arr2, arr3);
console.log(result); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Add single values
let merged = arr1.concat(99, 100);
console.log(merged); // [1, 2, 3, 99, 100]

// Using spread operator (modern alternative)
let combined2 = [...arr1, ...arr2];
console.log(combined2); // [1, 2, 3, 4, 5, 6]
```

---

#### join()

```javascript
let arr = [1, 2, 3, 4, 5];

// Default comma separator
console.log(arr.join()); // Output: 1,2,3,4,5

// Custom separator
console.log(arr.join("-")); // Output: 1-2-3-4-5
console.log(arr.join(", ")); // Output: 1, 2, 3, 4, 5

// Create file paths
let path = ["home", "user", "documents", "file.txt"];
console.log(path.join("/")); // Output: home/user/documents/file.txt

// Generate CSV
let data = [
  ["Name", "Age", "City"],
  ["John", "30", "NYC"],
  ["Jane", "25", "LA"],
];

let csv = data.map((row) => row.join(",")).join("\n");
console.log(csv);
// Output:
// Name,Age,City
// John,30,NYC
// Jane,25,LA
```

---

#### slice()

```javascript
let arr = [1, 2, 3, 4, 5];

// Extract portion
console.log(arr.slice(0, 3)); // Output: [1, 2, 3]
console.log(arr.slice(2)); // Output: [3, 4, 5]

// Negative indices
console.log(arr.slice(-2)); // Output: [4, 5]
console.log(arr.slice(0, -1)); // Output: [1, 2, 3, 4]

// Copy array
let copy = arr.slice();
copy[0] = 99;
console.log(arr); // [1, 2, 3, 4, 5] (original unchanged)
console.log(copy); // [99, 2, 3, 4, 5]

// Get last n elements
function getLastN(arr, n) {
  return arr.slice(-n);
}

console.log(getLastN([1, 2, 3, 4, 5], 2)); // [4, 5]
```

---

#### flat()

```javascript
// Simple flatten
let nested1 = [1, [2, 3], [4, [5, 6]]];
console.log(nested1.flat()); // Output: [1, 2, 3, 4, [5, 6]]

// Flatten deeply (depth 2)
console.log(nested1.flat(2)); // Output: [1, 2, 3, 4, 5, 6]

// Flatten all levels
console.log(nested1.flat(Infinity)); // Output: [1, 2, 3, 4, 5, 6]

// Remove holes in array
let sparse = [1, , 3, , 5];
console.log(sparse.flat()); // Output: [1, 3, 5]

// Flatten and map
let arr = [1, 2, 3];
let flatMapped = arr.flatMap((x) => [x, x * 2]);
console.log(flatMapped); // Output: [1, 2, 2, 4, 3, 6]
```

---

### 6. Array Checking Methods

#### every()

```javascript
let arr = [1, 2, 3, 4, 5];

// Check all positive
console.log(arr.every((x) => x > 0)); // Output: true

// Check all greater than 3
console.log(arr.every((x) => x > 3)); // Output: false

// Check array properties
let numbers = [2, 4, 6, 8];
console.log(numbers.every((x) => x % 2 === 0)); // true (all even)

// Validate object properties
let users = [
  { name: "John", active: true },
  { name: "Jane", active: true },
  { name: "Bob", active: false },
];

console.log(users.every((u) => u.active)); // false
```

---

#### some()

```javascript
let arr = [1, 2, 3, 4, 5];

// Check if any greater than 3
console.log(arr.some((x) => x > 3)); // Output: true

// Check if any is negative
console.log(arr.some((x) => x < 0)); // Output: false

// Find if specific item exists
let fruits = ["apple", "banana", "orange"];
console.log(fruits.some((f) => f === "banana")); // true

// Validate user permissions
let users = [
  { name: "John", isAdmin: false },
  { name: "Jane", isAdmin: true },
  { name: "Bob", isAdmin: false },
];

console.log(users.some((u) => u.isAdmin)); // true (at least one admin)
```

---

## Object Manipulation

Objects are fundamental to JavaScript. Learn how to work with them effectively.

### 1. Object Creation Methods

#### Object Literal

```javascript
// Basic object
let person = {
  name: "John",
  age: 30,
  email: "john@example.com",
};

console.log(person); // { name: 'John', age: 30, email: 'john@example.com' }

// Nested object
let user = {
  name: "Alice",
  address: {
    street: "123 Main St",
    city: "NYC",
    zip: "10001",
  },
  skills: ["JavaScript", "Python", "React"],
};

console.log(user.address.city); // NYC
```

---

#### Constructor Function

```javascript
// Constructor function
function Person(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
  this.greet = function () {
    return `Hello, I'm ${this.name}`;
  };
}

let person1 = new Person("John", 30, "john@example.com");
let person2 = new Person("Jane", 25, "jane@example.com");

console.log(person1.greet()); // "Hello, I'm John"
console.log(person2.greet()); // "Hello, I'm Jane"
```

---

#### Object.create()

```javascript
// Create object with prototype
let proto = {
  greet: function () {
    return `Hello, ${this.name}`;
  },
};

let person = Object.create(proto);
person.name = "Bob";
console.log(person.greet()); // "Hello, Bob"

// Create object with null prototype
let noProto = Object.create(null);
noProto.x = 5;
console.log(noProto.toString); // undefined (no inherited methods)
```

---

#### Factory Function

```javascript
// Factory function (returns object)
function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      return `Hi, I'm ${this.name}`;
    },
  };
}

let person1 = createPerson("John", 30);
let person2 = createPerson("Jane", 25);

console.log(person1.greet()); // "Hi, I'm John"
```

---

### 2. Object Properties & Access

#### Dot Notation vs Bracket Notation

```javascript
let person = {
  name: "John",
  age: 30,
  "email-address": "john@example.com",
};

// Dot notation
console.log(person.name); // John
console.log(person.age); // 30

// Bracket notation (required for special names)
console.log(person["email-address"]); // john@example.com

// Dynamic property access
let prop = "name";
console.log(person[prop]); // John

// Add properties dynamically
person["phone"] = "123-456-7890";
person.address = "123 Main St";
```

---

#### hasOwnProperty()

```javascript
let person = { name: "John", age: 30 };

// Check if property exists
console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("email")); // false

// Check inherited properties
let proto = { inherited: true };
let obj = Object.create(proto);
obj.own = true;

console.log(obj.hasOwnProperty("own")); // true
console.log(obj.hasOwnProperty("inherited")); // false (inherited, not own)

// Get only own properties
let person2 = { name: "Alice", age: 25 };
for (let key in person2) {
  if (person2.hasOwnProperty(key)) {
    console.log(`${key}: ${person2[key]}`);
  }
}
```

---

#### in Operator

```javascript
let person = { name: "John", age: 30 };
let proto = { inherited: true };
let obj = Object.create(proto);
obj.own = true;

// Check own and inherited properties
console.log("own" in obj); // true
console.log("inherited" in obj); // true (checks prototype chain)
console.log("nonexistent" in obj); // false

// Difference from hasOwnProperty
console.log(obj.hasOwnProperty("own")); // true
console.log(obj.hasOwnProperty("inherited")); // false
console.log("inherited" in obj); // true
```

---

#### Delete Property

```javascript
let person = { name: "John", age: 30, email: "john@example.com" };

// Delete property
delete person.email;
console.log(person); // { name: 'John', age: 30 }

// Delete returns true if successful
console.log(delete person.name); // true
console.log(person.name); // undefined

// Cannot delete properties from frozen objects
let frozen = { x: 1 };
Object.freeze(frozen);
console.log(delete frozen.x); // false (in strict mode: error)
```

---

### 3. Object.keys() - Get All Keys

```javascript
let person = { name: "John", age: 30, email: "john@example.com" };

// Get all property keys
let keys = Object.keys(person);
console.log(keys); // Output: ["name", "age", "email"]

// Iterate over keys
Object.keys(person).forEach((key) => {
  console.log(`${key}: ${person[key]}`);
});
// Output:
// name: John
// age: 30
// email: john@example.com

// Count properties
console.log(Object.keys(person).length); // 3

// Check if object is empty
let empty = {};
console.log(Object.keys(empty).length === 0); // true

// Only own properties (not inherited)
let obj = { own: 1 };
Object.setPrototypeOf(obj, { inherited: 2 });
console.log(Object.keys(obj)); // ["own"]
```

---

### 4. Object.values() - Get All Values

```javascript
let person = { name: "John", age: 30, email: "john@example.com" };

// Get all property values
let values = Object.values(person);
console.log(values); // Output: ["John", 30, "john@example.com"]

// Sum all numeric values
let scores = { math: 85, english: 92, science: 88 };
let total = Object.values(scores).reduce((a, b) => a + b, 0);
console.log(total); // 265

// Get average
let average = total / Object.values(scores).length;
console.log(average); // 88.33

// Type checking
let data = { name: "John", age: 30, active: true };
let hasStrings = Object.values(data).some((v) => typeof v === "string");
console.log(hasStrings); // true
```

---

### 5. Object.entries() - Get Key-Value Pairs

```javascript
let person = { name: "John", age: 30, email: "john@example.com" };

// Get all key-value pairs
let entries = Object.entries(person);
console.log(entries);
// Output: [["name", "John"], ["age", 30], ["email", "john@example.com"]]

// Iterate over entries
Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
// Output:
// name: John
// age: 30
// email: john@example.com

// Convert to Map
let personMap = new Map(Object.entries(person));
console.log(personMap.get("name")); // "John"

// Convert to query string
function objectToQueryString(obj) {
  return Object.entries(obj)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
}

let query = { name: "John", age: 30 };
console.log(objectToQueryString(query)); // "name=John&age=30"
```

---

### 6. Object.assign() - Merge Objects

```javascript
// Copy object
let source = { name: "John", age: 30 };
let copy = Object.assign({}, source);
console.log(copy); // { name: 'John', age: 30 }

// Modify copy doesn't affect original
copy.name = "Jane";
console.log(source.name); // John (unchanged)

// Merge multiple objects
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let obj3 = { c: 5, d: 6 };

let merged = Object.assign({}, obj1, obj2, obj3);
console.log(merged); // { a: 1, b: 3, c: 5, d: 6 }

// Later objects override earlier ones
let target = { x: 1 };
Object.assign(target, { x: 2 }, { x: 3 });
console.log(target.x); // 3

// Practical use: Update object with defaults
let defaults = { theme: "light", size: "medium" };
let userSettings = { theme: "dark" };
let final = Object.assign({}, defaults, userSettings);
console.log(final); // { theme: 'dark', size: 'medium' }

// Note: Shallow copy
let deep = { user: { name: "John" } };
let shallowCopy = Object.assign({}, deep);
shallowCopy.user.name = "Jane";
console.log(deep.user.name); // "Jane" (original changed!)
```

---

### 7. Object.freeze() - Prevent Modifications

```javascript
let person = { name: "John", age: 30 };

// Freeze object
Object.freeze(person);

// Attempt modifications fail silently (or throw error in strict mode)
person.name = "Jane"; // Fails
person.age = 31; // Fails
delete person.name; // Fails

console.log(person); // { name: 'John', age: 30 } (unchanged)

// Check if frozen
console.log(Object.isFrozen(person)); // true

// Freeze nested objects (shallow freeze)
let user = {
  name: "John",
  address: { city: "NYC" },
};

Object.freeze(user);
user.address.city = "LA"; // Works! (nested object not frozen)
console.log(user.address.city); // "LA"

// Deep freeze
function deepFreeze(obj) {
  Object.freeze(obj);
  Object.values(obj).forEach((value) => {
    if (typeof value === "object") {
      deepFreeze(value);
    }
  });
  return obj;
}

let deepUser = {
  name: "John",
  address: { city: "NYC" },
};

deepFreeze(deepUser);
// deepUser.address.city = "LA"; // Now fails
```

---

### 8. Object.seal() - Prevent Add/Delete, Allow Modify

```javascript
let person = { name: "John", age: 30 };

// Seal object
Object.seal(person);

// Modify existing properties (allowed)
person.name = "Jane";
person.age = 31;
console.log(person); // { name: 'Jane', age: 31 }

// Add new properties (fails)
person.email = "john@example.com"; // Fails
console.log(person.email); // undefined

// Delete properties (fails)
delete person.age; // Fails
console.log(person.age); // 31 (unchanged)

// Check if sealed
console.log(Object.isSealed(person)); // true

// Difference from freeze
let frozen = Object.freeze({ x: 1 });
let sealed = Object.seal({ x: 1 });

frozen.x = 2; // Fails
console.log(frozen.x); // 1

sealed.x = 2; // Succeeds
console.log(sealed.x); // 2
```

---

### 9. Object Iteration with for...in

```javascript
// Basic iteration
let person = { name: "John", age: 30, city: "NYC" };

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output:
// name: John
// age: 30
// city: NYC

// Only own properties
let proto = { inherited: true };
let obj = Object.create(proto);
obj.own = true;

for (let key in obj) {
  console.log(key); // "own", "inherited"
}

// To get only own properties:
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key); // "own"
  }
}

// Skip certain properties
let user = { name: "John", _private: "secret", age: 30 };
for (let key in user) {
  if (!key.startsWith("_")) {
    console.log(`${key}: ${user[key]}`);
  }
}
// Output:
// name: John
// age: 30
```

---

### 10. Object Destructuring

```javascript
// Basic destructuring
let person = { name: "John", age: 30, city: "NYC" };
const { name, age } = person;
console.log(name, age); // John, 30

// Rename properties
const { name: personName, age: personAge } = person;
console.log(personName, personAge); // John, 30

// Default values
const { phone = "N/A", email = "not provided" } = person;
console.log(phone, email); // N/A, not provided

// Nested destructuring
let user = {
  name: "John",
  address: {
    street: "123 Main St",
    city: "NYC",
  },
};

const {
  address: { city, street },
} = user;
console.log(city, street); // NYC, 123 Main St

// Rest properties
let { name: n, ...rest } = person;
console.log(n); // John
console.log(rest); // { age: 30, city: 'NYC' }

// In function parameters
function printUser({ name, age }) {
  console.log(`${name} is ${age} years old`);
}

printUser(person); // John is 30 years old
```

---

### 11. Object Comparison & Merging Patterns

#### Deep Copy

```javascript
// Shallow copy (doesn't copy nested objects)
let original = { name: "John", address: { city: "NYC" } };
let shallow = { ...original };
shallow.address.city = "LA";
console.log(original.address.city); // "LA" (changed!)

// Deep copy using JSON
let deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.address.city = "Boston";
console.log(original.address.city); // "NYC" (unchanged!)

// Deep copy function
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (obj instanceof Date) return new Date(obj.getTime());
  if (obj instanceof Array) return obj.map((item) => deepCopy(item));

  let copy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}
```

---

#### Object Comparison

```javascript
// Simple equality (reference comparison)
let obj1 = { x: 1 };
let obj2 = { x: 1 };
console.log(obj1 === obj2); // false (different references)

// Deep comparison
function deepEqual(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!keys2.includes(key)) return false;
    if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
      if (!deepEqual(obj1[key], obj2[key])) return false;
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

let user1 = { name: "John", address: { city: "NYC" } };
let user2 = { name: "John", address: { city: "NYC" } };
console.log(deepEqual(user1, user2)); // true
```

---

## Asynchronous JavaScript

Asynchronous code executes without blocking the main thread.

### Callbacks

```javascript
function fetchData(callback) {
  setTimeout(() => {
    let data = { id: 1, name: "John" };
    callback(data);
  }, 1000);
}

fetchData((data) => {
  console.log("Data received:", data);
});
// Output (after 1 second): Data received: { id: 1, name: 'John' }
```

**Issue**: Callback Hell (nested callbacks)

---

### Promises

```javascript
// Create a promise
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 1000);
});

// Consume a promise
promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("Done"));
// Output: Success!, Done

// Promise states
// - Pending: Initial state
// - Fulfilled: Operation successful
// - Rejected: Operation failed
```

---

### Async/Await

```javascript
// Async function returns a promise
async function fetchUser() {
  return { id: 1, name: "John" };
}

// Await pauses execution until promise resolves
async function main() {
  try {
    let user = await fetchUser();
    console.log(user); // { id: 1, name: 'John' }
  } catch (error) {
    console.log("Error:", error);
  }
}

main();
```

**Benefits**:

- More readable than promise chains
- Looks like synchronous code
- Better error handling

---

### Promise Methods

```javascript
// Promise.all - wait for all promises
Promise.all([promise1, promise2, promise3])
  .then((results) => console.log(results))
  .catch((error) => console.log(error));

// Promise.race - wait for first promise
Promise.race([promise1, promise2]).then((result) => console.log(result));

// Promise.allSettled - wait for all (regardless of outcome)
Promise.allSettled([promise1, promise2]).then((results) =>
  console.log(results),
);

// Promise.any - wait for first successful promise
Promise.any([promise1, promise2]).then((result) => console.log(result));
```

---

## Best Practices & Performance

### Code Quality

#### Use `use strict`

```javascript
"use strict";

// Prevents undeclared variables
x = 3.14; // Error in strict mode

// Makes eval safer
function myFunction() {
  x = 3.14; // Error
}
```

---

#### Comment Your Code

```javascript
// Single-line comment

/*
 * Multi-line comment
 * Useful for documentation
 */

/**
 * JSDoc comment (function documentation)
 * @param {number} x - First number
 * @param {number} y - Second number
 * @returns {number} Sum of x and y
 */
function add(x, y) {
  return x + y;
}
```

---

### Performance Tips

#### 1. Avoid Global Variables

```javascript
// ❌ Bad
var globalCounter = 0;

function increment() {
  globalCounter++;
}

// ✅ Good
function createCounter() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}
```

---

#### 2. Use Const by Default

```javascript
// ✅ Good practice
const user = { name: "John" };
let counter = 0;
var oldStyle = 1; // Avoid in modern JS
```

---

#### 3. Efficient Array Operations

```javascript
// ❌ Slow - searches entire array each time
for (let i = 0; i < array.length; i++) {
  // Do something
}

// ✅ Fast - cache length
let len = array.length;
for (let i = 0; i < len; i++) {
  // Do something
}

// ✅ Or use modern methods
array.forEach((item) => {
  // Do something
});
```

---

#### 4. Avoid Memory Leaks

```javascript
// ❌ Memory leak
let largeArray = [];
function collectData() {
  largeArray.push(new Array(1000000));
}

// ✅ Clean up
function collectData() {
  let data = new Array(1000000);
  // Process data
  data = null; // Clear reference
}
```

---

#### 5. Minimize DOM Manipulation

```javascript
// ❌ Slow - multiple DOM updates
for (let i = 0; i < 1000; i++) {
  document.getElementById("list").innerHTML += `<li>${i}</li>`;
}

// ✅ Fast - batch updates
let html = "";
for (let i = 0; i < 1000; i++) {
  html += `<li>${i}</li>`;
}
document.getElementById("list").innerHTML = html;
```

---

### Security Best Practices

#### 1. Avoid eval()

```javascript
// ❌ Dangerous
let code = "alert('Hello')";
eval(code); // Executes arbitrary code!

// ✅ Safe
let data = JSON.parse('{"message":"Hello"}');
console.log(data.message);
```

---

#### 2. Validate Input

```javascript
// ❌ Vulnerable
function greet(name) {
  console.log(`Hello ${name}`); // Can contain malicious code
}

// ✅ Validate
function greet(name) {
  if (typeof name !== "string" || name.length > 50) {
    throw new Error("Invalid name");
  }
  console.log(`Hello ${name}`);
}
```

---

#### 3. Avoid XSS (Cross-Site Scripting)

```javascript
// ❌ Vulnerable - directly inserting HTML
let userInput = "<img src=x onerror='alert(1)'>";
document.body.innerHTML += userInput; // Executes script!

// ✅ Safe - escape or use textContent
document.body.textContent = userInput; // Shows text, not HTML
// Or use a library like DOMPurify
```

---

### Debugging Tips

#### Console Methods

```javascript
console.log("General output");
console.error("Error message");
console.warn("Warning message");
console.info("Info message");
console.table([
  { a: 1, b: 2 },
  { a: 3, b: 4 },
]); // Table format
console.group("Label");
console.log("Grouped message");
console.groupEnd();
console.time("label");
// ... code to measure
console.timeEnd("label"); // Shows execution time
```

---

#### Breakpoints & Debugging

```javascript
// Debugger statement (pauses execution)
function problematicFunction() {
  debugger; // Execution pauses here if DevTools open
  let x = 5;
  return x * 2;
}
```

---

## Common Pitfalls & How to Avoid Them

### 1. Type Coercion Issues

```javascript
// ❌ Problem
console.log("5" + 3); // Output: "53" (string concatenation)
console.log("5" - 3); // Output: 2 (numeric subtraction)

// ✅ Solution: Be explicit
console.log(Number("5") + 3); // Output: 8
console.log(String(5) + 3); // Output: "53"
```

---

### 2. This Binding

```javascript
let person = {
  name: "John",
  greet: function () {
    console.log(this.name); // 'this' refers to person object
  },
  greetArrow: () => {
    console.log(this.name); // 'this' refers to global scope!
  },
};

person.greet(); // Output: John
person.greetArrow(); // Output: undefined
```

---

### 3. Array Index Issues

```javascript
// ❌ Problem: Sparse arrays
let arr = [];
arr[5] = "value";
console.log(arr.length); // Output: 6
console.log(arr[0]); // Output: undefined

// ✅ Solution: Use sequential indices
let arr2 = ["value"];
console.log(arr2.length); // Output: 1
```

---

### 4. Closure Mistakes

```javascript
// ❌ Problem
let funcs = [];
for (var i = 0; i < 3; i++) {
  funcs.push(() => console.log(i));
}
funcs[0](); // Output: 3 (not 0!)

// ✅ Solution: Use let or IIFE
let funcs2 = [];
for (let i = 0; i < 3; i++) {
  funcs2.push(() => console.log(i));
}
funcs2[0](); // Output: 0
```

---

## Quick Reference & Cheat Sheet

### Variable Declaration

```javascript
const x = 5; // Use by default (block-scoped, immutable)
let y = 10; // Use if reassignment needed (block-scoped)
var z = 15; // Avoid in modern JavaScript (function-scoped)
```

### Operators

```javascript
// Arithmetic: +, -, *, /, %, **
// Comparison: ===, !==, <, >, <=, >=
// Logical: &&, ||, !
// Assignment: =, +=, -=, *=, /=, %=
// Unary: ++, --, !, typeof, delete
// Ternary: condition ? true : false
```

### String Methods

```javascript
(toUpperCase(), toLowerCase(), trim(), split(), replace());
(slice(), substring(), includes(), startsWith(), endsWith());
(repeat(), padStart(), padEnd(), charAt(), charCodeAt());
```

### Array Methods

```javascript
(push(), pop(), shift(), unshift(), splice());
(map(), filter(), reduce(), forEach(), find());
(sort(), reverse(), join(), slice(), concat());
(includes(), indexOf(), every(), some(), flat());
```

### Object Methods

```javascript
Object.keys(), Object.values(), Object.entries()
Object.assign(), Object.freeze(), Object.seal()
hasOwnProperty(), in operator, for...in loop
```

---

**Last Updated**: January 23, 2026
