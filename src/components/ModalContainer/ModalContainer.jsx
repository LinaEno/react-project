import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  ModalMobile,
  Overlay,
  ModalBox,
  CloseButton,
  Icon,
  ModalWrapper,
} from './ModalContainer.styled';
import { useDispatch } from 'react-redux';
import { closeModal } from 'redux/global/slice';
import { useMediaQuery } from 'react-responsive';
import { Header } from 'components/Header/Header';

const modalRoot = document.getElementById('modal-root');

export const ModalContainer = ({ children }) => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: '(max-width: 767.98px)' });

  useEffect(() => {
    const onEscapeClick = e => {
      if (e.code === 'Escape') dispatch(closeModal());
    };

    document.body.style = 'overflow-y: hidden';
    window.addEventListener('keydown', onEscapeClick);

    return () => {
      document.body.style = 'overflow-y: auto';
      window.removeEventListener('keydown', onEscapeClick);
    };
  }, [dispatch]);

  const onOverlayClick = e => {
    if (e.target === e.currentTarget) dispatch(closeModal());
  };

  return (
    <>
      {isMobile
        ? createPortal(
            <ModalMobile>
              <Header />
              <ModalWrapper>{children}</ModalWrapper>
            </ModalMobile>,
            modalRoot
          )
        : createPortal(
            <Overlay onClick={onOverlayClick}>
              <ModalBox>
                <CloseButton
                  type="button"
                  onClick={() => dispatch(closeModal())}
                >
                  <Icon />
                </CloseButton>
                {children}
              </ModalBox>
            </Overlay>,
            modalRoot
          )}
    </>
  );
};
