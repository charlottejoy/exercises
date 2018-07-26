//First thing first was setting up  VSCode a bit more. Installed Code Runner to see the console output in VSCode. 
//Something to do later will be to set up Emmet

//Reading this chapeter reminded me of some basics I'd forgotten and taught me some new things

//********** ADDING ESCAPE CHARACTERS******
console.log("This is the first line and \nthis is the second.");
/*RESULT: This is the first line and 
This is the second*/

console.log("This is going to have a space \tright here.");
/* RESULT: This is going to have a space 	right here*/

console.log('This prevents the code\'s awkward quotation gymnastics.');
/*RESULT: This prevents the code's awkward quotation gymnastics.
Useful if you're in single-quote territory. */

console.log("It's cool you use the backslash. It looks like this: \\.");
/*RESULT: It's cool you use the backslash. It looks like this: \.
Useful if you need to represent that character used to escape characters.*/

console.log("\"Wow!\" Is what I said when I looked at this again!");
/*RESULT: "Wow!" Is what I said when I looked at this again!
Useful if you're in double-quote territory. */

//MORE ABOUT ESCAPE CHARACTERS: https://www.w3schools.com/js/js_strings.asp

//****BACKTICK QUOTED STRINGS or TEMPLATE LISTERALS****
console.log(`5 + 5 is ${5+5}`);

var convert = "convert";
var backticks = "compute and " +convert;
console.log(`I like that it can be on mulitple lines 
and that it will ${backticks} lot of things to a string`);
