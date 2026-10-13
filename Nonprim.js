
// Object

let Student = {
    name : "Sahil Atram",
    id : 12,
    age : 23,
    gender : "Male",
    Graduation : "B.Tech in computer science - iot"
};

console.log(Student);

// Array

let fruits = ["Apple", "Mango", "Grapes", "Banana"];

console.log(fruits[0]);

console.log(fruits[3]);


// Functions

// function greet(){
//     console.log("Hello Sahil");
// }

// greet();


function Students() {
    console.log("Student function");
}

function StudentDetails(Name, age) {
    console.log("Name:", Name);
    console.log("Age:", age);
}

Students();
StudentDetails("Sahil", 23);