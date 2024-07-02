const tinderUser = new Object(); // Object creation using constructor method
tinderUser["id"] = "123abc";
tinderUser["name"] = "Siraj";
tinderUser["colors"] = ["pink", "blue", "yellow"];
tinderUser["isLoggedIn"] = false;

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

//Nested Object
const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Hitesh",
      lastname: "Chaudhary"
    }
  }
};

//We can use optional chainging to avoid the error: ?.
console.log(regularUser["fullname"]);
console.log(regularUser["fullname"]["userfullname"]["firstname"]); 
console.log(regularUser["fullname"]?.["userfullname"]?.["firstname"]); //accessing with null safety

console.log('\n'); ///////////////////////////////////////////////////////////////////////////////////////////


//Combining 2 objects

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 2: "a", 4: "b" };
const obj3 = { 2: "x", 5: "a" };

//1. SIMPLE
// const newObj = {obj1, obj2, obj3}; //object of objects
// console.log(newObj);

// //2. ASSIGN
// const newObj = Object.assign({}, obj1, obj2, obj3); //or Object.assign(obj1, obj2, ...);
// console.log(newObj);

//3. SPREAD OPERATOR
const newObj = { ...obj1, ...obj2, ...obj3};
console.log(newObj);

console.log('\n'); //////////////////////////////////////////////////////////////////////////////////////////

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

console.log('\n'); //////////////////////////////////////////////////////////////////////////////////////////

//Array of Objects
const users = [
  {
    id: 1,
    name: "sarfaraz"
  },
  {
    id: 2,
    name: "Hussain"
  },
  {
    id: 3,
    name: "Kamran"
  }
];

console.log(users[1]["name"]);
