// 1. Ways to print in JavaScript
// console.log("Hello World");
// alert("me");
// document.write("this is document write")

// 2. Javascript console API
// console.log("Hello World", 4 + 6, "Another log");
// console.warn("this is warning");              

// console.error("This is an error");

// 3. JavaScript Variables
// What are Variables? - Containers to store data values

/*
multi 
line 
commment
*/

var number1 = 34;
var number2 = 56;
// console.log(number1 + number2);

// 4. Data types in JavaScript
// Numbers
var num1 = 455;
var num2 = 56.76;

// String
var str1 = "This is a string";
var str2 = 'This is also a string';

// Objects
var marks = {
    ravi: 34,
    shubham: 78,
    harry: 99.977

}
// console.log(marks);

// Booleans
var a = true;
var b = false;
// console.log(a, b);

// var und = undefined;
var und;
// console.log(und);

var n = null;
// console.log(n);
/*
At a very high level, there are two types of data types in JavaScript
1. Primitive data types: undefined, null, number, string, boolean, symbol, Bigint
2. Reference data types: Arrays and Objects
*/

// var arr = [1, 4, "bablu", 2, 5]
//  console.log(arr);
// console.log(arr.length);
//console.log(arr[2])
// arr=arr.short();
// arr.push("this is pushed")
// arr.pop("bablu")

// Operators in JavaScript

// Arithmetic Operators
var a = 100;
var b = 10;
// console.log("The value of a + b is ", a+b);
// console.log("The value of a - b is ", a-b);
// console.log("The value of a * b is ", a*b);
// console.log("The value of a / b is ", a/b);

// Assignment Operators
var b = 5;
var c = b;
// c += 2;
// c -= 2; // c = c - 2;
// c *= 2;
// c /= 2;
// console.log(c);

// Comparison Operators
var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// Logical Operators

// Logical and
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// Logical or
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// Logical not
// console.log(!false);
// console.log(!true);

// Function in JavaScript
function avg(a, b) {
    c = (a + b) / 2;          // first define function
    return c;
}
//console.log(avg(4,6));
c1 = avg(4, 6);              //  call function
c2 = avg(14, 16);
console.log(c1, c2);         //  print

// Arrow Functions
function sum(a, b) {       // normal function
    return a + b;
};
console.log(sum(3, 8));

let sum1 = (a, b) => {       // Arrow function
    return a + b;
};
console.log(sum(3, 8));

let sum2 = (a, b) => a + b;   // arrow function in short cut
console.log(sum2(3, 8));

let half = a => a / 2
console.log(half(8));

function greet() {
    console.log('Good morning');
}

let greet = () => console.log('Good morning');

greet();
setTimeout(() => {
    console.log('we are inside settimeout')
},3000);

let  obj1={
    geeting: "Good morning",
    names: ["Rohit", "Rohan","skillf","Djkhiladi"],
    speak(){
        this.names.forEach((student)=>{
              console.log(this.geeting + "kukdoo koo " + student);
        });
    }
}

// DRY = Do not repeat yourself 
c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1, c2);

// Conditionals in JavaScript
/*
var age = 41;
// Single if statement
if(age > 18){
    console.log('You can drink rasna water');
}
// if - else statement
// if(age > 18){
//     console.log('You can drink rasna water');
// }
// else{
//     console.log('You cannot drink rasna water');
// }

var age = 25;
// if-else Ladder
if(age > 32){
    console.log("You are not a kid");
}
else if(age >26){
    console.log("Bachhe nahi rahe");
}
else if(age >22){
    console.log("Yes Bachhe nahi rahe");
}
else if(age >18){
    console.log("18 Bachhe nahi rahe");
}
else{
    console.log("Bachhe rahe");
}
console.log("End of ladder");
*/

//loops in javasript
var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i])
// }

// arr.forEach(function(element){
//     console.log(element);
// })
// const ac = 0;
// ac++;
// ac = ac +1;
// let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j ++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

let myArr = ["Fan", "Camera", 34, null, true];
// Array Methods

// console.log(myArr);
// console.log(myArr.length);
// myArr.pop();                          <<<<< pichhe se delete
// myArr.shift()                          <<<< aage se delete
// myArr.push("harry")
// myArr=arr.short();
// const newLen = myArr.unshift("Harry")  <<<<< aage se harry dalna
// console.log(newLen);
//console.log(myArr[2])
//console.log(myArr.indexOf("Camera"));
//let reversed=myArr.reverse();
//console.log(myArr.toUpperCase);          <<<<<  all capital letter
//console.log(myArr.toLowerCase);          <<<<<  all smalll letter

//Slice and splice function in array
//Slice     0        1        2         3       4
let a = ["sanjay", "aman", "rehman", "rahul", "karan"];      //new arr isko mita kar new arry banayega
//slice(start,end)       >>>>>>>>>formula
//let b=a.slice(1,4);     >>>>>>>>>aman,rehman,rahul
//let b=a.slice(1);      >>>>>>>>>aman,rehman,rahul,karan
//let b=a.slice(-2);     >>>>>>>>>rahul,karan
//let b=a.slice(-3);     >>>>>>>>>rehman,rahul,karan
//let b=a.slice(-3,-1);  >>>>>>>>>rehman,rahul
console.log(b)
//splice
let a = ["sanjay", "aman", "rehman", "karan"];
//splice(indexnu,deletenu,"new value") >>>formula  
//a.splice(2,0,"neha","karan")         >>>sanjay,aman,neha,karan,rehman,rahul,karan
//a.splice(2,1,"neha","karan")         >>>sanjay,aman,neha,karan,karan
//a.splice(-2,1,"neha","karan")       >>>>sanjay,aman,neha,karan,karan
//a.splice(2,2)                      >>>>>sanjay,aman
//  console.log(a)

// String Methods in JavaScript
let myLovelyString = "Harry is a good boy good good Harry";

// console.log(myLovelyString.length)
// console.log(myLovelyString.indexOf("good"))
// console.log(myLovelyString.lastIndexOf("good"))

// console.log(myLovelyString.slice(1,4))
d = myLovelyString.replace("Harry", "Rohan");
// d = d.replace("good", "bad");
// console.log(d, myLovelyString)

let myDate = new Date();
//console.log(myDate.getFullYear());
// console.log(myDate.getTime());
// console.log(myDate.getDay());
// console.log(myDate.getHours());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());

// DOM Manipulation
let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName("container")
// console.log(elemClass);
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")
// console.log(elem.innerHTML);
// console.log(elem.innerText); 

 console.log(elemClass[0].innerHTML);
 console.log(elemClass[0].innerText); 

tn = document.getElementsByTagName('div')
// console.log(tn)

createdElement = document.createElement('p');
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);

createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);
// removeChild(element); ---> removes an element

// Selecting using Query
// sel = document.querySelector('.container')     >>>>>one element select
// console.log(sel)
// sel = document.querySelectorAll('.container')  >>>>>All element select
// console.log(sel)

// function clicked(){
//     console.log('The button was clicked')
// }
// window.onload = function(){
//     console.log('The document was loaded')

// }
Events in JavaScript
// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Clicked on Container")
// })

// firstContainer.addEventListener('mouseover', function(){
//     console.log("Mouse on Container")
// })

// firstContainer.addEventListener('mouseout', function(){
//     console.log("Mouse out of Container");
// })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on Container");
// })

// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Mouse down when clicked on Container");
// })


// Arrow Functions
// function summ(a, b){
//     return a+b;
// }                                             
summ = (a, b) => {
    return a + b;
}

logKaro = () => {
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
    console.log("I am your log")
}
// SetTimeout and setinterval
// clr = setTimeout(logKaro, 5000);
// clr = setInterval(logKaro, 2000);          
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

// JavaScript localStorage
// localStorage.setItem('name', 'harry') 
// localStorage 
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();

//Javascript SessionStroage
// sessionStorage.getItem("name")
// sessionStorage.clear()
// sessionStorage.removeItem("name")
// sessionStorage.setItem("name", "harry")
// sessionStorage.removeItem("name")
   window.onstorage = (e) => {
    alert("changed")
    console.log(e)
   }

// Json      javascript object notation
// obj = {name: "harry", length: 1, a: {this: 'tha"t'}}
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
// console.log(parsed);

// Template literals - Backticks
a = 34;
console.log(`this is my ${a}`)   // $ convert number to string