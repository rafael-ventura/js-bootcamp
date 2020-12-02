const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean Ktichen',
    completed: false
}, {
    text: 'Buy Food',
    completed: false
}]
const deleteTodo = function (todos, todoText){
    const indexToDo = todos.findIndex(function(item) {
       return item.text.toUpperCase() === todoText.toUpperCase()
    })
    if (indexToDo > -1) {
        todos.splice(indexToDo,1);
    }
    console.log(todos);
}
console.log(deleteTodo(todos, 'Buy Food'));


// convert array to array of objects -> text, completed
// create function to remove a todo by text value
