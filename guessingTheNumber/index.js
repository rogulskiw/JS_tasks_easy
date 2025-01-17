function generateRandomNumber() {
    const number = Math.floor(Math.random() * 100) + 1
    return number;
}

function guessNumber(userGuess, randomNumber) {
    if(userGuess=== randomNumber){
        console.log('Gratulacje, zgadłes')
    } else if (userGuess < randomNumber) {
        console.log("Wylosowana liczba jest wieksza")
    } else {
        console.log("Wylosowana liczba jest mniejsza")
    }
}

const randomNumber = generateRandomNumber();
const userGuess = 65;
console.log(randomNumber)

guessNumber(userGuess, randomNumber); 