import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeModalAddTransaction } from 'redux/global/slice';
import { addTransaction } from 'redux/transactions/operations';
import Categories from './Categories';

//     {
//   "transactionDate": "string",
//   "type": "INCOME",
//   "categoryId": "string",
//   "comment": "string",
//   "amount": 0
// }

export default function ModalAddTransaction() {
  const dispatch = useDispatch();
  const [transactionType, setTransactionType] = useState('');

  // const changeTransactionType = e => {

  //   switch (e.target.value) {
  //     case 'INCOME':
  //       console.log(e.target.value);
  //       setTransactionType('INCOME');
  //       break;
  //     case 'EXPENSE':
  //       console.log(e.target.value);
  //       setTransactionType('EXPENSE');
  //       break;
  //     default:
  //       return;
  //   }
  //   console.log(e.target.value);
  // };
  const handleSubmit = e => {
    e.preventDefault();
    const { transactionDate, type, categoryId, comment, amount } =
      e.target.elements;
    console.log(e.target.value);

    const transaction = {
      transactionDate: transactionDate.value,
      type: type.value,
      categoryId: categoryId.value,
      comment: comment.value,
      amount: amount.value,
    };
    // console.log(transaction);
    dispatch(addTransaction(transaction));
    e.target.reset();
  };
  // console.log(transactionType);

  return (
    <form
      style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
      onSubmit={handleSubmit}
    >
      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
        <label htmlFor="transactionChoice1">Income</label>
        <input
          type="radio"
          id="transactionChoice1"
          name="type"
          value="INCOME"
          // onChange={changeTransactionType}
          // onChange={e => changeTransactionType(e)}
        />

        <input
          type="radio"
          id="transactionChoice2"
          name="type"
          value="EXPENSE"
          // onChange={changeTransactionType}
          // onChange={e => changeTransactionType(e)}
          // checked
        />
        <label htmlFor="transactionChoice2">Expense</label>
      </div>
      {/* <select name="categoryId">
        <option value="value1">value1</option>
        <option value="value2" selected>
          value2
        </option>
        <option value="value3">value3</option>
      </select> */}
      {transactionType === 'EXPENSE' && <Categories />}

      <label>
        <input placeholder="0.00" type="text" name="amount" required />
      </label>
      <label>
        <input
          placeholder="01.01.2023"
          type="date"
          name="transactionDate"
          required
        />
      </label>
      <label>
        <input placeholder="Comment" type="text" name="comment" />
      </label>
      <button
        type="submit"
        // onClick={() => dispatch(closeModalAddTransaction())}
      >
        Add
      </button>
      <button type="button">Cancel</button>
    </form>
  );
}
