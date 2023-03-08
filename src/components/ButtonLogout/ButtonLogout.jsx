import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { openModalLogout } from 'redux/global/slice';
import { Button, Icon } from './ButtonLogout.styled';
import { useTranslation } from 'react-i18next';
export const ButtonLogout = () => {
   const { t } = useTranslation();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <Button
      type="button"
      aria-label="Logout"
      onClick={() => dispatch(openModalLogout())}
    >
      <Icon />
      {!isMobile && t('header.btnExit')}
    </Button>
  );
};
