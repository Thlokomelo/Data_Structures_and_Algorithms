//Exercises: Page 33

//Question 1
//Create a grades object that stores a set of student grades in an object. Provide a
//function for adding a grade and a function for displaying the student’s grade average.

function StudentGrades() {
    this.dataStore = [];
    this.add = add;
    this.average = average;
}

function add(Grades) {
    this.dataStore.push(Grades);
}

function average() {
    var total = 0;
    for (var i = 0; i < this.dataStore.length; ++i) {
        total += this.dataStore[i];
    }
    return total / this.dataStore.length;
}

var thisStudent = new StudentGrades();

thisStudent.add(60);
thisStudent.add(65);
thisStudent.add(51);
thisStudent.add(65);
thisStudent.add(54);
thisStudent.add(50);
thisStudent.add(42);
thisStudent.add(49);

console.log(thisStudent.average()); //Answer: 54.5

//Question 2
//Store a set of words in an array and display the contents both forward and backward.

//Forward display 
function concat(accumulatedString, item) {
    return accumulatedString + item;
}

var words = ["I ", "Love ", "Coding "];

var sentence = words.reduce(concat);


console.log(sentence); //Answer: Love Coding

//Backward display 
function concat(accumulatedString, item) {
    return accumulatedString + item;
}

var words = ["I ", "Love ", "Coding "];

var sentence = words.reduceRight(concat);

console.log(sentence); // Coding Love I 

//Question 3
// Modify the weeklyTemps object in the chapter so that it stores a month’s worth of data using a two-dimensional array.
// Create functions to display the monthly average, 
// a specific week’s average, 
// and all the weeks’ averages.

function weekTemps() {
    this.dataStore = [];
    this.add = add;
    this.average = average;
}

function add(temp) {
    this.dataStore.push(temp);
}

function average() {
    var total = 0;
    for (var i = 0; i < this.dataStore.length; ++i) {
        total += this.dataStore[i];
    }
    return total / this.dataStore.length;
}

var thisWeek1 = new weekTemps();
thisWeek1.add(20);
thisWeek1.add(21);
thisWeek1.add(31);
thisWeek1.add(41);
thisWeek1.add(30);
thisWeek1.add(26);
thisWeek1.add(17);

console.log(thisWeek1.average()); //Answer: 26.57 (displays specific weeks average)

var thisWeek2 = new weekTemps();
thisWeek2.add(22);
thisWeek2.add(23);
thisWeek2.add(24);
thisWeek2.add(25);
thisWeek2.add(26);
thisWeek2.add(28);
thisWeek2.add(19);

console.log(thisWeek2.average()); //Answer: 23.86 (displays specific weeks average)

var thisWeek3 = new weekTemps();
thisWeek3.add(22);
thisWeek3.add(23);
thisWeek3.add(24);
thisWeek3.add(25);
thisWeek3.add(26);
thisWeek3.add(28);
thisWeek3.add(19);

console.log(thisWeek3.average()); //Answer: 23.86 (displays specific weeks average)

var thisWeek4 = new weekTemps();
thisWeek4.add(24);
thisWeek4.add(22);
thisWeek4.add(28);
thisWeek4.add(20);
thisWeek4.add(32);
thisWeek4.add(28);
thisWeek4.add(20);

console.log(thisWeek4.average()); //Answer: 24.86 (displays specific weeks average)


var Temp = [[20, 21, 31, 41, 30, 26, 17], [22, 23, 24, 25, 26, 28, 19],
[22, 23, 24, 25, 26, 28, 19], [24, 22, 28, 20, 32, 28, 20]];

var total = 0;
var average = 0.0;
for (var row = 0; row < Temp.length; ++row) {
    for (var col = 0; col < Temp[row].length; ++col) {
        total += Temp[row][col];
    }
    average = total / Temp[row].length;
    console.log("Week " + parseInt(row + 1) + " average: " +
        average.toFixed(2));
    total = 0;
    average = 0.0;
}
// all the weeks’ averages:
// Week 1 average: 26.57
// Week 2 average: 23.86
// Week 3 average: 23.86
// Week 4 average: 24.86


//displays 5 rows and 7 columns 2 dimentional array
Temp; 

var MonthTemp = [26.57, 23.86, 23.86, 24.86];

//displays 5 rows and 7 columns 2 dimentional array
MonthTemp;  


function calculateAverage(array) {
    var total = 0;
    var count = 0;

    array.forEach(function(item, index) {
        total += item;
        count++;
    });

    return total / count;
}

//displays the monthly average
console.log(calculateAverage(MonthTemp)); // Annswer: 24.79

//displays a specific weeks average
console.log(calculateAverage(Week1)); //Answer: 26.57


//Question 4
//Create an object that stores individual letters in an array and has a function for
//displaying the letters as a single word.

function first(word) {
    return word[0];
   }

   var words = ["T","L","H","O","K","O","M","E","L", "O",];
   
   var acronym = words.map(first);

   console.log(acronym.join("")); //Answer: Tlhokomelo