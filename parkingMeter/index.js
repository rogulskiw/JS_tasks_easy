const calculateParkingFee = (hours) => {
    const baseRate = 3; 
    const hourlyRate = 3; 

    if(hours<=0){
        return 0;
    } else if(hours === 1){
        return baseRate;
    } else {
        const additionalHours = hours - 1; 
        const additionalFee = additionalHours * hourlyRate; 
        return baseRate + additionalFee;
    }
}

const parkedHours = 3; 

const parkingFee = calculateParkingFee(parkedHours);
console.log(`Oplata parkingowa za ${parkedHours} godzin(y) wynosi ${parkingFee} zl`);