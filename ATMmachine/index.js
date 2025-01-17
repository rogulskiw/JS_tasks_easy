let accountBalance = 1000; 

const depositCash = (amount) => {
    accountBalance += amount; 
    console.log(`Wplacono ${amount} zl. Aktualny stan konta: ${accountBalance} zl`);
}

const withdrawCash = (amount) => {
    if(amount <= accountBalance){
        accountBalance -= amount;
        console.log(`Wyplacono ${amount} zl. Aktualny stan konta: ${accountBalance} zl`);
    }else {
        console.log("Brak wystarczajacych srodkow na koncie.");
    }
}

function checkBalance(){
    console.log(`Aktualny stan konta: ${accountBalance} zl`);
}

depositCash(500);
checkBalance();
withdrawCash(200);
checkBalance();