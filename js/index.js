// References to UI elements
const list = document.querySelector('ul')
const input = document.querySelector('input')

// Event listener for the input field
input.addEventListener('keypress',(event) => {
    if (event.key === 'Enter') {
        event.preventDefault()
        
        // Get's the value from the input field
        const task = input.value.trim()

        // Check if the input field is empty
        if (task !== '') {

            // Create a new list item
            const li = document.createElement('li')

            // Set the innerHTML of the list item to the task text
            li.setAttribute('class','list-group-item')
            li.innerHTML = task

            // Append the list item to the list
            list.append(li)

            // Clear the input field
            input.value = ''
        }
    }
})