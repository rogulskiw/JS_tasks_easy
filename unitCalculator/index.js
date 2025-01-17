const centimetersToInchesRatio = 0.393701;
const inchesToCentimetersRatio = 2.54;

function convertCentimetersToInches(centimetersValue){
    const centToInch = centimetersValue * centimetersToInchesRatio;
    return centToInch; 
}

function convertInchesToCentimeters(inchValue) {
    const inchToCent = inchValue * inchesToCentimetersRatio;
    return inchToCent;
}

const centimetersValue = 30;
const inchesValue2 = 10;

const inchesValue = convertCentimetersToInches(centimetersValue);
console.log(`${centimetersValue} cm to rownowartosc ${inchesValue.toFixed(2)} cali`);

const centimValue = convertInchesToCentimeters(inchesValue2);
console.log(`${inchesValue2} cali to rownowartosc ${centimValue} cm`)