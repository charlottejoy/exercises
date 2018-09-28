/******Let vs Var vs Const:*******/

/*Let confines the declared value to the block
Var doesn’t
Const is mutable, but it’s not reassignable.*/

function showConst(){
const STAY= ["YAY", "Yippy"];
//STAY="boo"; //no dice
STAY[2]= "hi";
console.log(STAY);//["Yay", "Yippy", "hi"]

/*The variable name is in ALL_CAPS if it shouldn’t be changed (?). Can really be unchangeable with Object.freeze(CONT_NAME).*/
}

showConst();

/***Scope ***/
function checkScope() {
    "use strict";
      let i = "function scope";
      if (true) {
       let i = "block scope";
        console.log("Block scope i is: ", i); //”block scope”
      }
      console.log("Function scope i is: ", i); // “function scope”
      /*If “block scope” had been set with var or nothing, this would be “block scope”*/
      return i;
    }

/*****Arrow functions******/

//const name= (vars/spread) => what it returns;
function arrowFunction(){
const sumTest = (a,b) => a+b;
sumTest(2,4);
}
arrowFunction();

const squareListArr=[4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

  const squareList = (arr) => {
  "use strict";
  // change code below this line
  const positiveNums = arr.filter((nums) => nums > 0 && nums % 1 == 0);
  const squaredIntegers = positiveNums.map(num=>Math.pow(num, 2));
  // change code above this line
  return squaredIntegers;
};
// test your code

console.log(squareList(squareListArr));

//These let you have a default value like in the destructured array below
const increment=(number, value=1)=>number+value;

console.log(increment(5, 2)); //  7
console.log(increment(5));// 6


/***Operators***/

//Spread
/*...arrName to stand for all the elements of arrName. In the case where you cannot just refer to the array Name, but need to actual elements.*/
function showSpread(){
  let arrName=[1,2,3,4,5];
  console.log(Math.max(...arrName));//5
  console.log(Math.max.apply(null,arrName));//5

/*This will work as an argument to a function or too add to an array */
let newArr=[...arrName];
console.log(newArr);//[1,2,3,4,5]
let newerArr=[1,2,7, ...arrName];
console.log(newerArr);//[1,2,7,1,2,3,4,5]
/*It won’t work to assign it to a variable, it’s the elements not the array itself.*/
//Let newArr= ...arrName; //fail

}
showSpread();

//Rest
//LOOKUP REST VS SPREAD 
const sumRest=(...nums)=>nums.reduce((a,b) => a+b,0);
console.log(sumRest(1, 2, 3)); // 6


/***Destructuring ***/
/*"The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables."
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment*/

/*Array*/
//assigning values to multiple variables at once and including rest
function destructuredArray(){
  //basic 1 to 1 array variable assignment, you could also declare these values ahead of time
  let [a,b,c]=["kim", "bob", "mary"];
  console.log(a);//kim

  // using rest to take on the rest
  let [d,e,...more] = ["like","love","totally","awesome", "hope"];
  console.log(more); //["totally","awesome", "hope"]
  //assigning more values to the rest using what we see below
  let [f,g] = more;
  console.log(f);// totally;

  let x= ["George", "Mother", "Wheezy"];
  let [y,z] = x;
  console.log(y);//George
  console.log(z);//Mother

  let nope;
  let[time=nope, meal="second breakfast"]= ["morning"];//this is a default value, it helps if the value set is undefined
  console.log(time);//morning
  console.log(meal);//second breakfast
}
destructuredArray();


/*Objects*/
function changeNamedObject(){

  let person = {pet:"cat", fName:"firstName"};
  let {pet, fName} = person;
  pet="Dog";
  console.log(pet); //Dog
  //I'm not sure why this^ is useful yet. Both of these seem to assign the current value to a new variable*/
  person["pet"]= "bird"
  let {pet: animal} =person;
  console.log(animal);//bird
  console.log(pet);
  person["pet"] = "iguana";
  let {pet: cutie} =person;
  //now animal also holds the value the key had at the time
  console.log(animal);//bird
  console.log(pet);//Dog
  console.log(cutie);// iguana
  console.log(person.pet);// iguana


  /*Another example from FCC :https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-assign-variables-from-objects*/
  const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
  };

  function getTempOfTmrw(avgTemperatures) {
    "use strict";
    const {tomorrow : tempOfTomorrow} =  AVG_TEMPERATURES;
    return tempOfTomorrow;
  }

  AVG_TEMPERATURES.tomorrow= 22;
  // tempOfTomorrow is changed because I changed it before the function is called. It has the current value like those below.
  console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79 if wasn't changed above, but now it's 22
}

changeNamedObject();