const openModalBtn = document.querySelector('.button-hero');
const closeModalBtn = document.querySelector('.close-modal-button');
const modalOverlay = document.querySelector('.modal-overlay');

openModalBtn.addEventListener('click', () => {
  modalOverlay.classList.add('is-open');
  document.body.classList.add('modal-open');
});

closeModalBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('is-open');
  document.body.classList.remove('modal-open');
});

modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove('is-open');
    document.body.classList.remove('modal-open');
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    modalOverlay.classList.remove('is-open');
    document.body.classList.remove('modal-open');
  }
});
