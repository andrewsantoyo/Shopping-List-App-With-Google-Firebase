// index.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

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

    clearInputFieldEl()
})

onValue(shoppingListinDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsAray = Object.entries(snapshot.val())

        clearShoppingListEl()
        
        for (let i = 0; i < itemsAray.length; i++) {
            let currentItem = itemsAray[i]

            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]

            appendItemToShoppingListEl(currentItem)
        }
    } else {
        shoppingListEl.innerHTML = "No items here... yet"
    }
})

// Helper functions.
function clearShoppingListEl() {
    shoppingListEl.innerHTML = ""
}

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendItemToShoppingListEl(item) {
    let itemID = item[0]
    let itemValue = item[1]

    let newEl = document.createElement("li")

    newEl.textContent = itemValue

    newEl.addEventListener("click", function() {
        let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`)

        remove(exactLocationOfItemInDB)
    })

    shoppingListEl.append(newEl)
}