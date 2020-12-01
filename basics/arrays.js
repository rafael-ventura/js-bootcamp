const notesZ = ["backpack", "mostard","elemental love", "mistery business"]

console.log(`Tamanho inicial: ${notesZ.length}`);
console.log(`O ultimo item do array (${notesZ.pop()}) foi excluido`);

console.log(`Atual tamanho: ${notesZ.length}`);

notesZ.push('My New note');
console.log(`Foi adicionado um elemento no final do array, agora ele tem tamanho de: ${notesZ.length}`);

console.log(`O primeiro item do array (${notesZ.shift()}) foi excluido`);
console.log(`Atual tamanho: ${notesZ.length}`);

notesZ.unshift("First Punch");
console.log(`Foi adicionado um elemento no inicio do array, agora ele tem tamanho de: ${notesZ.length}`);

notesZ.splice(1, 1, "Second monster item");
console.log(`Foi adicionado um elemento no meio do array, excluindo 1 elemento a partir da casa 1 e adicionando o novo elemento`);

console.log(`array final:`);
notesZ.forEach( function(element,i) {
    console.log(`[${notesZ[i]}]`);
})