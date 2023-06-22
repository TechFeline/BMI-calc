document.getElementById("calculateBtn").addEventListener("click", calculateBMI);

function calculateBMI() {
  var weightInput = document.getElementById("weight");
  var heightInput = document.getElementById("height");
  var resultDiv = document.getElementById("result");
  var visualizationDiv = document.getElementById("visualization");
  var recommendationsDiv = document.getElementById("recommendations");

  var weight = parseFloat(weightInput.value);
  var weightUnit = document.getElementById("weightUnit").value;
  var height = parseFloat(heightInput.value);
  var heightUnit = document.getElementById("heightUnit").value;
  console.log(weight, height);
  // Convert weight to kg if in pounds
  if (weightUnit === "lb") {
    weight = weight * 0.45359237;
  }

  // Convert height to meters if in feet
  if (heightUnit === "ft") {
    height = height * 0.3048;
  }

  // Convert height to meters if in inches
  if (heightUnit === "in") {
    height = height * 0.0254;
  }
  if (heightUnit == "cm") {
    height = height / 100;
  }

  //console.log(weight, height);
  if (weight && height) {
    var bmi = weight / (height * height);
    var category = getBMICategory(bmi);
    //console.log(bmi);
    var resultText = "Your BMI is: " + bmi.toFixed(2) + " (" + category + ")";
    resultDiv.textContent = resultText;

    var color = getCategoryColor(category);
    visualizationDiv.style.backgroundColor = color;

    var recommendations = getHealthRecommendations(category);
    recommendationsDiv.innerHTML =
      "<h3>Health Recommendations</h3>" + recommendations;
  } else {
    resultDiv.textContent = "Please enter valid weight and height values.";
    visualizationDiv.style.backgroundColor = "#ccc";
    recommendationsDiv.innerHTML = "";
  }
}

function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

function getCategoryColor(category) {
  switch (category) {
    case "Underweight":
      return "#FF9800"; // Orange
    case "Normal weight":
      return "#4CAF50"; // Green
    case "Overweight":
      return "#FF5722"; // Red
    case "Obese":
      return "#F44336"; // Dark Red
    default:
      return "#ccc";
  }
}

function getHealthRecommendations(category) {
  switch (category) {
    case "Underweight":
      return "<p>Eat a balanced diet including nutrient-rich foods. Consider consulting a healthcare professional for personalized advice.</p>";
    case "Normal weight":
      return "<p>Continue maintaining a healthy lifestyle with a balanced diet and regular physical activity.</p>";
    case "Overweight":
      return "<p>Focus on portion control and incorporate regular exercise into your routine. Consult a healthcare professional for personalized guidance.</p>";
    case "Obese":
      return "<p>Adopt a well-balanced, calorie-controlled diet and engage in regular physical activity. Seek guidance from a healthcare professional for a comprehensive weight loss plan.</p>";
    default:
      return "";
  }
}

var knowledgeData = [
  {
    ageGroup: "Adults",
    chart: [
      {
        height: "137 cm",
        femaleWeight: "28.5 - 34.9 kg",
        maleWeight: "28.5 - 34.9 kg",
      },
      {
        height: "140 cm",
        femaleWeight: "30.8 - 37.6 kg",
        maleWeight: "30.8 - 38.1 kg",
      },
      {
        height: "142 cm",
        femaleWeight: "32.6 - 39.9 kg",
        maleWeight: "33.5 - 40.8 kg",
      },
      {
        height: "145 cm",
        femaleWeight: "34.9 - 42.6 kg",
        maleWeight: "35.8 - 43.9 kg",
      },
      {
        height: "147 cm",
        femaleWeight: "36.4 - 44.9 kg",
        maleWeight: "38.5 - 46.7 kg",
      },
      {
        height: "150 cm",
        femaleWeight: "39 - 47.6 kg",
        maleWeight: "40.8 - 49.9 kg",
      },
      {
        height: "152 cm",
        femaleWeight: "40.8 - 49.9 kg",
        maleWeight: "43.1 - 53 kg",
      },
      {
        height: "155 cm",
        femaleWeight: "43.1 - 52.6 kg",
        maleWeight: "45.8 - 55.8 kg",
      },
      {
        height: "157 cm",
        femaleWeight: "44.9 - 54.9 kg",
        maleWeight: "48.1 - 58.9 kg",
      },
      {
        height: "160 cm",
        femaleWeight: "47.2 - 57.6 kg",
        maleWeight: "50.8 - 61.6 kg",
      },
      {
        height: "163 cm",
        femaleWeight: "49 - 59.9 kg",
        maleWeight: "53 - 64.8 kg",
      },
      {
        height: "165 cm",
        femaleWeight: "51.2 - 62.6 kg",
        maleWeight: "55.3 - 68 kg",
      },
      {
        height: "168 cm",
        femaleWeight: "53 - 64.8 kg",
        maleWeight: "58 - 70.7 kg",
      },
      {
        height: "170 cm",
        femaleWeight: "55.3 - 67.6 kg",
        maleWeight: "60.3 - 73.9 kg",
      },
      {
        height: "173 cm",
        femaleWeight: "57.1 - 69.8 kg",
        maleWeight: "63 - 76.6 kg",
      },
      {
        height: "175 cm",
        femaleWeight: "59.4 - 72.6 kg",
        maleWeight: "65.3 - 79.8 kg",
      },
      {
        height: "178 cm",
        femaleWeight: "61.2 - 74.8 kg",
        maleWeight: "67.6 - 83 kg",
      },
      {
        height: "180 cm",
        femaleWeight: "63.5 - 77.5 kg",
        maleWeight: "72.6 - 88.9 kg",
      },
      {
        height: "183 cm",
        femaleWeight: "65.3 - 79.8 kg",
        maleWeight: "72.6 - 88.9 kg",
      },
      {
        height: "185 cm",
        femaleWeight: "67.6 - 82.5 kg",
        maleWeight: "75.3 - 91.6 kg",
      },
      {
        height: "188 cm",
        femaleWeight: "69.4 - 84.8 kg",
        maleWeight: "77.5 - 94.8 kg",
      },
      {
        height: "191 cm",
        femaleWeight: "71.6 - 87.5 kg",
        maleWeight: "79.8 - 98 kg",
      },
      {
        height: "193 cm",
        femaleWeight: "73.5 - 89.8 kg",
        maleWeight: "82.5 - 100.6 kg",
      },
      {
        height: "195 cm",
        femaleWeight: "75.7 - 92.5 kg",
        maleWeight: "84.8 - 103.8 kg",
      },
    ],
  },
];
