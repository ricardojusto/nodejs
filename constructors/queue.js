function Queue() {
  this.queue = [];
}

Queue.prototype.unshift = function(value) {
  this.queue.unshift(value);
 };

Queue.prototype.pop = function(value) {
  this.queue.pop(value);
 };


var val = new Queue();

val.unshift(1);
val.unshift(2);
val.unshift(3);
val.unshift(4);
val.unshift(9);
val.pop(1);

console.log(val);