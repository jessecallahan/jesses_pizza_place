//Business Logic

function OrdersList() {
  this.orders = []
}

OrdersList.prototype.addId = function (newPizza) {
  let id = this.orders.length + 1
  return newPizza.id = id
}

OrdersList.prototype.pushToOrdersList = function (newPizza) {
  if (newPizza.name === "") {
    $("#error").text("Add your name!")
  }
  else if (newPizza.size === undefined) {
    $("#error").text("Pick a size!")
  } else {
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
    htmlForpizzaInfo += "<li id=" + pizza.id + ">" + pizza.name + " " + pizza.size + " size pizza" + " $" + pizza.total + " Toppings: " + pizza.toppings + " ";
  });
  orderList.html(htmlForpizzaInfo);
};

$(document).ready(function () {
  //start fake db
  let newOrdersList = new OrdersList()

  //pizza order form 
  $("form#new-order").submit(function (event) {

    let newPizza = new Pizza()
    event.preventDefault();

    newPizza.name = $("input#new-name").val();
    newPizza.size = $("input:radio[name=size]:checked").val()
    newPizza.toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function () { newPizza.toppings.push($(this).val()); });

    newPizza.price()
    newOrdersList.addId(newPizza)
    newOrdersList.pushToOrdersList(newPizza)

    //displays order 
    displayOrderDetails(newOrdersList)

    //clears form
    document.getElementById('new-name').value = '';
    $('input[type=checkbox]').prop('checked', false);
    $('input:radio[name=size][value="L"]').prop('checked', 'checked');


  });



});
