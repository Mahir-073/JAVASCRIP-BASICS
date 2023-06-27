// FAHRENHEIT TO CELCIUS CONVERTER

var f=prompt("ENTER TEMPARATURE IN FAHRENHEIT: ")
f=parseFloat(f)

var c= (f - 32) * (5/9)

document.write("Temparature in celcius: "+ c + "<br/>")

var c1=prompt("ENTER TEMPARATURE IN CELCIUS: ")
c1=parseFloat(c1)

var f1= (c1*(9/5))+32
document.write("Temparature in Fahrenheit: "+ f1 + "<br/>")
