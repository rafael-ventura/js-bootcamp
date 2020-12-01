let person = {
	name: 'rafa',
  age: 21,
  location : 'RJ'
}

//console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);
person.age++;
//console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);

let myBook = {
	title: 'O Pistoleiro', 
  author: 'Stephen King',
  pageCount: 240
}
let otherBook = {
	title: 'A escolha dos Tres', 
  author: 'Stephen King',
  pageCount: 390
}
let getSummary = function(book){
	console.log( `${book.title} by  ${book.author}`);
}
//getSummary(myBook);
//getSummary(otherBook);

function tempConv (fahrenheit) 
{
    return {
        fahrenheit : fahrenheit, 
        celsius: (fahrenheit - 32) * 5/9,
        kelvin: (fahrenheit + 459.67) * 5/9
    }
}

let temperature = tempConv(32);
//console.log(temperature);

let myAccount = {
    name: 'Rafael',
    expenses: 420, 
    income : 0
}
let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount;
}
 addExpense(myAccount, 420);
 console.log(myAccount);