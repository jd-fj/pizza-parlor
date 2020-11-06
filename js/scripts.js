// Business Logic for Order
function Order() {
  this.pizzas = []
}

Order.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza)
}

// Business Logic for Pizza
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.currentPrice = 0;
}

Pizza.prototype.sizePrice = function() {
  if (this.size === "sm") {
  this.currentPrice += 5;
  } else if (this.size === "med") {
    this.currentPrice += 10;
  } else if (this.size === "lrg") {
    this.currentPrice += 15;
  } else {
    return alert("please select a size")
  }
}

Pizza.prototype.toppingPrice = function() {
  this.currentPrice += this.toppings.length 
}

let pizza1 = new Pizza("med", ["olives", "anchos", "pickles"])
let pizza2 = new Pizza("sm", ["olives", "anchos", "pickles"])
let pizza3 = new Pizza("didn't select size", ["olives", "anchos", "pickles"])

// The pizza is the contact, the order is the address book
// Add pizza to order

// | Create pizza objects with constructor |||
// | should correctly create a new Pizza object | pizza1 | Pizza {size, [toppings]} |

// | Cost of pizza prototype |||
// | should correctly add price of sm, med, lrg | med | 10 |
// | should correctly add $1 per number of toppings | 3 | pizza1.cost() returns 3 |

// | Build UI |||
// | create a pizza object on submit button | presses button | pizza object created

// | Display final cost to user |||
// | should correctly total the size + amount of toppings | sm and 3 toppings | display 8 |


// <!-- Create a pizza object constructor: let pizza1 = new Pizza ([toppings], size) {[anchovies, olives, artichokes], small} -->

// Allow the user to choose toppings and size for the pizza they'd like to order.
// Create a pizza object constructor with properties for toppings and size.
// Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.