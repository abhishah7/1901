### java script

<h1>variable<h1>
### Variable Declarations

<li>

var a = 10000000;
var \_t = "temp";
b = 223;

let temp2 = "abc";
const temp3 = "i like your knowledge";

<li>

// temporal dead zone (tdz)
// console.log(j);
// let j = 1000;
// let j;
// j = 11;

console.log(aaaa)

var aaaa = "i am here ?";

//alterview --> for screeen share

// hoisting impact
// hoisting --> when your create a vaiable into js that break into two part first is declare part that go to up and there initialization part that go down

var temp_d;
// var temp_d; --> undefined; --> that go to up
// var temp_d = 123; that go to down ( menas stuck into line 90);
// if you use console.log before initialization that give you undefined;

let temp_d = 123;
// let varaiable not use before initialization
// if you use console.log before initialization that give you error;
// hosting impact on let ,var ,const

// var --> hoist --> undefined
// let --> hoist --> error
// const --> hoist --> error

<div>
<h3>Example 1:</h3>
<p> log(nm) ;</p>
<p>let nm = "name"; </p>
<p>Answer or Error: </p>
<p>Why: </p>
</div>
<div>
<h3>Example 2:</h3>
<p> log(b) ;</p>
<p>var b = "username"; </p>
<p>Answer or Error: </p>
<p>Why: </p> </div>
<div>









## Example Outputs and Explanations

### Example 1: Using 'var'


<pre>
var a = 10000000;
var _t = "temp";
b = 223; // b is implicitly declared as a global variable

let temp2 = "abc";
const temp3 = "i like your knowledge";

console.log(a, _t, b, temp2, temp3); // Output: 10000000 temp 223 abc i like your knowledge
</pre>
 Answer : 10000000 temp 223 abc i like your knowledge <p> 
 Why : Variables 'a', '_t', and 'temp2' are declared with 'var', 'let', and 'const' respectively, while 'b' is implicitly declared. 'console.log' outputs all values.
</p>



### Example 2: Redeclaring 'var'


<pre>
d = 24; // Implicitly declared global variable
var d = "hello"; // Redeclares var d

console.log(d); // Output: hello
</pre>

Answer: hello  
<p> 
Why: The variable 'd' is redeclared. Since 'var' allows redeclaration, it overwrites the previous value (24).
</p>


### Example 3: Scope with 'var'

<pre>
a1 = 10; // Implicitly declared global variable
console.log(a1); // Output: 10
{
    a1 = 100;  // This modifies the global variable
    console.log(a1); // Output: 100
}

function abc() {
    a1 = 1000; // Modifies global variable
    console.log(a1); // Output: 1000
}
abc();
console.log(a1); // Output: 1000
</pre>
Answer: 10, 100, 1000, 1000  
<p>
Why: The variable 'a1', declared globally, is updated within the block and function without scope restrictions.
</p>



### Example 4: Scope with 'let'

<pre>
console.log("using let");

let aa = 10;
console.log(aa); // Output: 10
{
    let aa = 100; // Scoped variable
    console.log(aa); // Output: 100
}

function abc() {
    let aa = 1000; // Scoped variable
    console.log(aa); // Output: 1000
}
abc();
console.log(aa); // Output: 10
</pre>

Answer: using let, 10, 100, 1000, 10  
<p>
Why: The outer 'aa' remains unaffected by the inner 'aa' due to block scope with 'let'.
</p>



### Example 5: Scope with 'var' Again

<pre>
console.log("using var");

var aa1 = 10;
console.log(aa1); // Output: 10
{
    var aa1 = 100; // Redeclares global variable
    console.log(aa1); // Output: 100
}

function abc() {
    var aa1 = 1000; // Redeclaration affects the inner scope
    console.log(aa1); // Output: 1000
}
abc();
console.log(aa1); // Output: 100
</pre>
Answer: using var, 10, 100, 1000, 100  
<p>
Why: The 'aa1' variable declared with 'var' is hoisted and can be redeclared within different scopes.
</p>



### Example 6: Temporal Dead Zone (TDZ) with 'let'

<pre>
console.log(j); // ReferenceError: Cannot access 'j' before initialization
let j = 1000;
</pre>
Answer: ReferenceError  
<p>
Why: 'let' variables are not accessible before their declaration, hence the TDZ.
</p>

---

### Example 7: Hoisting Impact with 'var' and 'let'
<pre>
var temp_d;
console.log(temp_d); // Output: undefined
temp_d = 123; // Initialization

let temp_d2 = 123;
console.log(temp_d2); // ReferenceError: Cannot access 'temp_d2' before initialization
</pre>
Answer: with var: undefined, with let: ReferenceError  
<p>
Why: 'var' is hoisted with an undefined initialization, while 'let' causes an error if accessed before initialization.
</p>

