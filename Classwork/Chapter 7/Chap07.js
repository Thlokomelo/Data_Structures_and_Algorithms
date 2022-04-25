//The Dictionary Class

function Dictionary() {
    this.add = add;
    this.datastore = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
}
//Example 7-1 provides the definition of the Dictionary class up to this point.
//definition of the Dictionary class with this code:

function Dictionary() {
    this.add = add;
    this.datastore = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
}


function add(key, value) {
    this.datastore[key] = value;
}

function find(key) {
    return this.datastore[key];
}

function remove(key) {
    delete this.datastore[key];
}

function showAll() {
    for (const key of Object.keys(this.datastore)) {
        console.log(key + " -> " + this.datastore[key]);
    }
}

//Example 7-2. Using the Dictionary class

var pbook = new Dictionary();

pbook.add("Mike", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");

console.log("David's extension: " + pbook.find("David"));

// David's extension: 345

pbook.remove("David");
pbook.showAll();

// Mike -> 123
// Cynthia -> 456


//Auxiliary Functions for the Dictionary Class

function count() {
    var n = 0;
    for (const key of Object.keys(this.datastore)) {
        ++n;
    }
    return n;
}

var nums = new Array();
nums[0] = 1;
nums[1] = 2;

//Answer: 2

console.log(nums.length);
//Answer: 2

var pbook = new Array();

pbook["David"] = 1;
pbook["Jennifer"] = 2;

//Answer: 2

console.log(pbook.length);
//Answer: 0

//Example 7-3 updates the complete Dictionary class definition.
//Example 7-3. Updated Dictionary class definition

function clear() {
    for (const key of Object.keys(this.datastore)) {
        delete this.datastore[key];
    }
}

function Dictionary() {
    this.add = add;
    this.datastore = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;
}


function add(key, value) {
    this.datastore[key] = value;
}
function find(key) {
    return this.datastore[key];
}
function remove(key) {
    delete this.datastore[key];
}

function showAll() {
    for (const key of Object.keys(this.datastore)) {
        console.log(key + " -> " + this.datastore[key]);
    }
}


function count() {
    var n = 0;
    for (const key of Object.keys(this.datastore)) {
        ++n;
    }
    return n;
}


function clear() {
    for (const key of Object.keys(this.datastore)) {
        delete this.datastore[key];
    }
}

//Example 7-4 illustrates how these new auxiliary functions work.
//Example 7-4. Using the count() and clear() functions

function clear() { 
    for(const key of Object.keys(this.datastore)) {
 delete this.datastore[key];
 }
}

var pbook = new Dictionary();
pbook.add("Raymond","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");


console.log("Number of entries: " + pbook.count());
console.log("David's extension: " + pbook.find("David"));

//Number of entries: 3
//David's extension: 345

pbook.showAll();
pbook.clear();

//Raymond -> 123
//David -> 345
//Cynthia -> 456

console.log("Number of entries: " + pbook.count());

//Number of entries: 0


//Adding Sorting to the Dictionary Class

function showAll() {
    for(const key of Object.keys(this.datastore).sort()) {
    console.log(key + " -> " + this.datastore[key]);
    }
   }
 
   var pbook = new Dictionary();
   pbook.add("Raymond","123");
   pbook.add("David", "345");
   pbook.add("Cynthia", "456");
   pbook.add("Mike", "723");
   pbook.add("Jennifer", "987");
   pbook.add("Danny", "012");
   pbook.add("Jonathan", "666");
   pbook.showAll();
   
  // Cynthia -> 456
  // Danny -> 012
  // David -> 345
  // Jennifer -> 987
  // Jonathan -> 666
  // Mike -> 723
  // Raymond -> 123




