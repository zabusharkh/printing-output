/*
*   Name: Zeinab AbuSharkh
*   Student Number: 040886942
*   MTM1526 - Printing Output
*/

/*global alert, console*/
/*jslint eqeq: true*/

//TASK 1

// defining main three variables
var a = 3;
var b = 5;
var c;

// defining variables to be printed
var addition =  a + b;
var subtract = a - b;
var multiply = a * b;
var division = a / b;
var modulas = a % b;
var add_assign = a += b;
var sub_assign = a -= b;
var mult_assign = a *= b;
var div_assign = a /= b;
var mod_assign = a %= b;
var equal = a == b;
var not_equal = a != b;
var greater = a > b;
var less = a < b;
var and_logic = !a && !c;
var or_logic = !a || !c;

// alert
alert("var a =" + a + "; \nvar b = " + b + "; \nvar c; \n------------\na + b =" + addition + "; \na - b = " + subtract + "; \na * b = " + multiply + "; \na / b = " + division + "; \na % b = " + modulas + "; \na += b = " + add_assign + "; \na -= b = " + sub_assign + "; \na *= b = " + mult_assign + "; \na /= b = " + div_assign + "; \na %= b = " + mod_assign + "; \na == b = " + equal + "; \na != b = " + not_equal + "; \na > b = " + greater + "; \na < b = " + less + "; \n!a && !c = " + and_logic + "; \n!a || !c = " + or_logic);


// TASK 2

// defining variables
var first_name = "Zeinab";
var last_name = "AbuSharkh";
var email = "abus0042@algonquinlive.com";

// making the output variable and alert
var output = "My name is " + first_name + " " + last_name + ". You can contact me at " + email + ".";
alert(output);

// TASK 3

// creating the numbers array
var numbers = [
    Math.floor(Math.random() * (200 - 100) + 100),
    Math.floor(Math.random() * (200 - 100) + 100),
    Math.floor(Math.random() * (200 - 100) + 100),
    Math.floor(Math.random() * (200 - 100) + 100),
    Math.floor(Math.random() * (200 - 100) + 100)
];

// create var sum
var sum = numbers[0] + numbers[numbers.length - 1];

// Test for odd or even and alert
if (sum % 2 == 0) {
    alert(numbers[0] + " + " + numbers[numbers.length - 1] + " = " + sum + "\nThis is an even number.");
} else {
    alert(numbers[0] + " + " + numbers[numbers.length - 1] + " = " + sum + "\nThis is an odd number.");
}
