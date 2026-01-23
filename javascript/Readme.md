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

### String Case Methods

```javascript
let text = "Hello World";

console.log(text.toUpperCase()); // Output: HELLO WORLD
console.log(text.toLowerCase()); // Output: hello world
```

---

### String Search Methods

```javascript
let text = "Hello World";

console.log(text.indexOf("o")); // Output: 4
console.log(text.lastIndexOf("o")); // Output: 7
console.log(text.includes("World")); // Output: true
console.log(text.startsWith("Hello")); // Output: true
console.log(text.endsWith("World")); // Output: true
```

---

### String Extraction Methods

```javascript
let text = "Hello World";

console.log(text.slice(0, 5)); // Output: Hello
console.log(text.substring(6)); // Output: World
console.log(text.substr(0, 5)); // Output: Hello (deprecated)

// Character at index
console.log(text.charAt(0)); // Output: H
console.log(text.charCodeAt(0)); // Output: 72
```

---

### String Replacement & Splitting

```javascript
let text = "Hello World";

console.log(text.replace("World", "JavaScript"));
// Output: Hello JavaScript

console.log(text.replaceAll("l", "L"));
// Output: HeLLo worLd

let words = text.split(" ");
console.log(words); // Output: ["Hello", "World"]

console.log(text.repeat(2));
// Output: Hello WorldHello World
```

---

### String Padding & Trimming

```javascript
let text = "   Hello World   ";

console.log(text.trim()); // Output: Hello World
console.log(text.trimStart()); // Output: Hello World
console.log(text.trimEnd()); // Output:    Hello World

let num = "5";
console.log(num.padStart(3, "0")); // Output: 005
console.log(num.padEnd(3, "0")); // Output: 500
```

---

## Array Methods & Operations

Arrays have powerful methods for manipulation, filtering, and transformation.

### Array Modification Methods

```javascript
let arr = [1, 2, 3, 4, 5];

// Add elements
arr.push(6); // Add to end: [1, 2, 3, 4, 5, 6]
arr.unshift(0); // Add to start: [0, 1, 2, 3, 4, 5, 6]

// Remove elements
arr.pop(); // Remove from end: [0, 1, 2, 3, 4, 5]
arr.shift(); // Remove from start: [1, 2, 3, 4, 5]

// Splice (modify array)
arr.splice(2, 1); // Remove 1 element at index 2: [1, 2, 4, 5]
arr.splice(2, 0, 3); // Insert element: [1, 2, 3, 4, 5]
```

---

### Array Search Methods

```javascript
let arr = [1, 2, 3, 4, 5, 3];

console.log(arr.indexOf(3)); // Output: 2
console.log(arr.lastIndexOf(3)); // Output: 5
console.log(arr.includes(4)); // Output: true

// Find first matching element
console.log(arr.find((x) => x > 3)); // Output: 4

// Find index of first matching element
console.log(arr.findIndex((x) => x > 3)); // Output: 3
```

---

### Array Transformation Methods

```javascript
let arr = [1, 2, 3, 4, 5];

// Map - transform each element
let doubled = arr.map((x) => x * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// Filter - keep matching elements
let evens = arr.filter((x) => x % 2 === 0);
console.log(evens); // Output: [2, 4]

// Reduce - accumulate into single value
let sum = arr.reduce((acc, x) => acc + x, 0);
console.log(sum); // Output: 15
```

---

### Array Sorting & Reversing

```javascript
let arr = [3, 1, 4, 1, 5, 9];

// Reverse (modifies original)
arr.reverse();
console.log(arr); // Output: [9, 5, 1, 4, 1, 3]

// Sort (modifies original, alphabetical by default)
let nums = [3, 1, 4, 1, 5];
nums.sort((a, b) => a - b); // Numeric sort
console.log(nums); // Output: [1, 1, 3, 4, 5]

// Sort descending
nums.sort((a, b) => b - a);
console.log(nums); // Output: [5, 4, 3, 1, 1]
```

---

### Array Joining & Flattening

```javascript
let arr = [1, 2, 3, 4, 5];

// Join elements into string
console.log(arr.join(", ")); // Output: 1, 2, 3, 4, 5
console.log(arr.join("-")); // Output: 1-2-3-4-5

// Flatten nested arrays
let nested = [1, [2, 3], [4, [5, 6]]];
console.log(nested.flat()); // Output: [1, 2, 3, 4, [5, 6]]
console.log(nested.flat(2)); // Output: [1, 2, 3, 4, 5, 6]

// FlatMap - map then flatten
let arr2 = [1, 2, 3];
let result = arr2.flatMap((x) => [x, x * 2]);
console.log(result); // Output: [1, 2, 2, 4, 3, 6]
```

---

### Array Checking Methods

```javascript
let arr = [1, 2, 3, 4, 5];

// Check if all elements match condition
console.log(arr.every((x) => x > 0)); // Output: true
console.log(arr.every((x) => x > 3)); // Output: false

// Check if some elements match condition
console.log(arr.some((x) => x > 3)); // Output: true
console.log(arr.some((x) => x > 10)); // Output: false
```

---

## Object Manipulation

Objects are fundamental to JavaScript. Learn how to work with them effectively.

### Object Creation

```javascript
// Object literal
let person = {
  name: "John",
  age: 30,
  email: "john@example.com",
};

// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let person2 = new Person("Jane", 25);

// Object.create()
let proto = {
  greet: function () {
    return "Hello";
  },
};
let obj = Object.create(proto);
obj.name = "Bob";
```

---

### Object Properties

```javascript
let person = {
  name: "John",
  age: 30,
};

// Add property
person.email = "john@example.com";
person["phone"] = "123-456-7890";

// Access property
console.log(person.name); // John
console.log(person["age"]); // 30

// Delete property
delete person.phone;

// Check property existence
console.log("name" in person); // true
console.log(person.hasOwnProperty("email")); // true
```

---

### Object Methods

```javascript
let person = { name: "John", age: 30, email: "john@example.com" };

// Get all keys
console.log(Object.keys(person));
// Output: ["name", "age", "email"]

// Get all values
console.log(Object.values(person));
// Output: ["John", 30, "john@example.com"]

// Get key-value pairs
console.log(Object.entries(person));
// Output: [["name", "John"], ["age", 30], ["email", "john@example.com"]]

// Copy object
let copy = Object.assign({}, person);
let copy2 = { ...person }; // Spread syntax

// Freeze object (prevent modifications)
Object.freeze(person);
// person.age = 31; // Throws error in strict mode

// Seal object (allow modifications, no add/delete)
Object.seal(person);
```

---

### Object Destructuring

```javascript
// Extract properties into variables
let person = { name: "John", age: 30, city: "NYC" };

const { name, age } = person;
console.log(name, age); // Output: John, 30

// Rename properties
const { name: personName, age: personAge } = person;
console.log(personName); // Output: John

// Default values
const { phone = "N/A" } = person;
console.log(phone); // Output: N/A

// Nested destructuring
let user = {
  id: 1,
  profile: { name: "John", email: "john@example.com" },
};

const {
  profile: { name, email },
} = user;
console.log(name, email);
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
