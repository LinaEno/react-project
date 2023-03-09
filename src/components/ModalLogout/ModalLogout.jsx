import { useDispatch } from 'react-redux';
import { FcQuestions } from 'react-icons/fc';
import { logOut } from 'redux/auth/authOperation';
import { closeModalLogout } from 'redux/global/slice';
import {
  Wrapper,
  Content,
  Question,
  ButtonsList,
  Button,
  StyledNavLink
} from './ModalLogout.styled';
import { useTranslation } from 'react-i18next';
import { Default } from '../Media/Media';
import Animation from './Animation';
import { NavLink } from 'react-router-dom';

const ModalLogout = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const closeModal = () => dispatch(closeModalLogout());

  return (
    <Wrapper>
      <Question>{t('modalLogOutQuestion')}</Question>
      <Content>
        <Default>
          <FcQuestions size="144px" />
        </Default>
        <ButtonsList>
          <Button type="button" onClick={() => dispatch(logOut())}>

           {/* <StyledNavLink to={'/login'}>{t('modalLogOutAcceptBtn')}</StyledNavLink>*/}

            {t('modalLogOutAcceptBtn')}

          </Button>
          <Button type="button" onClick={closeModal}>
            {t('modalLogOutCancelBtn')}
          </Button>
        </ButtonsList>
      </Content>
      <Default>
        <Animation />
      </Default>
    </Wrapper>
  );
};

export default ModalLogout;
