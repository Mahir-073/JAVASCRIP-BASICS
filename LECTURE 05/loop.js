// IF, ELSE-IF, ELSE
var num=6; 

if(num%2==0)
    document.write("EVEN <br/>");

else
    document.write("ODD <br/>");

// for loop

for(var x=1; x<=5; x++)
{
    document.write(" "+x );
}

document.write("<br/>");

for(var y=5; y>0; y--)
{
    document.write(" "+ y);
}

/// sum
var sum=0;
for(var x=1; x<=5; x++)
{
    sum=sum+x;
}
document.write("sum: "+sum+"<br/>");

// while loop
var i=1;  //initialization of loop
var sum=0;
while(i<=10) // loop condition
{
    sum=sum+i;
    i=i+1;  // loop increment
}

document.write(sum + "<br/>");

// do while

var n=1;
do {
    document.write(" " +n);
    n=n+1
}while(n<=15);

/// NOTE THAT: IN WHILE LOOP, WE FIRST CHECK THE GIVEN CONDITION AND THEN EXECUTE. HOWEVER IN DO WHILE LOOP WE FIRST EXECUTE THEN WE CHECK THE CONDITION.

