// test.js

// Function to log the input value when the "Add to cart" button is clicked
function handleClick() {
  let inputValue = document.getElementById("input-field").value;
  console.log("Clicked the 'Add to cart' button and the input field is: ", inputValue);
}

// Attach the click event listener to the "Add to cart" button
document.getElementById("add-button").addEventListener("click", handleClick);

// Test code
function test() {
  const mockInputValue = 'Test Success';
  document.getElementById("input-field").value = mockInputValue;

  handleClick(); // Manually call the click event handler

  // Check the console for the logged message

  // Reset the input field value to an empty string after the test is completed
  document.getElementById("input-field").value = '';
}

test(); // Run the test
