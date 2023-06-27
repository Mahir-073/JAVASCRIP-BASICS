var num1,num2, t1, t2, num3;
num1=20
num2="20.5"
num3=2.5678

// PART 01
t1 = toString(num1)
t2= parseInt(num2)  //parseFloat can handle the decimal values
console.log(typeof(num1))
console.log(typeof(t1))
console.log(typeof(num2))
console.log(typeof(t2))


// PART 02
console.log(num3.toFixed(2))  // after decimal  2
console.log(num3.toPrecision(2)) // overall 2

// PART 03
console.log(Number(false))
console.log(typeof(Number(true)))



// PART 04: ADD + CONCAT
var fName, lName, fullName;
fName="Mahir Ahmed"
lName=" Niloy"

fullName= fName + lName

document.write("My Name is: "+ fullName, "<br/>")

var n1,n2,r;
n1=20
n2=25.5
r=n1+n2

document.write(r)

