const openModalTriggers = document.querySelectorAll('[data-modal-target]')
const overlay = document.getElementById('overlay')

openModalTriggers.forEach(img => {
    img.addEventListener('click', (e) => {
        const modal = document.querySelector(img.dataset.modalTarget)
        const modalImg = document.getElementById('modal-img')
        modalImg.src = e.currentTarget.src
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
        modalImg.src = ' '
    })
})

function openModal(modal) {
    if (modal === null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal === null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}


const form = document.getElementById('contact-form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    /* send data */
    console.log('submit')
    form.reset()
    
})


