import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FcQuestions } from 'react-icons/fc';
import { logOut } from 'redux/auth/authOperation';
import { closeModalLogout } from 'redux/global/slice';
import { Wrapper, Content, Question, ButtonsList, Button } from './ModalLogout.styled';
import { useTranslation } from 'react-i18next';


const ModalLogout = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const closeModal = () => dispatch(closeModalLogout());

  return (
    <Wrapper>
      <Question>{t('modalLogOutQuestion')}</Question>
      <Content>
      <FcQuestions size="144px" />
        <ButtonsList>
          <Button type="button" onClick={() => dispatch(logOut())}>
            <NavLink to={'/login'}>{t('modalLogOutAcceptBtn')}</NavLink>
          </Button>
          <Button type="button" onClick={closeModal}>
            {t('modalLogOutCancelBtn')}
          </Button>
        </ButtonsList>
      </Content>
    </Wrapper>
  );
};

export default ModalLogout;
