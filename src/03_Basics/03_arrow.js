//think you are asking user to register, so creating an user object

const user = {
  username: "hitesh",
  price: 999,
  welcomeMessage: function () {
    console.log(this); 
  }
};

user.welcomeMessage(); //this gives the current context, which is this object
user["username"] = "sam"
user.welcomeMessage(); //changed context 

console.log(this); //empty object, context of node is empty.

//Not able to access this keyword in normal function
/*
function chai(){
    let username = "hitesh"
    console.log(this.username);
}
chai();
*/


//Not able to access this keyword in function expression
/*
const chai = function(){
    let username = "Hitesh"
    console.log(this.username);
}
chai();
*/

// Arrow function

const chai = () => {
    let username = "Hitesh"
    console.log(this.username);
}
chai(); //undefined, context is not defined in arrow function.

// arrow function with return/explicit return

const addTwo = (num1, num2) => {
    return num1 + num2;
}

// arrow function implicit

const addTwoImplicit = (num1, num2) => num1 + num2;

// implicit arrow function with paranthesis
const addTwoImpBracket = (num1, num2) => (num1 + num2);
console.log(addTwoImpBracket(5, 6)); //11

// IMPLICIT ARROW FUNCTIONS HAVING OBJECTS NEED TO USE PARENTHISES, else undefined.
const sampleaddTwo = (num1, num2) => ({ username: "hitesh" });
console.log(sampleaddTwo(3, 4));
