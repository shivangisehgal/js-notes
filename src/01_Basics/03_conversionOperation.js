//---- Tricky conversion

console.log("1" + 4 + 2); //142, string
console.log(1 + "4" + 2); //142, string
console.log(1 + 4 + "2"); //52, string

console.log(1 + 4 + "2" + 3 + 8); //5238, string

console.log("1" + false); // 1false
console.log(false + "1"); // false1
console.log(false + "1" + 2 + 4);// false124, same thing as above

console.log(false + 2 + 4 + "1"); // 61, string | when false is added with number, it is treated as 0, SAME FOR NULL
console.log(true + 2 + 4 + "1");// 71, string | when false is added with number, it is treated as 1

console.log(true + 2 + 4 + "1" + 3 + 8);// 7138

console.log(null + "1" + 2);// null12
console.log(null + 1 + "2" + 5 + 8);// 1258

//HENCE,
//STRING SE PEHLE => MATHS for numbers, STRING for rest
//STRING KE BAAD => STRING (in between of two strings mein bhi same)
