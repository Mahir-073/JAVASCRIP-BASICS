var num1= parseFloat(prompt("ENTER FIRST NUMBER: "))
var num2= parseFloat(prompt("ENTER SECOND NUMBER: "))
var num3= parseFloat(prompt("ENTER THIRD NUMBER: "))

if(num1>num2 && num1>num3)
    document.write("MAXIMUM NUMBER: " + num1);

else if(num2>num1 && num2>num3)
    document.write("MAXIMUM NUMBER: " + num2);

else if(num1==num2 && num2==num3)
    document.write("ALL NUMBERS ARE EQUAL")

else if(num1==num2)
    document.write("FIRST AND SECOND NUMBER ARE EQUAL")

else if(num2==num3)
    document.write("SECOND AND THIRD NUMBER ARE EQUAL")

else if(num1==num3)
    document.write("FIRST AND THIRD NUMBER ARE EQUAL")

else 
    document.write("MAXIMUM NUMBER: " + num3);