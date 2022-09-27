"use strict"
const modalTriggers = document.querySelectorAll('[data-modal-target]')
const overlay = document.getElementById('overlay')
const modalImg = document.getElementById('modal-img')
const form = document.getElementById('contact-form')

modalTriggers.forEach(img => {
    img.addEventListener('click', (e) => {
        const modal = document.querySelector(img.dataset.modalTarget)
        modalImg.src = e.currentTarget.src
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.modal_active')
    modals.forEach(modal => {
        closeModal(modal)
        modalImg.src = ''
    })
})

function openModal(modal) {
    if (modal) {
        modal.classList.add('modal_active')
        overlay.classList.add('overlay_active')  
    }  
}

function closeModal(modal) {
    if (modal) {
        modal.classList.remove('modal_active')
        overlay.classList.remove('overlay_active')
    }  
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    form.reset()
})


