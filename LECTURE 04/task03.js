var num1= prompt("ENTER THE FIRST NUMBER: ");
num1= parseInt(num1, 10);

var num2= prompt("ENTER THE SECOND NUMBER: ");
num2= parseInt(num2, 10);

var sum,sub,mul,div,rem;

sum= num1 + num2;
document.write("ADDITION: "+ sum + "<br/>");

sub= num1 - num2;
document.write("SUBTRACTION: "+ sub + "<br/>");

mul= num1 * num2;
document.write("MULTIPLICATION: "+ mul + "<br/>");

div= num1 / num2;
document.write("DIVISION: "+ div + "<br/>");

rem= num1 % num2;
document.write("REMAINDER: "+ rem + "<br/>");