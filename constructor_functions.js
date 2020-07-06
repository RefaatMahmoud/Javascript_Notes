let Cat = function (name) {
  this.name = name;
  this.sound = "Meow";
};

//constructor functions invoked using new keyword
let cat = new Cat("tom");
console.log(cat.sound);

/*
Constructor functions also have a prototype property which points to an object whose properties are automatically
inherited by all objects created with that constructor
*/

Cat.prototype.speak = function () {
  return this.sound;
};

console.log(cat.speak());

/*
Objects created by constructor functions also have a special property on their prototype called constructor , which
points to the function used to create them
*/

console.log(cat.constructor); // return Cat function

//Note: cat instanceOf Cat

var a;
console.log(typeof a === "undefined"); // logs: true
