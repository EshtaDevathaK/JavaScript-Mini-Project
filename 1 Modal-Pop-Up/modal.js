const openBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal'); // bg + box-modal
const closeBtn = modal.querySelector('.close-btn');
const overlay = modal.querySelector('.modal-overlay'); // box-modal alone


// ✅ Open Modal
openBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

// ✅ Close Modal
const closeModal = () => {
  modal.classList.add('hidden');
};

// ✅ Close on X click
closeBtn.addEventListener('click', closeModal);

// ✅ Close on overlay click , ✅ This line exists—it allows clicking on the overlay (background) to close the modal.
overlay.addEventListener('click', closeModal);

// ✅ Close on ESC key
document.addEventListener('keydown', (e) => {
  // Modal hidden illa apdina just close The Modal - that's what said in as !modal.classList.contains('hidden')
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
