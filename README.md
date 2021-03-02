# Jesse's Pizza Parlor

### Epicodus Intermediate JavaScript - Object Practice

### By Jesse Callahan

## Technologies Used

* Git
* HTML
* CSS
* JavaScript
* jQuery

## Description

This website allows you to order on one "phone" and allows you to see the orders on another. Depending on the size and amount of ingredients your pizza will cost different. All orders have an estimated arrival time of 45 minutes away from when they were ordered. 

## Setup/Installation Requirements

  1. Clone this repository to your desktop
  2. Navigate to the top level of the directory
  3. Open index.html in your browser 

## Tests / Specs

```
Describe: let newPizza = new Pizza()

Test 1: "It should create a Pizza Order object"
Expect(newPizza).toEqual(Pizza {name, size, total, toppings, date, time, eta, id})

Describe: OrdersList.prototype.price()

Test 2: "It should take the pizza's size and amount of toppings and give a price"
Expect(newPizza.price()).toEqual(if toppings length === 4 then 4*2 or if size === "Large" then + 20 so newPizza.price = 28)

Describe: Pizza.prototype.addTimes()

Test 3: "It should add a time and a date object and give a 45 minute eta"
Expect(newPizza.addTimes).toEqual(newPizza.time = the current time, newPizza.date = current day, newPizza.eta = the current time plus 45)

Describe: let newOrdersList = new OrdersList()

Test 1: "It should create a Orders List object"
Expect(newOrdersList).toEqual(OrdersList { orders = []})

Describe: OrdersList.prototype.addId(newPizza)

Test 2: "It should give pizza order an id"
Expect(OrdersList.prototype.addId()).toEqual(newPizza.id = +1)

Describe: OrdersList.prototype.pushOrdersToList(newPizza)

Test 3: "It should push pizza order to order list and if theres no name flash an error"
Expect(OrdersList.prototype.pushOrdersToList()).toEqual(newOrdersList.orders = [{Pizza Object}])
```

## Known Bugs

No known bugs at this time

## Link

https://jessecallahan.github.io/jesses_pizza_place/

## License

Copyright (c) Jesse Callahan 

This software is licensed under the MIT license

## Contact Information

jessetylercallahan@gmail.com>