// var , let and constt -- line by line compari
var a = 10000000;
var _t = "temp";
b = 223;

let temp2 = "abc";
const temp3 = "i like your knowledge";

console.log(a,_t,b,temp2,temp3);


d = 24;
var d = "hello";



a1 = 10;
console.log(a1);
{
    a1 = 100;
    console.log(a1);

}
 function abc(){
    a1 = 1000;
    console.log(a1);

}

abc();
console.log(a1);



console.log("using let");

 let aa = 10;
console.log(aa);
{
     let aa = 100;
    console.log(aa);

}
 function abc(){
     let aa = 1000;
    console.log(aa);

}

abc();
console.log(aa);


console.log("using var");

 var aa1 = 10;
console.log(aa);
{
     var aa1 = 100;
    console.log(aa1);

}
 function abc(){
     var aa1 = 1000;
    console.log(aa1);

}

abc();
console.log(aa1);



// temporal dead zone (tdz)
// console.log(j);
// let j = 1000;
// let j;
// j = 11;


console.log(aaaa)

var aaaa = "i am here ?";



// hoisting impact 
// hoisting --> when your create a vaiable into js  that break into two part first is declare part that go to up and there initialization part that go down 

var temp_d;
// var temp_d; --> undefined; --> that go to up
// var temp_d = 123;  that go to down ( menas stuck into line 90);
// if you use console.log before initialization that give you undefined;

 let temp_d = 123;
 // let varaiable not use  before initialization 
 // if you use console.log before initialization that give you error;
 // hosting impact on let ,var ,const

//  var --> hoist --> undefined
//  let --> hoist --> error
//  const --> hoist --> error



