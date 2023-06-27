// creating a function
// calling a function
// how to pass a value through parameter
// return a value

function addition(num1, num2){
    var sum=num1+num2;
    document.write("Sum: " + sum + "<br/>");
}

addition(7,3);

function subtraction(num1, num2){
    var sub=num1-num2;
    return sub;
}

var sub= subtraction(8,5);
var result =document.write("Sub: " + sub + "<br/>");
