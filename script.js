//your JS code here. If required.
// Your JS code here.
const output = document.getElementById("output");
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const btn = document.getElementById("btn");

btn.addEventListener("click", async () => {
  // Get the values from the input fields
  const textValue = textInput.value;
  const delayValue = parseInt(delayInput.value * 1000, 10);

  // Validate input
   if (textValue.trim() === '' || isNaN(delayValue) || delayValue < 0) {
     alert('Please enter valid text and delay values.');   
	return;
   }

  output.innerText = '';

  const waitForDelay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  await waitForDelay(delayValue);
  output.innerText = textValue;
});








