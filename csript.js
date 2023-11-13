const inputs = document.querySelectorAll('input')

const arr = ['nojnici', 'kamen', 'bumaga']

inputs.forEach((input) => {
    input.addEventListener('click', (e) => {
        const random = Math.ceil(Math.random() * 3)
        console.log(e.target.value)
        console.log(random)
    })
})