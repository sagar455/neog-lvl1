/*Try converting these codes to ES6 syntax-
var aloo = 1;
if (aloo == 1) {
   var a = 2;
   console.log(a);
}
console.log(aloo);*/

let aloo = 1;
if (aloo === 1) {
  let a = 2;
  console.log(a);
}
console.log(aloo);

/* var multiply = function(x, y) {
  return x * y;
};*/

var multiply = (x, y) => x * y;
console.log(multiply(3, 4));

/*var customer = {
  name: "Bhaalo"
};
var card = {
  amount: 20,
  product: "Aaalo",
  unitprice: 50
};
var message = "Hello " + customer.name + " wants to buy " + card.amount + " " + card.product + " for price of " + card.unitprice + " per piece" */

const customer = {
    name: "Bhaalo"
  };
const card = {
    amount: 20,
    product: "Aaalo",
    unitprice: 50
  };
let message = `Hello ${customer.name} wants to buy ${card.amount} ${card.product} for price of ${card.unitprice} per piece`;
console.log(message);

  /*var Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"],
CEO = Neog[0],
Mentor = Neog[2]; */


let Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"];
let CEO = Neog[0];
let Mentor = Neog[2];

console.log(CEO, Mentor);

/*var arr = ["MA", "TA", "PA", "CA"];
var firstName = arr[0],
var surname = arr[1];
console.log(firstName);
console.log(surname); */

let arr = ["MA", "TA", "PA", "CA"];
let firstName = arr[0];
let surname = arr[1];
console.log(firstName);
console.log(surname);

/*var Aaloo = "Tasty";
var Bhaloo = "Cute";
var Obj = {
  Aaloo: Aaloo,
  Bhaloo: Bhaloo
};*/

let Aaloo = "Tasty";
let Bhaloo = "Cute";
const Obj = {
    Aaloo: Aaloo,
    Bhaloo: Bhaloo
};

/*
var a = 5;
var b = 10;
console.log("Fifteen is ".concat(a + b, " and n0t ").concat(2 * a + b, "."));
*/
let a = 5;
let b = 10;
console.log("Fifteen is ".concat(a + b, " and not ").concat(2 * a + b, "."));

/*var arithmeticsObj = {
  sum: function sum(num1, num2) {
    return num1 + num2;
  },
  multiply: function multiply(num1, num2) {
    return num1 * num2;
  }
}; */

var arithmeticsObj = {
    sum: (num1, num2) => num1 + num2,
    multiply: (num1, num2) => num1 * num2
  };
  
console.log(arithmeticsObj.sum(1, 2), arithmeticsObj.multiply(1, 2));

/*var avengers = {
  operation: "Assemble",
  members: [
    {
      ironMan: "Tony Stark"
    },
    {
      captainAmerica: "Steve Rogers"
    },
    {
      blackWidow: "Natasha Romanoff"
    }
  ]
};
var operation = avengers.operation,
  members = avengers.members; */

const avengers = {
    operation: "Assemble",
    members: [
      {
        ironMan: "Tony Stark"
      },
      {
        captainAmerica: "Steve Rogers"
      },
      {
        blackWidow: "Natasha Romanoff"
      }
    ]
  };
let operation = avengers.operation;
let members = avengers.members;

/*Convert ES6 to ES5
const packIt = (...args) => console.log(args)

packIt(1,2,3,5,5)
*/

function packIt() {
    console.log(Array.prototype.slice.call(arguments));
  }
  
  packIt(1, 2, 3, 5, 5);

  /*Guess the output 

const hello = () => "Hello"
const welcome = () => "Welcome"
const [Hello = hello(), Welcome = welcome()] = ["Namaste"]
console.log(Hello, Welcome)

   */

//output: Namaste Welcome
//reason: we are giving default values to Hello and Welcome on destructuring and after that we are intialising a new value Namste to it so its get initialised to the Hello.

/*const obj = {
    aloo : 1,
    bhallo : 2
}

const {c : aloo = [2,3,4].push(5), aloo} = obj 

console.log(aloo)*/

//output: throws an error
//reason: we are naming c as aloo and again trying to destructure aloo which throws an error.