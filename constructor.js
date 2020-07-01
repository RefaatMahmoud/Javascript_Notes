"use strict";

let User = function (name) {
  if (!new.target) throw "User() must be called with new keyword";
  this.name = name;
};

let userOne = new User("refaat");

console.log(userOne);
