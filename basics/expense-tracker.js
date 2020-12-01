let myAccount = {
    name: 'Rafael',
    expenses : 420, 
    income : 0,
    balance : -420
}
function addExpense(account, amount) {
    account.expenses = account.expenses + amount;
    account.balance = account.balance - amount;
}

function addIncome(account, amount){ 
    account.income = account.income + amount;
    account.balance = account.balance + amount;
}

function resetAccount(account){
    account.expenses = 0;
    account.income = 0;
    account.balance = 0;
}

function getAccountSummary (account){
    return `Accouunt for ${account.name} has $${account.balance}. ${account.income} in income. ${account.expenses} in expenses.`
}


console.log(getAccountSummary(myAccount));
addIncome(myAccount, 460);
console.log(getAccountSummary(myAccount));
addExpense(myAccount, 40);
console.log(getAccountSummary(myAccount));
addIncome(myAccount, 50);
console.log(getAccountSummary(myAccount));
addExpense(myAccount, 60);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));

