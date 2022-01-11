//1.Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

const add = (num1, num2, num3, num4, num5) => num1 + num2 + num3 + num4 + num5;
console.log(add(5, 13, 7, 21, 48));

//2.Write a program to take a number input from user and determine whether the number is odd or even.

const OddOrEven = num => (num%2 ? 'odd':'even')

let a = prompt()
console.log(OddOrEven(a))

//3.Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

const largest = (num1,num2) => (num1>num2 ? `${num1} is largest` : `${num2} is largest`);

console.log(largest(129,251))

//4.Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

const largetsOfThree = (num1,num2,num3) =>{
    if(num1>num2){
      if(num1>num3) return `${num1} is largest`
      else return `${num3} is largest`
    }
    else if(num2>num3)
    {
      return `${num2} is largest`
    }
    else{
      return `${num3} is largest`
    }
  }
  
  console.log(largetsOfThree(8,23,17))

  //5.Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

  const minimumOfThree = (num1,num2,num3) =>{
    if(num1<num2){
      if(num1>num3) return `${num1} is smallest`
      else return `${num3} is smallest`
    }
    else if(num2<num3)
    {
      return `${num2} is smallest`
    }
    else{
      return `${num3} is smallest`
    }
  }
  
  console.log(minimumOfThree(35,29,46))

  //6.Write program to take a month as an input from the user and find out whether the month has 31 days or not.

  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
  ];
  
  const checkMonth = (month) => {
    for (let i = 0; i < months.length; i++) {
      if (month.toLowerCase() === months[i].toLowerCase()) {
        if (
          month.toLowerCase() === months[0] ||
          month.toLowerCase() === months[2] ||
          month.toLowerCase() === months[4] ||
          month.toLowerCase() === months[6] ||
          month.toLowerCase() === months[7] ||
          month.toLowerCase() === months[9] ||
          month.toLowerCase() === months[11]
        ) {
          console.log(`${month} has 31 days`);
        } else {
          console.log(`${month} does not have 31 days`);
        }
      }
    }
  };
  
  let month = prompt();
  checkMonth(month);
  