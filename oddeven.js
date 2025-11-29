//Understand conditional statements in javascript - Number type.

function isOddOrEven(getValue)
{

  const number = getValue

  if (number % 2 == 0)
    {
      console.log("The input number "+number+" is even");
    } else {
      console.log("The input number "+number+" is odd");
    }
    return number;
}

console.log(isOddOrEven(-5));
