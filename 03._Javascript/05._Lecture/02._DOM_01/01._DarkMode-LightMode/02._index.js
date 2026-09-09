
// this manipulates DOM (HTML stracture)

// document.write("MRX says Hi!") 

// to make background black on button click

function onClickColor(color) {
    document.body.style.backgroundColor = color
}

const darkMode = document.getElementById('dark-mode-button')

darkMode.addEventListener('click', function() {
    console.log('I got clicked')
    onClickColor('black')
})

darkMode.addEventListener('click', function() {
    console.log('Storing Dark Mode value in DB')
})

const themeButton = document.getElementById('change-theme')

themeButton.addEventListener('click', () => {
    const currentTheme = document.body.style.backgroundColor

    if(!currentTheme || currentTheme === 'white') {
        onClickColor('black')
        themeButton.innerText = 'Light Mode'
    } else {
        onClickColor('white')
        
        themeButton.innerText = 'Dark Mode'
    }
})







