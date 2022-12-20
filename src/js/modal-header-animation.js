(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('.buy-button'),
    closeModalBtn: document.querySelector('[buy-modal-close]'),
    modal: document.querySelector('[buy-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModalAnimation);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-header');
    refs.modal.setAttribute('open', '');
    refs.modal.addEventListener(
      'animationend',
      () => {
        refs.modal.removeAttribute('open');
      },
      { once: true },
    );
  }

  function toggleModalAnimation() {
    refs.modal.setAttribute('buy-modal-close', '');
    refs.modal.addEventListener(
      'animationend',
      () => {
        refs.modal.removeAttribute('buy-modal-close');
        refs.modal.classList.toggle('is-hidden-header');
      },
      { once: true },
    );
  }
})();