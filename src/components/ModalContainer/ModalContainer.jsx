import { MdClose } from 'react-icons/md';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalBox, CloseButton } from './ModalContainer.styled';
import { useDispatch } from 'react-redux';
import { closeModal } from 'redux/global/slice';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';

const modalRoot = document.getElementById('modal-root');

export const ModalContainer = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const onEscapeClick = e => {
      if (e.code === 'Escape') dispatch(closeModal());
    };

    //   document.body.style = 'overflow-y: hidden';
    window.addEventListener('keydown', onEscapeClick);

    return () => {
      // document.body.style = 'overflow-y: auto';
      window.removeEventListener('keydown', onEscapeClick);
    };
  }, [dispatch]);

  const onOverlayClick = e => {
    if (e.target === e.currentTarget) dispatch(closeModal());
  };

  return createPortal(
    <Overlay onClick={onOverlayClick}>
      <ModalBox>
        <CloseButton type="button" onClick={() => dispatch(closeModal())}>
          <MdClose size={28} />
        </CloseButton>
        {children}
      </ModalBox>
    </Overlay>,
    modalRoot
  );
};
