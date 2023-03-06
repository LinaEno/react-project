// import { Button } from './ButtonLogout.styled';
import { useDispatch } from 'react-redux';
import { openModalLogout } from 'redux/global/slice';

export const ButtonLogout = () => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      aria-label="Logout"
      onClick={() => dispatch(openModalLogout())}
    >
      Exit
    </button>
  );
};
