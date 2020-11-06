// Business Logic for Order
function Order() {
  this.pizzas = [],
  this.totalPrice = 0
}

Order.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
}

Order.prototype.calculatePrice = function() {
    if (this.pizzas[0].size === "sm") {
      this.totalPrice += 5;
    } else if (this.pizzas[0].size === "med") {
      this.totalPrice += 10;
    } else if (this.pizzas[0].size === "lrg") {
      this.totalPrice += 15;
    }
    return this.totalPrice += this.pizzas[0].toppings.length
}


// Business Logic for Pizza
function Pizza(size, toppings) {
  this.size = size,
  this.toppings = toppings
  // this.currentPrice = 0
}

// Pizza.prototype.sizePrice = function() {
//   if (this.size === "sm") {
//   this.currentPrice += 5;
//   } else if (this.size === "med") {
//     this.currentPrice += 10;
//   } else if (this.size === "lrg") {
//     this.currentPrice += 15;
//   } else {
//     return alert("please select a size")
//   }
// }

// Pizza.prototype.toppingPrice = function() {
//   this.toppings = this.toppings.length;
//   this.currentPrice += this.toppings.length;
// }

// User Interface Logic -------------------------
let order1 = new Order();

$(document).ready(function() {
  $("form#formOne").submit(function(e) {
    e.preventDefault();
    let inputSize = $("#size").val();
    let inputToppings = $("input:checkbox[name=topping]:checked").map(function() {
      return this.value;
    }).get()

    let newPizza = new Pizza (inputSize, inputToppings);

    order1.addPizza(newPizza);

    console.log(order1.pizzas)
    $("#finalTotal").html("$" + order1.calculatePrice())
  });
});

// The pizza is the contact, the order is the address book
// Add pizza to order

// | Create pizza objects with constructor |||
// | should correctly create a new Pizza object | pizza1 | Pizza {size, [toppings]} |

// | Cost of pizza prototype |||
// | should correctly add price of sm, med, lrg | med | 10 |
// | should correctly add $1 per number of toppings | 3 | pizza1.cost() returns 3 |

// | Create order Object to pass pizza objects into |||
// | should correctly add price of sm, med, lrg | med | 10 |

// | Build UI |||
// | create a pizza object on submit button | presses button | pizza object created
// | add all selected toppings to pizza.toppings array | olives, anchovies, and pickles | pizza.toppings returns ["olives", "anchovies", "pickles"] |

// | Display final cost to user |||
// | should correctly total the size + amount of toppings | sm and 3 toppings | display 8 |


// <!-- Create a pizza object constructor: let pizza1 = new Pizza ([toppings], size) {[anchovies, olives, artichokes], small} -->

// Allow the user to choose toppings and size for the pizza they'd like to order.
// Create a pizza object constructor with properties for toppings and size.
// Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this