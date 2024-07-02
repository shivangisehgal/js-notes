
function func1(number1, number2) {
  return number1 + number2;
}

const result = func1(3, 4);
console.log("Result ", result);

//---------------------------------- ------------------

function loginUserMessage(username = "sam") { //default param
  if (!username) {
    console.log("Please enter username");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage()) //sam

//------------ function with objects (arrays) ------------------


// function calculatetCartPrice(num1) {
//   return num1;
// }
// console.log(calculatetCartPrice(200, 400, 500, 2000)); 
//ONLY 200 WILL BE PRINTED


// function calculatetCartPrice(...num1) {
//   return num1 ;
// }
// console.log(calculatetCartPrice(200, 400, 500, 2000)); 
//[200, 400, 500, 2000]


function calculatetCartPrice(val1, val2, ...num1) {
  return num1 ;
}
console.log(calculatetCartPrice(200, 400, 500, 2000)); 
//ONLT PRINTS [500, 2000]
