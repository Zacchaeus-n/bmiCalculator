//WK04AS03 - BMI Calculator Advanced
/**
 * BMI < 18.5, the output should be: "Your BMI is , so you are underweight."
   BMI 18.5 - 24.9, the output should be: "Your BMI is , so you have a normal weight."
   BMI > 24.9, the output should be: "Your BMI is , so you are overweight."
   
 */

//Selecting DOM elements
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const message = document.querySelector(".message");
const btn = document.querySelector("#submit");

//output variable
let output;

// FUNCTIONS****************************************

//function returns boolean for invalid inputs
const isNotValidInput = (value) =>
  value <= 0 || isNaN(value) || value === "" ? true : false;

//BMI Calculation function
const bmiCalculator = (weight, height) =>
  Math.round(weight / Math.pow(height, 2));

// Checking BMI
const checkBMI = (bmiValue) => {
  //BMI Message to display
  if (bmiValue < 18.5) {
    output = `Your BMI is ${bmiValue}kg/m<sup>2</sup> , so you are underweight. 😮`;
    message.classList.add("danger"); //change text color to red
    message.classList.remove("normal"); //remove normal class
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    output = `Your BMI is ${bmiValue}kg/m<sup>2</sup> , so you have a normal weight. 🙂`;
    message.classList.add("normal"); //add normal class
    message.classList.remove("danger"); //remove danger class
  } else {
    output = `Your BMI is ${bmiValue}kg/m<sup>2</sup> , so you are overweight. 😮`;
    message.classList.remove("normal"); //remove normal class
    message.classList.add("danger"); //change text color to red
  }
};

//BMI Display Message function
const bmiDisplayMessage = (e) => {
  e.preventDefault(); //prevents form default action

  //call to bmiCalculator function
  if (!(isNotValidInput(weight.value) || isNotValidInput(height.value))) {
    const bmi = bmiCalculator(
      parseFloat(weight.value),
      parseFloat(height.value)
    );

    // check BMI and display the correct message
    checkBMI(bmi);

    // function return
    return (message.innerHTML = output);
  } else {
    return (message.innerHTML = `Please enter correct values. 🤦‍♂️`);
  }
};

//LISTENERS*******************************************

//Checking for the correct weight values
weight.addEventListener(`keyup`, () => {
  if (isNotValidInput(weight.value)) {
    weight.classList.add("error"); //add red border to the input field
    message.classList.add("danger"); //change text color to red
    message.innerHTML = `Please enter weight in kilograms (kg). 🙄`;
  } else {
    weight.classList.remove("error");
    message.classList.remove("danger");
    message.innerHTML = ``;
  }
});

//Checking for the correct height values
height.addEventListener(`keyup`, () => {
  if (isNotValidInput(height.value)) {
    height.classList.add("error"); //add red border to the input field
    message.classList.add("danger"); //change text color to red
    message.innerHTML = `Please enter height in meters (m). 🙄`;
  } else {
    height.classList.remove("error");
    message.classList.remove("danger");
    message.innerHTML = ``;
    btn.disabled = false;
  }
});

// button eventListener
btn.addEventListener(`click`, bmiDisplayMessage);
