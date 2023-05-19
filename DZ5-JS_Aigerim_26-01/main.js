var input = document.querySelector('#input')
var createButton = document.querySelector('#create_button')
var todoList = document.querySelector('#todo_list')


const createTodo = () => {
    if(input.value.trim() === '') return null

    var div = document.createElement('div')
    var text = document.createElement('h3')
    div.setAttribute('class', 'block_text')


    var deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'delete_button')
    var deleteButtonName = 'delete'

    const removeText = () => {
        div.remove()
    }
    deleteButton.onclick = () => removeText()


    var editButton = document.createElement('button')
    editButton.setAttribute('class', 'edit_button')
    var editButtonName = 'edit'

    const edit = () => {
        var editedText = text.innerText
        var newText = prompt(`EDITED: ${editedText}`);
        if (newText !== null && newText.trim() !== '') {
            text.textContent = newText
        } else {
            alert('Введите текст!!!')
        }
    }
    
    editButton.onclick = () => edit()

    text.innerText = input.value

    div.append(text)
    editButton.append(editButtonName)
    div.append(editButton)
    deleteButton.append(deleteButtonName)
    div.append(deleteButton)
    todoList.prepend(div)
    input.value = ''
}

createButton.onclick = () => createTodo();
window.onkeydown = (event) => {
    if (event.keyCode === 13) {
        createTodo()
    }
}