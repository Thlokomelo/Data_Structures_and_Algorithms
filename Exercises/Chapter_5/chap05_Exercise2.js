/*2. Use the Deque class you created in Example 5-1 to determine if a given word is a
palindrome.*/

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


var word = "driver";

function isPalindrome(testword) {
  for (var i = 0; i < testword.length; i++) {
    dequeue.enqueue(testword[i]);
  }
  var rword = "";
  for (var j = 0; j < testword.length; j++) {
    rword += dequeue.removeFromBack();
  }

  if (rword === word) {
    console.log(word + " is a palindrome!");
  } else {
    console.log(word + " is not a palindrome.");
  }
}

isPalindrome(word);