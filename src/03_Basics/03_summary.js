
//1. DECLARATION

//call
run(); //NOTE: It can be used anywhere. 

//HOISTING - process in which JS Engine places all function declaration on top before executing.

function run(){
    console.log("run function for running zooom 🏃‍♀️")
}

//2. FUNCTION ASSIGNMENT

//stand(); //Error. Function Expression ke case mein function call cannot be upar

//NAMED
let stand = function walk(){ 
    console.log("🚶‍♀️ or 🧍‍♂️ - that is the question")
}

//ANONYMOUS
// let stand = function (){
//     console.log("🚶‍♀️ or 🧍‍♂️ - that is the question")
// }

//walk() //cannot be used. ReferenceError
stand();

let jump = stand;
jump();

//3. PARAMETERS

function sum(a, b){
    console.log(a + b);
}

sum(); //NaN = not a number
sum(3); //NaN
sum(3,4); //7
sum(3,4,5,6);//7

//3.1 arguments object.

function diff(a, b){
    console.log(arguments);
    console.log(a - b);
}
diff(3); //{0: 3} | NaN
diff(4,3); //{0: 4, 1: 3} | 1

//arguments not only takes the declare ones, extra ones given are also considered.
function sum2(a, b){
    let totalArgSum = 0;
    for(let arg of arguments)
        totalArgSum += arg;
    return totalArgSum;
}

console.log(sum2(1,2,3,4,5));

//4. default parameters
function interest(p, r=5, y=10){
    return p * r/100 * y;
}


//5. getters and setters

//issue: read only, fName & lName cannot be manipulated/
// function fullName(){
//     return `${person.fName} ${person.lName}`;
// }

// console.log(fullName());

let person = {
    fName: "Motu",
    lName: "Monster",

    //use get and set keywords

    get fullName(){
        return `${this.fName} ${this.lName}`;
    },

    set fullName(value){
        let words = value.split(' ');
        this.fName = words[0];
        this.lName = words[1];
    }
};

console.log(person.fullName); //getter called
let newName = "Bebu Don";
person.fullName = newName; //setter called
console.log(person.fullName); //getter called





=== Session Ended. Please Run the code again ===
