import { useDispatch } from 'react-redux';
import { openModalAddTransaction } from 'redux/global/slice';
import { Button, Icon } from './ButtonAddTransactions.styled';

export const ButtonAddTransactions = () => {
  const dispatch = useDispatch();

  return (
    <Button
      type="button"
      aria-label="Add transaction"
      onClick={() => dispatch(openModalAddTransaction())}
    >
      <Icon />
    </Button>
  );
};
