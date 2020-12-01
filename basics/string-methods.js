let name = '    Rafa Ventura  '

// console.log(name);
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.includes('afa'));
// console.log(name.includes('Cantanhede'));
// console.log(name.trim());



function isValidPassword(password) {
    return password.length > 8 && !password.includes('password')  
}

console.log(isValidPassword('rafa.123'));
console.log(isValidPassword('password.123'));
console.log(isValidPassword('amore'));

