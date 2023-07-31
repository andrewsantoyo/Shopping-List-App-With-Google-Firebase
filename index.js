// index.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-24e1c-default-rtdb.firebaseio.com/"
}

// Initialize firebase as database.
const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListinDB = ref(database, "shoppingList")

// When you click the 'Add to cart' button.
const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")

addButtonEl.addEventListener("click", function() {
    // Will use inputValue later.
    let inputValue = inputFieldEl.value

    push(shoppingListinDB, inputValue)

    // Append a new <li> with text content inputValue to the 'shopping-list' <ul>
    shoppingListEl.innerHTML += `<li>${inputValue}</li>`

    // Clear inputFieldEl.value after it's added to the 'shopping-list'.
    inputFieldEl.value = ""
})