//Business Logic

function OrdersList() {
  this.orders = []
}

OrdersList.prototype.addId = function (newPizza) {
  let id = this.orders.length + 1
  return newPizza.id = id
}

OrdersList.prototype.pushOrdersToList = function (newPizza) {
  return this.orders.push(newPizza)
}

function Pizza(name, size, toppings, total, date, time, eta, id) {
  this.name = name;
  this.size = size;
  this.toppings = toppings;
  this.total = total;
  this.date = date;
  this.time = time;
  this.eta = eta;
  this.id = id;
}

Pizza.prototype.price = function () {
  let toppingsPrice = this.toppings.length * 2;
  let sizePrice = 0;
  if (this.size === "L") { sizePrice = 20 } else if (this.size === "M") { sizePrice = 15 } else { sizePrice = 8 }
  return this.total = toppingsPrice + sizePrice
}

Pizza.prototype.addTimes = function () {
  var d = new Date();
  this.date = d.toLocaleDateString();   // -> "MM/DD/YYYY"
  this.time = d.toLocaleTimeString();  // -> "HH:MM:SS AM"
  let d2 = new Date
  d2.setMinutes(d.getMinutes() + 45);
  this.eta = d2.toLocaleTimeString()
}

//User Interface

function runLogic(newPizza, newOrdersList) {
  if (newPizza.name === "") {
    $("#error").text("Don't Forget Your Name!")
  } else {
    $("#error").text("")
    newPizza.price()
    newPizza.addTimes()
    newOrdersList.addId(newPizza)
    newOrdersList.pushOrdersToList(newPizza)
  }

}

function displayOrderDetails(pizzaToDisplay) {
  var orderList = $("ul#output");
  var htmlForpizzaInfo = "";
  pizzaToDisplay.orders.forEach(function (pizza) {
    htmlForpizzaInfo += "<li id=" + pizza.id + ">" + `<p style="text-align:left;">` + pizza.name + `<span style="float:right;">id:` + pizza.id + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span></p>" + " " + pizza.size + " size pizza" + `<span style="color:red;"> $` + pizza.total + `</span><p><span style="color:green;"> Toppings: ` + pizza.toppings + "</p>" + pizza.time + " " + pizza.date + " " + `<p>Est. Arrival:<span style="color:blue;">  ` + pizza.eta + "</p><br> ";
  });
  orderList.html(htmlForpizzaInfo);
};

$(document).ready(function () {
  //start fake db
  let newOrdersList = new OrdersList()

  //pizza order submit
  $("form#new-order").submit(function (event) {


    let name = $("input#new-name").val();
    let size = $("input:radio[name=size]:checked").val()
    let toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function () { toppings.push($(this).val()); });
    let newPizza = new Pizza(name, size, toppings)
    event.preventDefault();

    runLogic(newPizza, newOrdersList)


    //displays order 
    displayOrderDetails(newOrdersList)

    //clears fields
    document.getElementById('new-name').value = '';
    $('input[type=checkbox]').prop('checked', false);
    $('input:radio[name=size][value="L"]').prop('checked', 'checked');

  });

});
