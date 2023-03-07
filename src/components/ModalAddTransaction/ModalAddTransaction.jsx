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

export default function ModalAddTransaction() {
  const categories = useSelector(selectCategories);
  const { register, handleSubmit, watch, reset } = useForm({
    //    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const { type } = watch();
  const options = categories.filter(category => {
    return category.type === type;
  });
  const onSubmit = ({ transactionDate, type, categoryId, comment, amount }) => {
    dispatch(
      addTransaction({
        transactionDate,
        type,
        categoryId: type === 'INCOME' ? options[0].id : categoryId,
        comment,
        amount: type === 'INCOME' ? Number(amount) : -Number(amount),
      })
    );
    reset();
  };
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
          />
          Expense
        </label>
        <select
          {...register('categoryId')}

          // style={{ opacity: type === 'INCOME' ? 0 : 1 }}
        >
          {options.map(category => {
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
