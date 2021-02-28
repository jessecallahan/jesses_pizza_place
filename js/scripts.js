//Business Logic

function OrdersList() {
  this.orders = []
}

OrdersList.prototype.addId = function (newPizza) {
  let id = this.orders.length + 1
  return newPizza.id = id
}

OrdersList.prototype.pushOrdersToList = function (newPizza) {
  if (newPizza.name === "") {
    $("#error").text("Add your name!")
  }
  else if (newPizza.size === undefined) {
    $("#error").text("Pick a size!")
  } else {
    $("#error").text("")
    return this.orders.push(newPizza)
  }
}

function Pizza(name, size, total, toppings, id) {
  this.name = name;
  this.size = size;
  this.total = total;
  this.toppings = toppings;
  this.id = id;
}

Pizza.prototype.price = function () {
  let toppingsPrice = this.toppings.length * 2;
  let sizePrice = 0;
  if (this.size === "L") { sizePrice = 20 } else if (this.size === "M") { sizePrice = 15 } else if (this.size === "S") { sizePrice = 8 } else { $("#error").text("error") }
  return this.total = toppingsPrice + sizePrice
}

//User Interface

function displayOrderDetails(pizzaToDisplay) {
  var orderList = $("ul#output");
  var htmlForpizzaInfo = "";
  pizzaToDisplay.orders.forEach(function (pizza) {
    htmlForpizzaInfo += "<li id=" + pizza.id + ">" + "<p>" + pizza.name + "</p>" + " " + pizza.size + " size pizza" + " $" + pizza.total + " Toppings: " + pizza.toppings + " ";
  });
  orderList.html(htmlForpizzaInfo);
};

$(document).ready(function () {
  //start fake db
  let newOrdersList = new OrdersList()

  //pizza order submit
  $("form#new-order").submit(function (event) {

    //adds new order
    let newPizza = new Pizza()
    event.preventDefault();

    newPizza.name = $("input#new-name").val();
    newPizza.size = $("input:radio[name=size]:checked").val()
    newPizza.toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function () { newPizza.toppings.push($(this).val()); });

    newPizza.price()
    newOrdersList.addId(newPizza)
    newOrdersList.pushOrdersToList(newPizza)

    //displays order 
    displayOrderDetails(newOrdersList)

    //test
    var d = new Date();
    d.toLocaleString();       // -> "2/1/2013 7:37:08 AM"
    console.log(d.toLocaleDateString());   // -> "2/1/2013"
    console.log(d.toLocaleTimeString());  // -> "7:38:05 AM"
    let d2 = new Date(d);
    d2.setMinutes(d.getMinutes() + 30);
    console.log(d2.toLocaleTimeString())

    //clears fields
    document.getElementById('new-name').value = '';
    $('input[type=checkbox]').prop('checked', false);
    $('input:radio[name=size][value="L"]').prop('checked', 'checked');

  });

});
