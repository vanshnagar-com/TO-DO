let weightinput = document.querySelector(".js-BMI-weight");
let heightinput = document.querySelector(".js-BMI-height");
let BMI;

weightinput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    CalculateBMI();
  }
});

heightinput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    CalculateBMI();
  }
});

document
  .querySelector(".js-BMI-Calculate-button")
  .addEventListener("click", () => {
    CalculateBMI();
  });

function CalculateBMI() {
  const weight = Number(weightinput.value);
  const height = Number(heightinput.value);

  BMI = weight / (height * height);
  const BMIupto2Decimal = BMI.toFixed(2);
  document.querySelector(".js-BMI-calculations").innerHTML = BMIupto2Decimal;

  const personalMessage = document.querySelector(".BMI-personal-message");
  if (BMIupto2Decimal < 18.5) {
    personalMessage.innerHTML = "UNDER WEIGHT";
  } else if (BMIupto2Decimal >= 18.5 && BMIupto2Decimal <= 24.9) {
    personalMessage.innerHTML = "NORMAL";
  } else if (BMIupto2Decimal >= 25 && BMIupto2Decimal <= 29.9) {
    personalMessage.innerHTML = "OVERWEIGHT";
  } else if (BMIupto2Decimal >= 30 && BMIupto2Decimal <= 34.9) {
    personalMessage.innerHTML = "OBESE";
  } else {
    personalMessage.innerHTML = "EXTREMELY FUCKED";
  }
}
