var num=Number(prompt("ENTER A NUMBER: "));

var result = num>0 ? "positive" : num<0 ? "negative" : "Zero";
document.write("RESULT: "+ result+ "<br/>");

var num1, num2, num3;

num1=parseFloat(prompt("ENTER FIRST NUMBER: "));
num2=parseFloat(prompt("ENTER SECOND NUMBER: "));
num3=parseFloat(prompt("ENTER THIRD NUMBER: "));

var result = (num1>num2 && num1>num3) ? "NUMBER 1 IS MAXIMUM" : (num2>num1 && num2>num3) ? "NUMBER 2 IS MAXIMUM" : "NUMBER 3 IS MAXIMUM";

document.write(result)