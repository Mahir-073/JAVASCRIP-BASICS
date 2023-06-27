//DIGIT SPELLING ; 0= ZERO, 1= ONE (0-9)

// switch, case, break, default

var digit=prompt("Enter any digit: ");

switch(digit){
    case "0":
        document.write("ZERO");
        break;
    case "1":
        document.write("ONE");
        break;
    case "2":
        document.write("TWO");
        break;
    case "3":
        document.write("THREE");
        break;
    case "4":
        document.write("FOUR");
        break;
    case "5":
        document.write("FIVE");
        break;
    case "6":
        document.write("SIX");
        break;
    case "7":
        document.write("SEVEN");
        break;
    case "8":
        document.write("EIGHT");
        break;
    case "9":
        document.write("NINE");
        break;
    default:
        document.write("NOT A DIGIT");

}

// task: 05

var ltr = prompt("ENTER A WORD: ");
ltr = ltr.toLowerCase();
document.write(ltr + "<br/>");

var firstLetter = ltr.charAt(0);

switch (firstLetter) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    document.write("VOWEL");
    break;

  default:
    document.write("CONSONANT");
}



