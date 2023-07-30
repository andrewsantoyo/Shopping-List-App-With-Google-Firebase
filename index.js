// index.js

// When you click the 'Add to cart' button, whatever is written should be console logged.
const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

addButtonEl.addEventListener("click", function() {
    // Will use inputValue later
    let inputValue = inputFieldEl.value

    console.log("Clicked the 'Add to cart' button and the input field is: ", inputValue)
})