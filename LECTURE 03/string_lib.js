//STRING LIBRARY
document.write("<br/br> STRING LIBRARY <br/>");

var n1=prompt("ENTER YOUR NAME: ");
var len2=n1.length;
document.write(len2, "<br/>");


var text1= "Bangladesh";
var text2= " is a beautiful country";

var len= text1.length;
document.write(len, "<br/>");
document.write(text1.charAt(0), "<br/>");
document.write(text1.slice(2,7), "<br/>");

var text3= text1+text2;
document.write(text3, "<br/>");

var text4=text2.concat(text1);
document.write(text4, "<br/>");

var text5=text1.concat(text2);
document.write(text5, "<br/>");

var text6= text1.toUpperCase();
document.write(text6, "<br/>");

var text7= text1.toLowerCase();
document.write(text7, "<br/>");

