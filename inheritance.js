// The console.dir() method output the list of object properties
console.dir(Object); // master object in js

function Animal() {}

//add methods to Animal using prototype
Animal.prototype.setAge = function (age) {
  this.age = age;
};
Animal.prototype.getAge = function () {
  return this.age;
};

//setter & getter with Animal
Animal.prototype.setAge(10);
console.log(Animal.prototype.getAge());

//inheritance with prototype reference using create method
function Cat() {}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.setAge(30);
console.dir(Cat.prototype.getAge());

//create object with Cat
let siameCat = new Cat();

console.log(siameCat instanceof Cat); //true
console.log(siameCat instanceof Animal); //true
console.log(siameCat instanceof Object); //true

console.dir(Object.prototype.isPrototypeOf(siameCat)); //true
console.dir(Animal.prototype.isPrototypeOf(siameCat)); //true
console.dir(Cat.prototype.isPrototypeOf(siameCat)); //true
