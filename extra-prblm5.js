var pizza ={
    toppings: ["chesse", "sauce", "pepperoni"],
    curst: "deep dish",
    serves: 2
}
// pizzaTopping = pizza.toppings;
var pizzaTopping = pizza["toppings"];
var lastTopping = pizzaTopping[2]
console.log(lastTopping);