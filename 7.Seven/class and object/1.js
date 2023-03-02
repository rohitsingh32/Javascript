// What are the ES6 Classes?
// ES6 Classes is the common JavaScript pattern of getting the class-like inheritance hierarchies using functions
//  and prototypes. They are effectively simple compared to prototype-based OO, offering a convenient declarative 
//  form for class patterns that encourage interoperability.

// Here is an example of ES6 Classes in javaScript:

class SimpleDate {
    constructor(year, month, day) {
      this._year = year;
      this._month = month;
      this._day = day;
    }
    addMonth(nMonths) {
    }
    getMonth() {
      return this.month;
    }
  }

//   Constructors:-
// The constructor method's purpose is to initialize an instance to a valid state, and it will be called automatically, 
// so we cannot forget to initialize our objects. The constructor function is an object blueprint. From the above example,
//  the following is the constructor of class SimpleDate:

constructor(year, month, day); {
    this._year = year;
    this._month = month;
    this._day = day;
  }

//   Defining Methods:-
// The common practice is to assign methods directly to the prototype instead of in the initialization. But, with classes, 
// this syntax is simplified, and we can add the method to the class. Using the method definition introduced in ES6 JavaScript,
//  defining a method is an even more easy and concise process.

class Car {
 constructor(name,year ) {
        this.name = name;
        this.year = year; 
}
greet() {
        return `${this.name} says hello.`;
}}

// We will create a new instance of Car using the new keyword and assign some values.

const car1 = new Car('Audi', 2018);
// Inheritance:-
// Inheritance is one of the most important concepts of object-oriented programming. The significant advantage of using ES6 classes over pre-ES6 
// functions is that class definitions are cleaner and easy to inherit. Without writing prototype code for an inheritance, class inheritance in
//  JavaScript is easier and similar to other object-oriented languages like Java. Following is the way of applying the inheritance concept in 
//  javaScript:

// Extending a Class:-
// The most useful feature of constructor functions and classes is that they can be extended into new object blueprints based on the parent. 
// Before es6, the new constructor functions can be created from the parent using the call() method. However, with the help of ES6 classes,
//  the super keyword is used in place of the call to access the parent functions. We will use the extends keyword to refer to the parent class.

//new class from the parent

class Bike extends Car {
 constructor(name,year,speed) {
        //constructor with super
        super(name, year);
        // Adding new property
        this.speed = speed;
}}

// Now we create a new Bike instance in the same manner.

const bike1 = new Bike(' Trek', 2019,200);
// Conclusion:-
// In this tutorial, we learned about the similarities and differences between JavaScript constructor functions and ES6 classes. 
// Being familiar with classes is extremely helpful, as this makes the coding easier.