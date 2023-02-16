const form = document.querySelector('#form');
const todoList = document.querySelector('ul');
const listItems = document.querySelector('li');
const input = document.querySelector('#todo');
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
const savedBtns = localStorage.getItem("buttons");
const clearBtn = document.querySelector('.clear');

for (let i = 0; i < savedTodos.length; i++) {
    let createTodo = document.createElement('li');
    createTodo.innerText =  savedTodos[i];
    todoList.appendChild(createTodo);
    for (let j = 0; j < savedBtns.length; j++) {
        const removeBtn = document.createElement('button');
        createTodo.appendChild(removeBtn);
    }
    clearBtn.addEventListener('click', function(){
        localStorage.clear();
        createTodo.remove(savedTodos);
       })
}



form.addEventListener('submit', function(e) {
    e.preventDefault();
    const createTodo = document.createElement('li');
    const removeBtn = document.createElement('button');
    let itemValue = document.getElementById('todo').value;
    createTodo.innerText = itemValue;
    todoList.appendChild(createTodo);
    createTodo.appendChild(removeBtn);
    document.getElementById("form").reset();
    savedTodos.push(createTodo.innerText);
    localStorage.setItem("todos",  JSON.stringify(savedTodos));
    localStorage.setItem("buttons", savedBtns);

    clearBtn.addEventListener('click', function(){
        localStorage.clear();
        createTodo.remove(itemValue);
        
       })
    
})

todoList.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('todo-item');
    } else if (e.target.tagName === 'BUTTON' && e.target.classList != 'clear') {
        e.target.parentElement.remove();
        localStorage.clear();
    } 
})



