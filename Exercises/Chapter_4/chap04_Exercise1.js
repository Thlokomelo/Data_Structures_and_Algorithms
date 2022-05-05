/*1. A stack can be used to ensure that an arithmetic expression has balanced paren‐
theses. Write a function that takes an arithmetic expression as an argument and
returns the postion in the expression where a parenthesis is missing. An example
of an arithmetic expression with unbalanced parentheses is 2.3 + 23 / 12 + (3.14159
* .24. */


function Stack() {
  this.top = 0;
 this.push = push;
 this.pop = pop;
 this.peek = peek;
 this.clear = clear;
 this.length = length;
}

 function push(element) {
  this.dataStore[this.top++] = element;
 }
 
 function pop() {
  return this.dataStore[--this.top];
 }

 function peek() {
  return this.dataStore[this.top-1];
 }
 
 function length() {
  return this.top;
 }

 function clear() {
  this.top = 0;
 }

 function length() {
  return this.top;
 }
 

var ns = new Stack();
var expression = "2.3 + (23 / 12 + 3.14159 * .24";

missingParen(expression);

function missingParen(expression) {
  var ns = new Stack();

  for (var i = 0; i < expression.length; i++) {
    if (expression[i] === "(") {
      ns.push(i);
    }

    if (expression[i] === ")") {
      if (ns.pop() === undefined) { 
        console.log("Mismatched ) at " + i); 
      }
    }
  }

  if (ns.length() === 0) { 
    console.log("no mismatching parens!");
  } else if (ns.length() === 1) {
    console.log("Mismatching ( at position " + ns.peek());
  }
}