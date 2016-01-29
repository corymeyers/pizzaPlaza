function PizzaOrder (PizzaToppings, PizzaSize, PizzaPrice) {
  this.PizzaToppings = PizzaToppings;
  this.PizzaSize = PizzaSize;
  this.PizzaPrice = PizzaPrice;
  this.Tabulator = 0;
}

// PizzaOrder.prototype.PizzaToppings=function() {
//   var subTotal = 0;
//   if (document.getElementById("Pepperoni")=true {
//     this.Tabulator + .5
//
//   })




//   PizzaOrder.Tabulator + subtotal
// }









$(document).ready(function() {
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();

    var Pepperoni = $("select#Pepperoni").val();
    var Pickles = $("select#Pickles").val();
    var Porridge = $("select#Porridge").val();
    var Peppercini = $("select#Peppercini").val();
    var Potato = $("select#Potato").val();
    console.log(Potato)


    // var movieTime = $("select#movieTime").val();
    // var yearBorn = parseInt($("input#yearBorn").val());
    // var newTicket = new Tickulator(movieType, movieTime, yearBorn);

    $("ul#receipt").append("<li>"+"$"+"<span class='finalPrice'>" + PizzaOrder.price() + "</span></li>");
      $("input").val("");

});
});
