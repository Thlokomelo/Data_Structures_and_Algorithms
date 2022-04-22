function seqSearch(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
        document.write("<br>" + "<b>" + "Step 3 : " + "</b>" + " Searched Position: " + i + "<br/>");
        if (arr[i] == data) {
            return i;
        }
    }
    return -1;
}


/*function dispArr(arr) {                           //creates function to display contents of the array
    for (var i = 0; i < arr.length; ++i) {
        //console.log(arr[i] + " ");
        document.write(arr[i] + " "  + "<br>");
        if (i % 10 == 9) {
            console.log("\n");                    //prints new line

        }
    }
    if (i % 10 != 0) {
        console.log("\n");                       //prints new line
    }
}*/
function run() {
    var nums = [];                                                     //Declares the variable nums
    for (var i = 0; i < 10; ++i) {                                   //creates variable i and starts it at 0, and increments the variable by 1 if its less than 10
        nums[i] = Math.floor(Math.random() * 11);                        //creates a variable to store our array (nums) and creates our array using the random method

    }
    document.write("<br>" + "<b>" + "Step 1 : " + "</b>" + " The randomly generated array is: " + "<b>" + nums + "</b>" + "<br/>");
    var num = parseInt(prompt("Enter a number to search for: "));                              //creates a variable (num) to prompt for the number we are seraching for
    console.log();
    document.write("<br>" + "<b>" + "Step 2 : " + "</b>" + " The number entered for the search is: " + num + "<br/>")                                                      //then prints the number
    var position = seqSearch(nums, num);                                                      //creates a variable (position) and uses seqSerach function to find the position of the number in the array
    if (position > -1) {                                                                     //creates an argument that if the position is less than 1, then return the number and its position in the array
        document.write("<br>" + "<b>" + "Step 4 : " + "</b>" + num + " is in the array at position " + position + "<br/>");
    }
    else {
        document.write("<br>" + "<b>" + "Step 4 : " + "</b>" + num + " is not in the array." + "<br/>");                   //otherwise print as number is not in the array

    }

    console.log();
    document.write();
    // dispArr(nums);
}



