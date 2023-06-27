var num=prompt("ENTER TOTAL NUMBER: ")

num=parseFloat(num)
if(num>100 || num <0)
    document.write("INVALID MARKS <br/>");

else if(num>= 80 && num<=100)
    document.write("RESULT: A+  <br/>");

else if(num>= 70 && num<80)
    document.write("RESULT: A  <br/>");

else if(num>= 60 && num<70)
    document.write("RESULT: A-  <br/>");

else if(num>= 50 && num<60)
    document.write("RESULT: B  <br/>");

else if(num>= 40 && num<50)
    document.write("RESULT: C  <br/>");

else if(num>= 33 && num<40)
    document.write("RESULT: D  <br/>");

else
    document.write("RESULT: FAIL  <br/>");
