//your JS code here. If required.
// Function to return a promise that resolves with an array of numbers after 3 seconds
function getNumbers() {
  const numbers = [1, 2, 3, 4];
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(numbers);
    }, 3000);
  });
}

// Function to filter out odd numbers
function filterOddNumbers(numbers) {
  return numbers.filter(number => number % 2 === 0);
}

// Function to multiply even numbers by 2
function multiplyEvenNumbers(numbers) {
  return numbers.map(number => (number % 2 === 0) ? number * 2 : number);
}

// Function to update the text of an HTML element with an ID of "output"
function updateOutputText(text) {
  const outputElement = document.getElementById('output');
  outputElement.textContent = text;
}

// Using promises to chain the operations
getNumbers()
  .then(numbers => {
    // Display the original array
    updateOutputText(`Original Array: [${numbers.join(', ')}]`);
    
    // Return a promise that resolves with the filtered array after 1 second
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredNumbers = filterOddNumbers(numbers);
        resolve(filteredNumbers);
      }, 1000);
    });
  })
  .then(filteredNumbers => {
    // Display the array after filtering odd numbers
    updateOutputText(`After Filtering Odd Numbers: [${filteredNumbers.join(', ')}]`);
    
    // Return a promise that resolves with the multiplied array after 2 seconds
    return new Promise((resolve) => {
      setTimeout(() => {
        const multipliedNumbers = multiplyEvenNumbers(filteredNumbers);
        resolve(multipliedNumbers);
      }, 2000);
    });
  })
  .then(finalResult => {
    // Display the final result after multiplying even numbers
    updateOutputText(`Final Result: [${finalResult.join(', ')}]`);
  })
  .catch(error => {
    console.error('Error:', error);
  });
