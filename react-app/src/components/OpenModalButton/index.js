import React from 'react';
import { useModal } from '../../context/Modal';

function OpenModalButton({
  modalComponent, // component to render inside the modal
  buttonText, // text of the button that opens the modal
  onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
  onModalClose, // optional: callback function that will be called once the modal is closed
  showMenu,
  setShowMenu
}) {
  const { setModalContent, setOnModalClose, closeModal } = useModal();

  const onClick = () => {
    setShowMenu(true)
    if (onModalClose) setOnModalClose(onModalClose);
    setModalContent(modalComponent);
    if (onButtonClick) onButtonClick();
  };

  return (
    <>
      {!showMenu ? (
        <button onClick={onClick} className="menu-icon">
          <i class="fa-solid fa-bars"></i>
        </button>
      ) : (
        <button onClick={() => {
          setShowMenu(false)
          closeModal()
        }}
        className="menu-icon">
          <i class="fa-solid fa-xmark"></i>
        </button>
      )}
    </>
  );
}

export default OpenModalButton;
