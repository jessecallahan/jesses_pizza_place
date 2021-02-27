function OrdersList() {
  this.orders = []
}

OrdersList.prototype.addId = function (newPizza) {
  let id = this.orders.length + 1
  return newPizza.id = id
}

OrdersList.prototype.pushToOrdersList = function (newPizza) {
  return this.orders.push(newPizza)
}

function Pizza(name, size, price, toppings, id) {
  this.name = name;
  this.size = size;
  this.price = price;
  this.toppings = toppings;
  this.id = id;
}

Pizza.prototype.priceAdd = function () {
  let toppingsPrice = this.toppings.length * 2;
  let sizePrice = 0;
  if (this.size === "L") { sizePrice = 20 } else if (this.size === "M") { sizePrice = 15 } else if (this.size === "S") { sizePrice = 8 } else { "error" }
  return this.price = toppingsPrice + sizePrice
}




$(document).ready(function () {
  let newOrdersList = new OrdersList()

  $("form#new-order").submit(function (event) {

    let newPizza = new Pizza()
    event.preventDefault();
    newPizza.name = $("input#new-name").val();
    newPizza.size = $("input:radio[name=size]:checked").val()
    newPizza.toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function () { newPizza.toppings.push($(this).val()); });
    newPizza.priceAdd()
    newOrdersList.addId(newPizza)
    newOrdersList.pushToOrdersList(newPizza)
    console.log(newPizza)

    // $('input[type=checkbox]').prop('checked', false);


  });
  console.log(newOrdersList)

});
