// 
console.log("first console log");
function displayFood(food) {
    console.log("displayFood", food);
}

let outsideVariable;


fetch("http://localhost:8088/food")
    .then(foods => {
        console.log("foods", foods);

        return foods.json();

    })
    // .then(parsedFoods => {

    //     console.table(parsedFoods);
    // })
    .then(function (parsedFoods) {
    
        console.table(parsedFoods);
    
        parsedFoods.forEach(food => {
        
            console.log("food", food);
       
            displayFood(food.name);
    });
});