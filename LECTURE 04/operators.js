//Arithmatic operators: +, -, *, /, %, **, ++, --
var a = 5;
var b = 3;

var r1= a + b;
console.log(r1);

var r2= a - b;
console.log(r2);

var r3= a * b;
console.log(r3);

var r4= a / b;
console.log(r4);

var r5= a % b;
console.log(r5);

var r6= a ** b;
console.log(r6);

var r7= a++;
console.log(r7)

var r8= a--;
console.log(r8);

//Assignment operators: =, +=, -=, *=, /=, %=, **=

var x = 3;
x += 7;  //x=x+6
console.log(x);

x *= 3;
console.log(x);

x -= 10;
console.log(x);

x /= 5;
console.log(x);

x **= 2;
console.log(x);

x %= 2;
console.log(x);


// Relational operators: >, <, >=, <=, ==, !=, ===, !== (returns true or false) here, ==: only the value
// === will check both the value and the data type 

console.log(20>10);
console.log(20<10);
console.log(20>=10);
console.log(20<=10);
console.log(20==10);
console.log(20!=10);
console.log(20==='20');
console.log(20!==10);


// Logical Operators: &&, ||
var a= 50;
var b= 30;
var c= 20;

console.log(a>b && a>c)  // all true= true
console.log(a>b && c>b)

console.log(a>b || a>c) // at least 1 true= true
console.log(a>b || c>b || b>a)

console.log(!true)
console.log(!false)

