const courseObject = {
  nameKey: "js in hindi",
  priceKey: 999,
  courseInstructorKey: "hitesh"
};

console.log(courseObject["courseInstructorKey"]); //hitesh

// Obj desctructing to get value from key-name { key-name : new-alias-name} = obj-name;

const { courseInstructorKey } = courseObject;
console.log(courseInstructorKey); //hitesh

const { courseInstructorKey: instructor } = courseObject;
console.log(instructor); //hitesh
