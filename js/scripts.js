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
  } else {
    $("#error").text("")
    return this.orders.push(newPizza)
  }
}

function Pizza(name, size, total, toppings, date, time, eta, id) {
  this.name = name;
  this.size = size;
  this.total = total;
  this.toppings = toppings;
  this.date = date;
  this.time = time;
  this.eta = eta;
  this.id = id;
}

Pizza.prototype.price = function () {
  let toppingsPrice = this.toppings.length * 2;
  let sizePrice = 0;
  if (this.size === "L") { sizePrice = 20 } else if (this.size === "M") { sizePrice = 15 } else if (this.size === "S") { sizePrice = 8 } else { $("#error").text("error") }
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


    let newPizza = new Pizza()
    event.preventDefault();

    newPizza.name = $("input#new-name").val();
    newPizza.size = $("input:radio[name=size]:checked").val()
    newPizza.toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function () { newPizza.toppings.push($(this).val()); });


    newPizza.price()
    newPizza.addTimes()
    newOrdersList.addId(newPizza)
    newOrdersList.pushOrdersToList(newPizza)

    //displays order 
    displayOrderDetails(newOrdersList)

    //clears fields
    document.getElementById('new-name').value = '';
    $('input[type=checkbox]').prop('checked', false);
    $('input:radio[name=size][value="L"]').prop('checked', 'checked');

  });

});
