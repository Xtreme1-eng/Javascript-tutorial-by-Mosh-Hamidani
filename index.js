
let person = {
    name: "victor", 
    age: 30
};

// Dot Notation
person.name = "john";

// Bracket Notation
let selection = "name";
person[selection] = "mary";

console.log(person.name);

let selectedColors = ["red", "blue"];
selectedColors[2] = 1;
console.log(selectedColors.length);

// Performing a task
function greet(name, lastName) {
    console.log("Hello " + name + " " + lastName);
}
//calculating a value
funtion square(number) {
    return number * number;
}


console.log(square(2));
