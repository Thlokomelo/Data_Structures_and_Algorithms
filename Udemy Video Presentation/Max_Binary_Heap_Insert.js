class MaxBinaryHeap {                                                       //Defines the class
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];                                               //Defines the property (values): initialises the heap/array
    }
    insert(element) {                                                      //creates the insert method
        this.values.push(element);                                         //Takes an element and inserts it into our array of values, and pushes it to the end
        document.write("<br>" + "<b>" + "Step 2 : " + "</b>" + "Inserted element is: " + element + "<br/>");
        this.bubbleUp(); 
                                                          //Defines the bubbleUp method
    }
    bubbleUp() {
        let idx = this.values.length - 1;               //creates a variable called idx and finds the last element in our array
        const element = this.values[idx];               //creates a variable to store the element
        while (idx > 0)                                 //creates a while loop that determines if the element should be swaped or not
        {                            

            let parentIdx = Math.floor((idx - 1) / 2);  //finds the parent of the element
            let parent = this.values[parentIdx];        //compares the element to the parent
            if (element <= parent) break;               //If less stop the loop 
            document.write("<br>" + "<b>" + "Step 3 : " + "</b>" + " Compare element " + element + " with parent  " + parent + "<br>" +  "=> " + " Break the loop if  " +  element  + " is smaller than " + parent + "<br/>");
            this.values[parentIdx] = element;           //Otherwise make the idx the parent
            this.values[idx] = parent;
            idx = parentIdx;
            document.write("<br>" + "<b>" + "Step 4 : " + "</b>" + " Element " + element + " is larger than parent " + parent + "<br>" +  "=> " +  " Continue with bubble up and swap " + element + " with parent " + parent + "<br/>");  //Prints swapped parents/Values compared to the inserted element for swapping
           
        }
    }
}

function run() {
    let heap = new MaxBinaryHeap();        //creates the heap/array                
    //console.log(heap);
    document.write("<br>" + "<b>" + "Step 1 : " + "</b>" + " Heap/Array before insert: " + "<br>" + "<b>" + "=> " + JSON.stringify(heap) + "</b>" + "<br/>"); //Prints the heap before insertion method, JSON.stringify() converts and object into a string.
    let element = 55;
    heap.insert(55);                       //inserts our element (55) into our array
    //console.log(heap); 
    document.write("<br>" + "<b>" + "Step 6 : " + "</b>" + " Final Heap/Array after all inserts: " + "<br>" + "<b>" + "=> " + JSON.stringify(heap) + "</b>" + "<br/>");  ////Prints the heap after insertion method, JSON.stringify() converts and object into a string.
}

//document.write("<br>" + "<b>" + "Step 5 : " + "</b>" + " Heap/Array after insert: " + "<br>" + "<b>" + "=> " + JSON.stringify(heap) + "</b>" + "<br/>");