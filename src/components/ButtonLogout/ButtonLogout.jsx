import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { openModalLogout } from 'redux/global/slice';
import { Button, Icon } from './ButtonLogout.styled';

export const ButtonLogout = () => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <Button
      type="button"
      aria-label="Logout"
      onClick={() => dispatch(openModalLogout())}
    >
      <Icon />
      {!isMobile && 'Exit'}
    </Button>
  );
};
