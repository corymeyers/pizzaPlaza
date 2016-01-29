function PizzaOrder (PizzaToppings, PizzaSize, PizzaPrice) {
  this.PizzaToppings = PizzaToppings;
  this.PizzaSize = PizzaSize;
  this.PizzaPrice = PizzaPrice;
  this.Tabulator = 0;
}

PizzaOrder.prototype.PizzaToppings=function() {
  PizzaOrder.ToppingsSubtotal = 0;
  if (this.Pepperoni = true) {
    subTotal + .5;
  }
  if (this.Pickles == true) {
    subTotal + .5;
  }
  if (this.Porridge == checked) {
    subTotal + .5;
  }
  if (this.Peppercini == checked) {
    subTotal + .5;
  }
  if (this.Potato == checked) {
    subTotal + .5;
  }
  return subTotal;
}

PizzaOrder.prototype.PizzaSize=function() {
  var PizzaSizeSubtotal = 0;
  if (this.PizzaSize === "Small") {
     PizzaSizeSubtotal += 10;
    }
  if (this.PizzaSize === "Medium") {
     PizzaSizeSubtotal += 14;
  }
  if (this.PizzaSize === "Large") {
     PizzaSizeSubtotal += 18;
  }
  return PizzaSizeSubtotal;
}

$(document).ready(function() {
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();

    var Pepperoni = $("select#Pepperoni").val();
    var Pickles = $("select#Pickles").val();
    var Porridge = $("select#Porridge").val();
    var Peppercini = $("select#Peppercini").val();
    var Potato = $("select#Potato").val();

    $("ul#receipt").append("<li>"+"$"+"<span class='finalPrice'>" + PizzaOrder.Tabulator() + "</span></li>");
      $("input").val("");

});
});
