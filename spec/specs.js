describe("PizzaOrder", function() {
  it ("collects user input, and creates a new pizza object", function() {
    var testPizzaOrder = new PizzaOrder("olive", "large", 14);
    expect(testPizzaOrder.PizzaToppings).to.equal("olive");
    expect(testPizzaOrder.PizzaSize).to.equal("large");
    expect(testPizzaOrder.PizzaPrice).to.equal(14);
  });
});

describe("PizzaToppings", function() {
  it ("collects user toppings input, assigns cost, and pushes it to the Tabulator integer", function() {
    var testPizzaOrder = new PizzaOrder("olive", "large", 14);
    expect(testPizzaOrder.PizzaToppings).to.equal("olive");
      });
});
