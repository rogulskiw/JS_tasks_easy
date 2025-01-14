const rollDice = () => {
    const min = 1; 
    const max = 6; 
    
    const randomNumber = Math.floor(Math.random()*(max - min +1));
    return randomNumber;
};
const roll = rollDice();
console.log(`Wynik rzutu kostką: ${roll}`);
