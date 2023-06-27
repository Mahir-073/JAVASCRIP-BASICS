// print the sum of all the numbers that are divisible by 3 and 5 from 1 to 100

var s=1;
var end=20;
var sum=0;

while(s<=end)
{
    if(s%3 == 0 && s%5 ==0){
        sum=sum+s;
    }
    
    s=s+1;

}

document.write(sum)