// Business Logic ---------
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
    } else if (this.pizzas[0].size === "prty") {
      this.totalPrice += 20;
    }
    return this.totalPrice += this.pizzas[0].toppings.length;
}

function Pizza(size, toppings) {
  this.size = size,
  this.toppings = toppings
}

// User Interface Logic ---------
let order1 = new Order();

$(document).ready(function() {
  $("form#formOne").submit(function(e) {
    e.preventDefault();
    let inputSize = $("#size").val();
    let inputToppings = $("input:checkbox[name=topping]:checked").map(function() { 
      return this.value;}).get();

    let newPizza = new Pizza (inputSize, inputToppings);
    order1.addPizza(newPizza);
    $("#finalTotal").html("$" + order1.calculatePrice());
  });
});