function orderPizza(test){
    console.log("order pizza");
    var pizza;
    setTimeout(() =>{
        pizza = "pizza";
        test(pizza);
    },3000);
}

function createPizza(food) {
    console.log(`here its your ${food}`);
}
orderPizza(createPizza);


