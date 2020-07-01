"use strict";

let Car = function (color) {
  this.color = color;

  //add getColor method to Car Object
  /*
  this.getColor = function () {
    return this.color;
  };
  */

  //add getColor to prototype __proto__
  Car.prototype.getColor = function () {
    return this.color;
  };
};

//override toString which is global master object in js
Object.prototype.toString = function (color) {
  return `color is ${color}`;
};

let redCar = new Car("red");

console.log(redCar);
console.log(redCar.toString("blue"));
