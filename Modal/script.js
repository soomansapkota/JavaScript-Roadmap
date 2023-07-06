const buttonModal = document.querySelectorAll('[data-modal-target]')
const closeButton = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')


buttonModal.forEach(button => {
    button.addEventListener('click', () => {
        
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
        
    })
})

function openModal(modal) {
    if (modal == null) return
    console.log("Hello")
    modal.classList.add('active')
    overlay.classList.add('active')
}

closeButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})


function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}
