//1.Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

const FizzBuzz = () =>{
    let arr =[];
    for(let i=1;i<=100;i++){
      arr[i]=i;
     if(arr[i]%3===0 && arr[i]%5===0)
     {
       console.log('FizzBuzz')
     }
     else if(arr[i]%3 === 0)
     {
       console.log('Fizz')
     }
     else if(arr[i]%5===0)
     {
       console.log('Buzz')
     }
     else{
       console.log(arr[i])
     }
    }
  }
  
FizzBuzz()

/*2.Print the following star pattern :-

*
* *
* * *
* * * *
* * * * *   

*/

const pattern =() =>{
    for(let i=0;i<6;i++){
      console.log('\n')
      for(let j=0;j<i;j++)
      {
        console.log("*")
      }
    }
  }
  
pattern()

//3.Write a program to take a number input from user and print multiplication table 12 times for that number.

const table = (num) =>{
    for(let i=1;i<=12;i++)
    {
      console.log(num*i)
    }
  }
  
let a = prompt()
table(a)

//4.Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

const fibonacci = (num) => {
    let arr = [];
    if (num < 0) return "incorrect input";
    else if (num === 0) return (arr[0] = 0);
    else if (num === 1 || num === 2) return (arr[1] = 1);
    else {
      arr[0] = 0;
      arr[1] = 1;
      arr[2] = 1;
      for (let i = 2; i < num; i++) {
        arr[i] = arr[i - 2] + arr[i - 1];
      }
      return arr;
    }
  };
  
let num = prompt();
console.log(fibonacci(num));
  
//5.Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

const factorial = (num) => {
    let fact = 1;
  
    if (num === 1) return fact;
    else {
      for (let i = 1; i <= num; i++) {
        fact *= i;
      }
      return fact;
    }
  };

let num = prompt();
console.log(factorial(num));

//6.Write a Program to take a number input from user and find if the number is Prime or not.

const prime = (num) => {
    let flag = 0;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return "not prime";
        flag = 1;
        break;
      }
    }
    if (flag === 0) return "prime";
  };
  
  let num = prompt();
  console.log(prime(num));

  //7.Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.

const weekDayOrNot = value =>{
    if(value.toLowerCase()==='monday'||value.toLowerCase()==='tuesday'||value.toLowerCase()==='wednessday'||value.toLowerCase()==='thursday'||value.toLowerCase()==='friday'){
      console.log('hey..!!!!!! its a weekday')
    }
  
    else if(value.toLowerCase()==='saturday'||value.toLowerCase()==='sunday'){
      console.log('yeppy..! its a weekend')
    }
  
    else{
      console.log("enter a valid day")
    }
  }
  
let userInput =  prompt()
weekDayOrNot(userInput)