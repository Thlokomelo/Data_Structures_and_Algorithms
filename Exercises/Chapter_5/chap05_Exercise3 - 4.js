/*3. Modify the priority queue example from Example 5-5 so that the higher-priority
elements have higher numbers rather than lower numbers. Test your implementa‐
tion with the example in the chapter.*/


/*4. Modify the ED example (Example 5-5) so the user can control the activity in the
ED. Create a menu system that allows the user to choose from the following activ‐
ities:
a. Patient enters ED.
b. Patient is seen by doctor.
c. Display list of patients waiting to be seen. */

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

function Patient(name, code) {
  this.name = name;
  this.code = code;
  this.toString = function() {
    return 'code ' + this.code + ' ' + this.name;
  }
}

// the lower the number, the higher the priority
Queue.prototype.priorityDequeue = function() {
	var ds = this.dataStore;
  var priority = ds[0].code;
	for (var i = 1; i < ds.length; ++i) {
		if (ds[i].code < priority) priority = i;
  }
	return ds.splice(priority, 1);
}

// highest priority element is the one with the lowest priority code
function dequeue(ER) {
  var priority = ER.dataStore[0].code;
  for (var i = 1; i < ER.dataStore.length; i++) {
    if (ER.dataStore[i].code < priority) priority = i;
  }
  console.log('\n!!!PRIORITY QUEUE!!!')
  return ER.dataStore.splice(priority, 1);
}

var ed = new Queue();
ed.enqueue(new Patient('Smith', 5));
ed.enqueue(new Patient("Jones", 4));
ed.enqueue(new Patient("Fehrenbach", 6));
ed.enqueue(new Patient("Brown", 1));
ed.enqueue(new Patient("Ingram", 1));

console.log('Patient list to start:');
console.log(ed.toString());

var seen = ed.dequeue();
console.log("\nPatient being treated:");
console.log(seen.name);
console.log("\nPatients waiting to be seen:");
console.log(ed.toString());


function useDequeue() {
  for (var i = 1; i <= 3; i++) {
    var seen = dequeue(ed);
    console.log("Patient being treated:\n" + seen[0].name); 
    console.log("\n__Patients waiting to be seen:")
    console.log(ed.toString());
  }
}
function usePriorityDequeue() {
  for (var i =1; i <= 3; i++) {
    var seen = ed.priorityDequeue();
		console.log();
    console.log("Patient being treated:");
	  console.log(seen.name); 
    console.log("\n__Patients waiting to be seen:")
    console.log(ed.toString());
	}
}