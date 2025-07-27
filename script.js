// #jss goes here

 // Toggle password visibility
    function togglePassword() {
      const password = document.getElementById("password");
      const eye = document.getElementById("eyeIcon");
      if (password.type === "password") {
        password.type = "text";
        eye.innerText = "🙈";
      } else {
        password.type = "password";
        eye.innerText = "👁️";
      }
    }



    
 













  function calculateBMI(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100;

    if (!weight || !height || height === 0) {
      document.getElementById("bmiResult").innerText = "Please enter valid values.";
      return;
    }

    const bmi = weight / (height * height);
    const result = bmi.toFixed(2);

    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal weight";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";

    document.getElementById("bmiResult").innerText = `Your BMI is ${result} (${category})`;
  }
