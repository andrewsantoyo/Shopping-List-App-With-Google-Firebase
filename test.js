// test.js

// Function to log the input value when the "Add to cart" button is clicked
function handleClick() {
  let inputValue = document.getElementById("input-field").value;
  console.log("Clicked the 'Add to cart' button and the input field is: ", inputValue);
}

let startTest = false;

// Test code
if (startTest) {
  // Attach the click event listener to the "Add to cart" button
  document.getElementById("add-button").addEventListener("click", handleClick);

  function test() {
    const mockInputValue = 'Test Success';
    document.getElementById("input-field").value = mockInputValue;

    handleClick(); // Manually call the click event handler

    // Check the console for the correct logged message

    // Reset the input field value to an empty string after the test is completed
    document.getElementById("input-field").value = '';
  }
  test(); // Run the test
}
