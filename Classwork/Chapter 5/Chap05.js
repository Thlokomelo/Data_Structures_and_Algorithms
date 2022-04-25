//An Array-Based Queue Class Implementation

function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
    this.clear = clear;
}

function push(element) {
    this.dataStore[this.top++] = element;
}


function pop() {
    return this.dataStore[--this.top];
}


function peek() {
    return this.dataStore[this.top - 1];
}


function length() {
    return this.top;
}

function clear() {
    this.top = 0;
}

function Stack() {
    this.dataStore = [];
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
function peek() {
    return this.dataStore[this.top - 1];
}
function pop() {
    return this.dataStore[--this.top];
}
function clear() {
    this.top = 0;
}
function length() {
    return this.top;
}
undefined
names = [];


names.push("Cynthia");
names.push("Jennifer");


console.log(names);

names.shift();


console.log(names);


function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}
undefined
function enqueue(element) {
    this.dataStore.push(element);
}

undefined
function dequeue() {
    return this.dataStore.shift();
}


undefined
function front() {
    return this.dataStore[0];
}
undefined
function back() {
    return this.dataStore[this.dataStore.length - 1];
}

undefined
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

function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
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

var q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");

console.log(q.toString());

q.dequeue();

console.log(q.toString());

console.log(q.toString());

console.log("Back of queue: " + q.back());


//Using the Queue Class: Assigning Partners at a Square Dance

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

var dancers = [
    "F Allison McMillan",
    "M Frank Opitz",
    "M Mason McMillan",
    "M Clayton Ruff",
    "F Cheryl Ferenback",
    "M Raymond Williams",
    "F Jennifer Ingram",
    "M Bryan Frazer",
    "M David Durr",
    "M Danny Martin",
    "F Aurora Adney"
]

class Dancer {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}
var males = new Queue();
var females = new Queue();

function run (){
    getDancers();
    dance();
    noDancePartner();
    }

function getDancers() {
    var names = [];
    for (var idx = 0; idx < dancers.length; idx++) {
        var person = dancers[idx].split(" ")
        var firstName = person[1];
        var lastName = person[2];

        names[idx] = firstName + " " + lastName;
    }

    for (var i = 0; i < dancers.length; ++i) {
        var person = dancers[i].split(" ");
        var sex = person[0];
        var name = names[i];
        if (sex == "F") {
            females.enqueue(new Dancer(name, sex));
        }
        else {
            males.enqueue(new Dancer(name, sex));
        }
    }
}
//
function dance (){
    console.log("The dance partners are: \n");
    while (!females.empty() && !males.empty()) {
    person = females.dequeue();
    console.log("Female dancer is: " + person.name);
    person = males.dequeue();
    console.log(" and the male dancer is: " + person.name);
    console.log("\n");
    }
}
function noDancePartner (){
    console.log("\n");
    if (!females.empty()) {
    console.log(females.front().name + "is waiting to dance.");
    }
    if (!males.empty()){
    console.log(males.front().name + "is waiting to dance.");
    }
}

run();
//Displays the number of dancers in the queue

function count() {
    return this.dataStore.length;
    }

// Example 5.3

var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if (maleDancers.count() > 0) {
console.log("There are " + maleDancers.count() +
" male dancers waiting to dance.");
}
if (femaleDancers.count() > 0) {
console.log("There are " + femaleDancers.count() +
" female dancers waiting to dance.");
}
run();