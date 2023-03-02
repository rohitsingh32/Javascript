// spread and rest operator (...)
//spread in arry
let list = ["Audi", "Honda","BMW"];

let newList = ["ferrari", ...list];

console.log(newList);

//spread in object
let person = {
    name: "Ram",
    age: 28
}

let newperson = {
    ...person,
    city: "delhi"
}

console.log(newperson);

// rest operator

function hello(...all){
    console.log(all);
}
hello(1,2,3,4,5,6,7);


// Array Destructuring

let list1 = ["Audi", "BMW", "Honda"];

let [car1, ,car2] = list1;

console.log(car2);

// Object Destructuring

const person1 = {
    name: "Ram",
    age: 28
}

let {name, age} = person1;

console.log(name);