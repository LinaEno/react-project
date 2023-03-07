import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';

import { NavLink, useNavigate } from 'react-router-dom';
import { getUserName, selectToken } from 'redux/auth/authSelectors';
import { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { addTransaction } from 'redux/transactions/operations';
import { selectCategories } from 'redux/transactions/selectors';

export default function ModalAddTransaction2() {
  const { register, handleSubmit, formState, reset, getValues, getFieldState } =
    useForm({
      //    resolver: yupResolver(schema),
    });
  const dispatch = useDispatch();
  //   const [transactionType, setTransactionType] = useState('EXPENSE');
  //   console.log(transactionType);
  //   const changeTransactionType = type => {
  //     switch (type) {
  //       case 'INCOME':
  //         setTransactionType('INCOME');
  //         return;
  //       case 'EXPENSE':
  //         setTransactionType('EXPENSE');
  //         return;
  //       default:
  //         return;
  //     }
  //   };
  //   console.log(getValues('type'));
  console.log(getFieldState('type', formState));

  const onSubmit = ({ transactionDate, type, categoryId, comment, amount }) => {
    dispatch(
      addTransaction({ transactionDate, type, categoryId, comment, amount })
    );

    reset();
  };

  const categories = useSelector(selectCategories);
  console.log(categories);

  const income = categories.filter(category => category.type === 'INCOME');

  const expense = categories.filter(category => category.type !== 'INCOME');

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <label>
          Income
          <input
            {...register('type')}
            type="radio"
            name="type"
            value="INCOME"
          />
        </label>
        <label>
          <input
            {...register('type')}
            type="radio"
            name="type"
            value="EXPENSE"
            checked
          />
          Expense
        </label>

        <select {...register('categoryId')}>
          {expense.map(category => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>

        <label>
          <input type="number" {...register('amount')} placeholder="0.00" />
        </label>
        <label>
          <input
            type="date"
            {...register('transactionDate')}
            placeholder="01.01.2023"
          />
        </label>
        <label>
          <input type="text" {...register('comment')} placeholder="Comment" />
        </label>
        <button
          type="submit"
          // onClick={() => dispatch(closeModalAddTransaction())}
        >
          Add
        </button>
        <button type="button">Cancel</button>
      </form>
    </section>
  );
}
