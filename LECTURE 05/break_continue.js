for(var i=1; i<=10; i++)
{
    if(i == 4){
        break; 
        
    }
    document.write(" "+ i);

}
document.write("<br/>");

for(var i=1; i<=10; i++)
{
    if(i == 4){
        continue;  // sent back to the loop from here
        
    }
    document.write(" "+ i);

}