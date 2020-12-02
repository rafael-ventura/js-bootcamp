const notes = [{
    title: 'latin america',
    body: 'corpao violao'
}, {
    title: 'europe',
    body: 'diverse white people'
}, {
    title: 'africa',
    body: 'diverse black (and imperialist white gene) people'
}
]

// // Para procurar o indice de algum valor num array de objetos(principalmente),
// // eh recomendado usar o finIndex(function (item, index)) e procurar, manualmente, a propriedade procurada
// // metodo que retorna um valor inteiro representando o index. 
// // se for -1, nao esta presente no array

// const posicao = notes.findIndex(function (item, index){
//     console.log(item);
//     return item.title === 'africa'
//     //return item.title === 'Habbits to work on' //retornar -1

// })
// console.log(posicao);

const findNoteByTitle = function (notesFile, noteWanted) {
    return notes.find(function (item, index) {
        return item.title.toUpperCase() === noteWanted.toUpperCase()
    })
}

const note = findNoteByTitle(notes, 'a');
console.log(note);