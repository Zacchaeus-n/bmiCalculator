//WK04AS03 - BMI Calculator Advanced
/**
 * BMI < 18.5, the output should be: "Your BMI is , so you are underweight."
   BMI 18.5 - 24.9, the output should be: "Your BMI is , so you have a normal weight."
   BMI > 24.9, the output should be: "Your BMI is , so you are overweight."
   2.72 m
 */

//Selecting DOM elements
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const message = document.querySelector(".message");
const btn = document.querySelector("#submit");

//function returns boolean for invalid inputs
const isNotValidInput = (value) => (value <= 0 || isNaN(value) ? true : false);

//BMI Calculation function
const bmiCalculator = (weight, height) =>
  Math.round(weight / Math.pow(height, 2));

//BMI Display Message function
const bmiDisplayMessage = (e) => {
  e.preventDefault(); //prevents form default action

  //output variable
  let output;

  //Checking for the correct weight and height values
  if (isNotValidInput(weight.value)) {
    output = `Please enter weight in kilograms (kg).`;
    weight.classList.add("error"); //add red border to the input field
  } else if (isNotValidInput(height.value)) {
    output = `Please enter height in meters (m).`;
    height.classList.add("error"); //add red border to the input field
  } else {
    //removing error
    weight.classList.remove("error");
    height.classList.remove("error");

    //converting input strings into floating point numbers
    const bmi = bmiCalculator(
      parseFloat(weight.value),
      parseFloat(height.value)
    );

    //BMI Message to display
    if (bmi < 18.5) {
      output = `Your BMI is ${bmi}kg/m2 , so you are underweight.`;
      message.classList.add("danger"); //change text color to red
      message.classList.remove("normal"); //remove normal class
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      output = `Your BMI is ${bmi}kg/m2 , so you have a normal weight.`;
      message.classList.add("normal"); //add normal class
      message.classList.remove("danger"); //remove danger class
    } else {
      output = `Your BMI is ${bmi}kg/m2 , so you are overweight.`;
      message.classList.remove("normal"); //remove normal class
      message.classList.add("danger"); //change text color to red
    }
  }

  // function return
  return (message.innerHTML = output);
};

// button eventListener
btn.addEventListener(`click`, bmiDisplayMessage);
