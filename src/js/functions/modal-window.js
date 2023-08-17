export const modalWindow = ({ modal, btnOpen, btnClose, time = 300 }) => {
  const modalButtons = document.querySelectorAll(btnOpen);
  const modalElem = document.querySelector(modal);

  modalElem.style.cssText = `
  display: flex;
  visibility: hidden;
  opacity: 0;
  transition: opacity ${time}ms ease-in-out;
  `;

  const closeModal = (e) => {
    const target = e.target;

    if (
      target === modalElem ||
      (btnClose && target.closest(btnClose)) ||
      e.code === "Escape"
    ) {
      modalElem.style.opacity = 0;

      setTimeout(() => {
        modalElem.style.visibility = "hidden";
      }, time);

      window.removeEventListener("keydown", closeModal);
    }
  };

  const openModal = () => {
    modalElem.style.visibility = "visible";
    modalElem.style.opacity = 1;

    window.addEventListener("keydown", closeModal);
  };

  modalButtons.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  modalElem.addEventListener("click", closeModal);
};

modalWindow({
  modal: ".modal1",
  btnOpen: ".modal-btn1",
  btnClose: ".modal__close",
});

// Подключение второго или более модальных окон
// modalWindow({
//   modal: ".modal2",
//   btnOpen: ".modal-btn2",
//   btnClose: ".modal__close",
// });
