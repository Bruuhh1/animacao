let lista = document.querySelectorAll('.item')
let next = document.getElementById('next')
let prev = document.getElementById('prev')

let count = lista.length
let active = 0

prev.addEventListener('click', () => {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')

    active = active <= 0 ? count - 1 : active - 1
    lista[active].classList.add('active')
})

next.addEventListener('click', () => {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')

    active = active >= count -1 ? 0 : active + 1
    lista[active].classList.add('active')
})

