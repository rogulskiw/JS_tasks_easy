    
    function celsiusToFahrenheit(celsius){
        celsius = (celsius * 9 / 5) + 32;
        return celsius;
    }

    
   function celsiusToKelvin(celsius){
        celsius = celsius + 273.15;
        return celsius;
    }
    
   function fahrenheitToCelsius(fahrenheit){
        fahrenheit = (fahrenheit - 32) * 5 / 9;
        return fahrenheit;
    }
    
   function fahrenheitToKelvin(fahrenheit){
        fahrenheit = (fahrenheit + 459.67) * 5 / 9;
        return fahrenheit;
    }
    
   function kelvinToFahrenheit(kelvin){
        kelvin = kelvin * 9 / 5 - 459.67;
        return kelvin;
    }
    
   function kelvinToCelsius(kelvin){
        kelvin = kelvin - 273.15;
        return kelvin;
    }
    
   const celsiusValue = 25;
   
   console.log(`${celsiusValue} stopni Celsiusza = ${celsiusToFahrenheit(celsiusValue).toFixed(2)} stopni Fahrenheita`);
    console.log(`${celsiusValue} stopni Celsiusza = ${celsiusToKelvin(celsiusValue).toFixed(2)} kelwinow`);
    
   const fahrenheitValue = 77;
   console.log(`${fahrenheitValue} stopni Fahrenheita = ${fahrenheitToCelsius(fahrenheitValue).toFixed(2)} stopni Fahrenheita`);
   console.log(`${fahrenheitValue} stopni Fahrenheita = ${fahrenheitToKelvin(fahrenheitValue).toFixed(2)} kelwinow`);

   
   const kelvinValue = 298.15;
   console.log(`${kelvinValue} kelwinow = ${kelvinToCelsius(kelvinValue).toFixed(2)} stopni Celsiusza`);
   console.log(`${kelvinValue} kelwinow = ${kelvinToFahrenheit(kelvinValue).toFixed(2)} stopni Fahrenheita`);