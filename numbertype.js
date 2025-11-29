//Understand conditional statements in javascript - Number type.

function checkNum(number)
{

  if (number > 0) 
  {
    console.log("The input " +typeof(number)+ " "+number+" is positive");
    
  }else if (number < 0) {
    console.log("The input " +typeof(number)+" "+number+" is negative");
    
  }else {
    console.log("The input " +typeof(number)+" "+number+" is neutral");
   
}
return number;
}

//checkNum('abc')
console.log(checkNum(10));

/*function sum(a,b){
  let c;
  c= a+b;
  return c;
}

console.log(sum(1,3))*/
