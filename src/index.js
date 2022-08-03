import "./styles.css";

// https://youtu.be/2ZphE5HcQPQ

//Basic

/*
class Rectangle {
  constructor(_width, _height, _color) {
    console.log("The Rectangle is being created!");

    this.width = _width;
    this.height = _height;
    this.color = _color;
  }

  getArea() {
    return this.width * this.height;
  }

  printDescription() {
    console.log(
      `I am a rectangle of ${this.width} x ${this.height} and I am ${this.color}`
    );
  }
}

let myRectangle1 = new Rectangle(5, 3, "blue");
let myRectangle2 = new Rectangle(10, 5, "red");

//console.log(myRectangle1);

//console.log(myRectangle1.getArea());
//console.log(myRectangle2.getArea());

myRectangle1.printDescription();
*/

// getters and setters
/*
class Square {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
    this.numOfRequestsForArea = 0;
  }

  get area() {
    this.numOfRequestsForArea++;
    return this.width * this.height;
  }

  set area(area) {
    this.width = Math.sqrt(area);
    this.height = this.width;
  }
}

let square1 = new Square(425);
console.log(square1.area);

square1.area = 25;
console.log(square1.area);
console.log(square1.area);
console.log(square1.area);
console.log(square1.area);
console.log(square1.area);
console.log(square1);
*/

// static method
/*
class Square {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
  }

  static equals(a, b) {
    return a.width * a.height === b.width * b.height;
  }

  static isValidDimensions(width, height) {
    return width === height;
  }
}

let square1 = new Square(8);
let square2 = new Square(8);

console.log(Square.equals(square1, square2));
console.log(Square.isValidDimensions(6, 8));
*/

// parent and child class
/*
class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  describe() {
    console.log(`I am ${this.name} and I am ${this.age} years old`);
  }
}

class Programmer extends Person {
  constructor(_name, _age, _yearsOfExperience) {
    super(_name, _age);
    this.yearsOfExperience = _yearsOfExperience;
  }

  code() {
    console.log(`${this.name} is coding`);
  }
}

//let person1 = new Person("Jeff", 45);
//let programmer1 = new Programmer("Dom", 56, 12);

//console.log(person1);
//console.log(programmer1);

//person1.describe();
//programmer1.code();
//programmer1.describe();

const programmers = [
  new Programmer("Dom", 56, 12),
  new Programmer("Jeff", 24, 4)
];

function developSoftware(programmers) {
  for (let programmer of programmers) {
    console.log(programmer);
    programmer.code();
  }
}

developSoftware(programmers);
*/

// class: polymorphism
/*
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Generic Animal Sound!");
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    super.makeSound();
    console.log("왈 왈");
  }
}

const a1 = new Animal("Dom");
a1.makeSound();

const a2 = new Dog("Jeff");
a2.makeSound();
*/

class ListBinding {
  constructor(element) {
    this.listElement = element;
    //this.textList = ["dcode", "bottle"];
    this.textList = [];
  }

  static createListItem(text) {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
  }

  update() {
    while (this.listElement.firstChild) {
      this.listElement.removeChild(this.listElement.firstChild);
    }

    for (const text of this.textList) {
      this.listElement.appendChild(ListBinding.createListItem(text));
    }
  }

  add(text) {
    this.textList.push(text);
    this.update();
  }

  remove(index) {
    this.textList.splice(index, 1);
    this.update();
  }
}

const myList = document.getElementById("myList");
const listBinding = new ListBinding(myList);

//listBinding.update();

listBinding.add("dcode");
listBinding.add("dog");
listBinding.add("bottle");

listBinding.remove(1);
