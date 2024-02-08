const toDo = document.querySelector('.to-do')
const button = document.querySelector('button')
const input = document.querySelector('.input')
const error = document.querySelector('.error')
const container = document.querySelector('.container')
let todoArray = JSON.parse(localStorage.getItem("todos")) || []

button.addEventListener('click', (e) => {
    e.preventDefault()
    if (input.value === '') {
        error.innerHTML = '<p class="errorText">Please fill the input field</p>'
        setTimeout(function(){
            error.innerHTML = ""
        },2000)
    } else {
        container.innerHTML += `<p>${input.value}</p>`
        const toDoObj = {
            toDo:input.value,
            id:Math.random()
        }
        todoArray.push(toDoObj)
        localStorage.setItem("todos", JSON.stringify(todoArray))
        console.log(toDoObj)

        input.value = ''
    }
})

function displayTodo(){
    todoArray.forEach(todo => {
        container.innerHTML += `<div class="toDoDiv"><p class="toDoClass">${todo.toDo}</p><button onclick="deleteTodo(${todo.id})" class="toDoDivB">-</button></div>`
    });

}

displayTodo();

function deleteTodo(id){
    console.log(id);
    let todoIndex = todoArray.findIndex(todo => todo.id === id)
    console.log(todoIndex)
    todoArray.splice(todoIndex, 1);
    console.log(todoArray.splice(todoIndex, 1))
    // localStorage.removeItem('todos', JSON.stringify(todoArray))
    // location.reload()
}


container.addEventListener('click', function(e){
    if (e.target.classList.contains('toDoDivB')) {
        e.target.parentElement.remove()
        console.log(e.target.parentElement);
    }
})
