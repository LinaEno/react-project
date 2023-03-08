import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FcQuestions } from 'react-icons/fc';
import { logOut } from 'redux/auth/authOperation';
import { closeModalLogout } from 'redux/global/slice';
import { Wrapper, Content, Question, ButtonsList, Button } from './ModalLogout.styled';
import { Default } from '../Media/Media'


const ModalLogout = () => {
  const dispatch = useDispatch();

  const closeModal = () => dispatch(closeModalLogout());

  return (
    <Wrapper>
      <Question>Are you sure you want to Logout?</Question>
      <Content>
        <Default><FcQuestions size="144px" /></Default>
        <ButtonsList>
          <Button type="button" onClick={() => dispatch(logOut())}>
            <NavLink styled={{TextDecoder: 'none'}} to={'/login'}>Yes</NavLink>
          </Button>
          <Button type="button" onClick={closeModal}>
            No
          </Button>
        </ButtonsList>
      </Content>
    </Wrapper>
  );
};

export default ModalLogout;
