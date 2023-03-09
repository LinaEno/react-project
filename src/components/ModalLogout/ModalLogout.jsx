import { useDispatch, useSelector } from 'react-redux';
import { FcQuestions } from 'react-icons/fc';
import { logOut } from 'redux/auth/authOperation';
import { closeModalLogout } from 'redux/global/slice';
import {
  Wrapper,
  Content,
  Question,
  ButtonsList,
  Button,
  Icon,
} from './ModalLogout.styled';
import catLogout from '../../images/catLogout.jpg';
import { useTranslation } from 'react-i18next';
import { Default } from '../Media/Media';
import { useNavigate } from 'react-router-dom';
import { selectToken } from 'redux/auth/authSelectors';
import { useEffect } from 'react';

const ModalLogout = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const closeModal = () => dispatch(closeModalLogout());
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  const modalLogout = () => {
    dispatch(logOut());
    closeModal();
  };

  useEffect(() => {
    if (token === null) navigate('/login');
  }, [token, navigate]);

  return (
    <Wrapper>
      <Question>{t('modalLogOutQuestion')}</Question>
      <Content>
        <Default>
          <FcQuestions size="144px" />
        </Default>
        <ButtonsList>
          <Button type="button" onClick={modalLogout}>
            {t('modalLogOutAcceptBtn')}
          </Button>
          <Button type="button" onClick={closeModal}>
            {t('modalLogOutCancelBtn')}
          </Button>
        </ButtonsList>
      </Content>
      <Icon src={catLogout} alt="cat" width={300} />
    </Wrapper>
  );
};

export default ModalLogout;
