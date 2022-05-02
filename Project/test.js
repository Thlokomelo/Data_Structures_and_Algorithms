//Stock array defined
var stock = [];
//Cart array defined
var cart = [];
//Order array
var order = [];
//Order number
var orderNumber = 22;

//Stock function
var Stock_Item = function (stock_id, stock_name, stock_price, quantities) {
  this.stock_id = stock_id;
  this.stock_name = stock_name;
  this.stock_price = stock_price;
  this.quantities = quantities;
};

//Cart item function
var Cart_Item = function (stock_id, stock_name, stock_price, quantities) {
  {
    this.stock_id = stock_id;
    this.stock_name = stock_name;
    this.stock_price = stock_price;
    this.quantities = quantities;
  }
};

//Order function
var Order = function (stock_id, stock_name, stock_price, quantities) {
  this.stock_id = stock_id;
  this.stock_name = stock_name;
  this.stock_price = stock_price;
  this.quantities = quantities;
};

//Stock items
var stock_item_1 = new Stock_Item(01, "Kit_Kat", 10.0, 1);
var stock_item_2 = new Stock_Item(02, "Juice", 12.0, 1);
var stock_item_3 = new Stock_Item(03, "Fizzy-Drink", 14.0, 1);
var stock_item_4 = new Stock_Item(04, "Lolly_pop", 5.0, 1);
var stock_item_5 = new Stock_Item(05, "White-Bread", 15.0, 1);
var stock_item_6 = new Stock_Item(06, "Mince", 80.0, 1);
var stock_item_7 = new Stock_Item(07, "Butter", 22.0, 1);
var stock_item_8 = new Stock_Item(08, "Cream", 35.0, 1);
var stock_item_9 = new Stock_Item(09, "Soup", 6.0, 1);
var stock_item_10 = new Stock_Item(10, "Macarroni", 35.0, 1);

//Inserts stock items into stock array
stock.push(
  stock_item_1,
  stock_item_2,
  stock_item_3,
  stock_item_4,
  stock_item_5,
  stock_item_6,
  stock_item_7,
  stock_item_8,
  stock_item_9,
  stock_item_10
);

//Add function
function add_selection(i) {
  // populate cart  array with objects?
  if (cart.length == 0) {
    cart.push(
      new Cart_Item(
        stock[i].stock_id,
        stock[i].stock_name,
        stock[i].stock_price,
        1
      )
    );
    display_all();
    return;
  } else {
    // check every element in the cart for increasing
    for (j = 0; j < cart.length; j++) {
      if (cart[j].stock_id == stock[i].stock_id) {
        // found it, increase the quantity by 1
        cart[j].quantities += 1;
        display_all();
        return;
      }
    }
    cart.push(
      new Cart_Item(
        stock[i].stock_id,
        stock[i].stock_name,
        stock[i].stock_price,
        1
      )
    );
  }
  display_all();
  return;
}

//Remove function

function subtract_selection(i) {
  if (cart[i].quantities > 0) {
    cart[i].quantities--;

    if (cart[i].quantities === 0) {
      cart.splice(i, 1);
    }
    display_all();
    return;
  }
}

//Order function
function addOrder() {
  for (var i = 0; i < cart.length; i++) {
    order.push(
      new Order(
        cart[i].stock_id,
        cart[i].stock_name,
        cart[i].stock_price,
        cart[i].quantities
      )
    );
  }
  displayOrder();
  clearOrderArray();
}

//display order
function displayOrder() {
    document.getElementById("displayOrder").innerHTML += "<br><br>----------------------------------------------"; 
    document.getElementById("displayOrder").innerHTML += "<br>Order Number: " + ++orderNumber + ",";
    document.getElementById("displayOrder").innerHTML += "<br>Order Items: ";
    for(var i = 0; i < order.length; i++){
        document.getElementById("displayOrder").innerHTML += "<br>\t\tItem: " + order[i].stock_name + ", Quantity: " + order[i].quantities + ", Price: R" + (order[i].stock_price * order[i].quantities);
    }
}

//Clear cart function
function clearOrderArray() {
    order = [];
}

//Total cart price function
function totalCart() {
  var totalCost = 0;
  for (var i in cart) {
    totalCost += cart[i].stock_price * cart[i].quantities;
  }
  display_all();
  return totalCost;
}

//Cart list function
function listCart() {
  //array of items
  var cartCopy = [];
  for (var i in cart) {
    //loops throught every item in cart
    var item = cart[i];
    var itemCopy = {};
    for (var p in item) {
      //loops through every property in item
      itemCopy[p] = item[p];
    }
    cartCopy.push(itemCopy); //adds item copy to cartCopy
  }
  display_all();
  return cartCopy;
}

//Count cart function
function countCart() {
  //returns total count
  var totalCount = 0; //defines the variable
  for (var i in cart) {
    totalCount += cart[i].quantities; //count of particular item and add to total count
  }
  display_all();
  return totalCount; // returns total items
}

//Display total function
function displayTotal() {
  document.getElementById("total").innerHTML =
    "<br/><br/>Total order amount is R" + totalCart().toFixed(2);
}

//Display count function
function displayCount() {
  document.getElementById("count").innerHTML =
    "<br/><br/>Total Items in Cart  " + countCart().toFixed(2);
}

//Display cart list function
function displayList() {
  document.getElementById("List").innerHTML = document.write(
    JSON.stringify(listCart())
  );
}

//Display tables function

function display_all() {
  var myTable =
    "<table><th style='width: 100px; color: red; text-align: right;'>Num</th>";
  myTable +=
    "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
  myTable +=
    "<th style='width: 100px; color: red; text-align: right;'>Price</th>";
  //myTable += "<th style='width: 100px; color: red; text-align: right;'>Quantity</th>";
  myTable +=
    "<th style='width: 100px; color: red; text-align: right;'>Add</th>";

  for (i = 0; i < stock.length; i++) {
    myTable +=
      "<tr><td style='width: 100px; text-align: right;'>" +
      stock[i].stock_id +
      "</td>";
    myTable +=
      "<td style='width: 100px; text-align: right;'>" +
      stock[i].stock_name +
      "</td><";
    myTable +=
      "<td style='width: 100px; text-align: right;'>" +
      stock[i].stock_price +
      "</td>";
    // myTable += "<td style='width: 100px; text-align: right;'>" + stock[i].quantities + "</td>";
    myTable +=
      "<td><button onclick='add_selection(" + i + ")'>Add</button></td>";
  }

  myTable += "</table><br><h1> Cart Items:</h1>";

  var mycart =
    "<table><th style='width: 100px; color: red; text-align: right;'>Num</th>";
  mycart +=
    "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
  mycart +=
    "<th style='width: 100px; color: red; text-align: right;'>Price</th>";
  mycart +=
    "<th style='width: 100px; color: red; text-align: right;'>Quantity</th>";
  mycart +=
    "<th style='width: 100px; color: red; text-align: right;'>Total</th>";
  mycart +=
    "<th style='width: 100px; color: red; text-align: right;'>Subtract</th>";

  for (i = 0; i < cart.length; i++) {
    mycart +=
      "<tr><td style='width: 100px; text-align: right;'>" +
      cart[i].stock_id +
      "</td>";
    mycart +=
      "<td style='width: 100px; text-align: right;'>" +
      cart[i].stock_name +
      "</td><";
    mycart +=
      "<td style='width: 100px; text-align: right;'>" +
      cart[i].stock_price +
      "</td>";
    mycart +=
      "<td style='width: 100px; text-align: right;'>" +
      cart[i].quantities +
      "</td>";
    mycart +=
      "<td style='width: 100px; text-align: right;'>" +
      cart[i].stock_price * cart[i].quantities +
      "</td>";
    mycart +=
      "<td><button onclick='subtract_selection(" +
      i +
      ")'>Subtract</button></td>";
  }
  mycart += "</table>";
  mycart +=
    "<br/><td><button onclick='displayTotal()'>Total Amount</button></td>";

  mycart += "</table>";
  mycart +=
    "<br/><td><button onclick='displayCount()'>Cart Count</button></td>";

  mycart += "</table>";
  mycart += "<br/><td><button onclick='addOrder()'>Add Order</button></td>";

  document.getElementById("menu").innerHTML = myTable;
  document.getElementById("cart").innerHTML = mycart;
}

window.onload = function () {
  display_all();
};

/*function subtract_selection(stock_name, quantities = 1) {   
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].stock_name === stock_name) { 
        
            if (quantities > 0) {
                cart[i].quantities -= quantities;
            }                        
            if (cart[i].quantities < 1 || quantities === 0) {             
                cart.splice(i, 1);                 
            }
            display_all();
            return;                                 
        }
    }
}*/
