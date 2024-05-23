"use strict";
// Q:44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. Call the function three times, 
// using a different number of arguments each time.
// Function to make a sandwich
function make_sandwich(...items) {
    console.log("Sandwich with the following items:");
    items.forEach(item => {
        console.log(`- ${item}`);
    });
    console.log("\n");
}
// Call the function three times with different numbers of arguments
make_sandwich("Ham", "Cheese", "Lettuce");
make_sandwich("Turkey", "Tomato", "Mayonnaise", "Avocado");
make_sandwich("Peanut Butter", "Jelly");
