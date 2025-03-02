 function addingEventListener() {
    // Grab the element with id 'button'
    const input = document.getElementById('button');
    
    // If the element exists, attach a click event listener to it.
    if (input) {
      // Define a callback function that alerts a message when invoked.
      function clickAlert() {
        alert('I was clicked!');
      }
      
      // Attach the event listener. Notice we pass the function name (without parentheses)
      input.addEventListener('click', clickAlert);
    }
  }
  
  // Call the function to add the event listener.
  addingEventListener();
  