// 4. Write two functions that converts temperature from Celsius to Fahrenheit and
// vice-versa.
  function convertToCelsius(temperature) {
    return temperature -32 * 5/9;
  }

  function convertToFahrenheit(temperature) {
        return temperature * 9/5 + 32;  
  }

  console.log(convertToCelsius(1));
  console.log(convertToFahrenheit(1));