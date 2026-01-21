# JavaScript Fundamentals - Advanced Guide

## Table of Contents

1. [Variable Declarations](#variable-declarations)
2. [Hoisting & Temporal Dead Zone](#hoisting--temporal-dead-zone)
3. [Data Types](#data-types)
4. [Scope Management](#scope-management)

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

**Last Updated**: January 20, 2026
