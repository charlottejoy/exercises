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

//RESULT 5 + 5 is 10
var convert = "convert";
var backticks = "compute and ";
console.log(`I like that it can be on mulitple lines 
and that it will ${backticks + convert} lot of things to a string. High ${2+3}!`);

/*RESULT: I like that it can be on mulitple lines 
and that it will compute and convert lot of things to a string. High 5!*/

//**** BOOLEANS*/

console.log(NAN == NAN);
//RESULT: false (!!!!); Because it's meant to represent the result of a "nonsensical computation", it isn't equal to another nonsense computation.

console.log(true&&false);
console.log(false&&false);
//RESULT: false. FALSE just wins here if it's present
console.log(true&&true);
//RESULT: true

console.log(true|| false);
//RESULT: true. True wins here if it's present

function hey(){
    console.log("I'm a function");
}


//***UNARY, BINARY, TERNARY OPERATOR ****

console.log(typeof(6));
//Result: number. Unary: It just takes only one value. Another example is minus sign in -8.

console.log(8+4);
//Result: 12. Binary. It takes 2 values. Examples are *, <<, ||, %, etc. Here's a list:https://stackoverflow.com/questions/12122293/list-of-all-binary-operators-in-javascript

console.log(true ? 1:2);
//Result: 1. Ternary. This is the conditional operator, the only ternary operator in JS. Why 1? If true, the first option is chose, if false, the second
console.log(6>7 ? 9 :8); // 8 >> if(6>7){console.log(9);} else {console.log(8)};


//***EMPTY VALUES ****
console.log(null); console.log(undefined);// Pretty much the same. No meaningul value. You'll see "undefined" if what you ask for = no meaningful value

//**** AUTOMATIC TYPE CONVERSION****
//Javascript will try to make things work. If your values aren't the same type, you might get weird things.

console.log(5 == "5");
//Result: true. With "=="" will try to convert different types to compare them.

console.log(null ==undefined); console.log(undefined==0); console.log(null==0);
//Result: true, false, false. null is only == to undefined

console.log(5 ==="5");
//Result: false, with "===""


// A practical example of ternary, backticks, 

function canIBuy(income, expenses, savingsGoal, splurge){
    var disposableIncome = income - expenses;
    (disposableIncome - splurge >= savingsGoal) ? console.log(`Go for it. You\'ll have \$${disposableIncome - savingsGoal - splurge} more than your savings Goal left.`) : console.log(`Sorry, that would put you behind your goal by \$${-(disposableIncome - savingsGoal - splurge)}`);
    }
    
    canIBuy(2000, 1600, 200, 200);
    canIBuy(3000, 1000, 200, 400);
    canIBuy(2000, 1600, 400, 200);


// A practical example of booleans