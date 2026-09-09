const addBtn = document.getElementById('add-btn')
const todoInput = document.getElementById('todo-input')

// lets take ul as a reference here
const todoItemsContainer = document.getElementById('todo-items-container')


addBtn.addEventListener('click', () => {
    // getting input from the user and storing it to value
    const value = todoInput.value

    // Now we need to dynamically create li tag and put the user value inside it
    const li = document.createElement('li')
    li.innerText = value

    // Now we implement the 'X' button for the li we add
    const delButton = document.createElement('button')
    delButton.innerText = 'X';

    // clicking on X should delete the li related to it
    delButton.addEventListener('click', function() {
        li.remove()
    })

    // We have got our li but its hanging in this file only. its not in the DOM yet
    // Lets link the li to ul in html file by creating a id for ul to uniquely identify the ul tag

    // We know, 'X' should be child of li
    li.appendChild(delButton)

    // now lets append the li to the ul
    todoItemsContainer.appendChild(li)

    // but whatever user input, the text remains in the input field even after adding the input
    // So we must remove the user input text from input field as soon as it is added to the ul container
    todoInput.value = ""

    
})