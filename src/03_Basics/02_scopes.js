let a = 10;
const b = 20;
var c = 30;

var c = 300;
//let a = 300; //error

if (true) {
  let a = 11;
  const b = 30;
  var c = 40;
  // console.log("Inner: ", a);
}

console.log(a)
console.log(b)
console.log(c)


//-------------- Scope level and mini hoisting ----------------

// //Scope using functions

function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username); //hitesh
  }
  
  //console.log(website); //error
  two();
}

one();

//--------------

// Scope using if statements

if (true) {
  const username = "hitesh";
  
  if (username === "hitesh") {
    const website = "   youtube";
    console.log(username + website); //hitesh   youtube
  }
  
  //console.log(website); //error
}

//console.log(username); //error



//---------------- Intro to Hoisting ------------------

//M1 Basic function
console.log(addone(5)); //6

function addone(num) {
  return num + 1;
}

console.log(addone(5)); //6

//M2: function expression

//console.log(addTwo(5)); //error

const addTwo = function (num) { //
  return num + 2;
};

console.log(addTwo(5)); //7

