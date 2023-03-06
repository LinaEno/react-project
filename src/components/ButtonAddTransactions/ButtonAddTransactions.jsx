import { MdAddCircle } from 'react-icons/md';
import { Button } from './ButtonAddTransactions.styled';
import { useDispatch } from 'react-redux';
import { openModalAddTransaction } from 'redux/global/slice';

export const ButtonAddTransactions = () => {
  const dispatch = useDispatch();

  return (
    <Button
      type="button"
      aria-label="Add transaction"
      onClick={() => dispatch(openModalAddTransaction())}
    >
      <MdAddCircle size={44} />
    </Button>
  );
};
