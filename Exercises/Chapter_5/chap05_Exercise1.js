/*1. Modify the Queue class to create a Deque class. A deque is a queue-like structure
that allows elements to be added and removed from both the front and the back of
the list. Test your class in a program.*/


class Queue {
  constructor() {
      this.dataStore = [];
      this.enqueue = enqueue;
      this.dequeue = dequeue;
      this.front = front;
      this.back = back;
      this.toString = toString;
      this.empty = empty;
      this.count= count;
  }
}

function enqueue(element) {
  this.dataStore.push(element);
}
function dequeue() {
  return this.dataStore.shift();
}
function front() {
  return this.dataStore[0];
}
function back() {
  return this.dataStore[this.dataStore.length - 1];
}
function toString() {
  var retStr = "";
  for (var i = 0; i < this.dataStore.length; ++i) {
      retStr += this.dataStore[i] + "\n";
  }
  return retStr;
}
function empty() {
  if (this.dataStore.length == 0) {
      return true;
  }
  else {
      return false;
  }
}

Queue.prototype.addToFront = function(element) { //add to the front
  this.dataStore.unshift(element);
};

Queue.prototype.removeFromBack = function() { //remove from back
 return this.dataStore.pop();
};

var dequeue = new Queue();