const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalMessage = document.getElementById('modalMessage');
const closeModalButton = document.getElementById('closeModal');
let modalCallback = null;

if (closeModalButton) {
    closeModalButton.addEventListener('click', () => {
        modal.classList.add('hidden');
        if (modalCallback) {
            modalCallback();
            modalCallback = null;
        }
    });
}

function showModal(title, message, callback = null) {
    if (modal && modalTitle && modalMessage) {
        modalTitle.textContent = title;
        modalMessage.textContent = message;
        modalCallback = callback;
        modal.classList.remove('hidden');
        modal.querySelector('div').classList.remove('scale-95');
        modal.querySelector('div').classList.add('scale-100');
    }
}