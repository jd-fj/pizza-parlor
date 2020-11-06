function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.sizePrice = function() {
  if (this.size === "sm") {
  return 5;
  } else if (this.size === "med") {
    return 10;
  } else if (this.size === "lrg") {
    return 15;
  } else {
    return alert("please select a size")
  }
}

let pizza1 = new Pizza("med", ["olives", "anchos", "pickles"])
let pizza2 = new Pizza("sm", ["olives", "anchos", "pickles"])
let pizza3 = new Pizza("didn't select size", ["olives", "anchos", "pickles"])


// | Create pizza objects with constructor |||
// | should correctly create a new Pizza object | pizza1 | Pizza {size, [toppings]} |

// | Cost of pizza prototype |||
// | should correctly add price of sm, med, lrg | med | 10 |
// | should correctly add number of toppings | 3 | pizza1.cost() returns 3 |

// | Display final cost to user |||
// | should correctly total the size + amount of toppings | sm and 3 toppings | display 8 |


// <!-- Create a pizza object constructor: let pizza1 = new Pizza ([toppings], size) {[anchovies, olives, artichokes], small} -->

// Allow the user to choose toppings and size for the pizza they'd like to order.
// Create a pizza object constructor with properties for toppings and size.
// Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.