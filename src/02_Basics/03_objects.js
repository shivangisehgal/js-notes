const mySym = Symbol("key1");

// Object literals
const JsUser = {
  name: "Hitesh",
  "full name": "Hitesh Chaudhary",
  [mySym]: "mykey1", //[Symbol(key1)]: 'mykey1'
  age: 18,
  location: "Jaipur",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDay: ["Monday", "Saturday"]
};

console.log(JsUser["name"]);
console.log(JsUser["full name"]);
console.log(JsUser["mySym"]); //undefined
console.log(JsUser[mySym]); //mykey1
console.log(typeof JsUser[mySym]); //string

console.log('\n');

JsUser.email = "hitesh@chatgpt.com"
console.log(JsUser);

console.log('\n');

//Object.freeze(JsUser); //new changes would not occur
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser); //same as previous, no error

console.log('\n');

//Function as a key

JsUser.greeting = function () {
  console.log("Hello JS User");
};
 
console.log(JsUser.greeting); //Op.: [Function (anonymous)] -> Reference of a function
JsUser.greeting(); //Op.: Hello JS User -> Instance of the function

console.log('\n');


// JsUser.greetingTwo = function () {
//   console.log(`Hello JS User, ${this.name}`);
// };
