// function User(name, email) {
//  this.name = name;
//  this.email = email;
// }
// var john = new User("John", "john@example.com");
// john.name; // "John"

// function Person(name) {
//  this.name = name;
// }
// Person.prototype.sayHi = function() {
//  return "Hello, I'm " + this.name;
// }
// var john = new Person("John", "john@example.com");
// john.sayHi();
// // "Hello, I'm John"

// 

function Stack() {
  this.stack = [];
}

Stack.prototype.push = function(value) {
  this.stack.push(value);
 };

 Stack.prototype.pop = function(value) {
  this.stack.pop(value);
 };


var val = new Stack();

val.push(1);
val.push(2);
val.push(3);
val.push(4);
val.push(9);
val.pop(1);

console.log(val);

