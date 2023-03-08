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

import { selectModalTransactionData } from 'redux/global/selectors';

import { closeModalAddTransaction } from 'redux/global/slice';

export default function ModalAddTransaction() {
  const { t } = useTranslation();
  const categories = useSelector(selectCategories);
  const modalTransactionData = useSelector(selectModalTransactionData);
  console.log(modalTransactionData);
  const { register, handleSubmit, watch, reset } = useForm({
    //    resolver: yupResolver(schema),
    defaultValues: {
      type: modalTransactionData?.category.type,
      amount: Math.abs(modalTransactionData?.amount),
      transactionDate: modalTransactionData?.transactionDate,
      comment: modalTransactionData?.comment,
      categoryId: modalTransactionData?.categoryId,

      // type: 'EXPENSE',
    },
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
          {t('modalAddTransactionIncomesType')}
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
          {t('modalAddTransactionOutcomesType')}
        </label>

        <select
          {...register('categoryId')}
          style={{
            opacity: type === 'INCOME' ? 0 : 1,
            width: type === 'INCOME' ? 0 : '100px',
            height: type === 'INCOME' ? 0 : '20px',
          }}
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
          <input type="text" {...register('comment')} placeholder={t('modalAddTransactionComment')}/>
        </label>
        <button type="submit"> {t('modalAddTransactionAcceptBtn')}</button>
        <button
          type="button"
          onClick={() => dispatch(closeModalAddTransaction())}
        >
          {t('modalAddTransactionCancelBtn')}
        </button>
      </form>
    </section>
  );
}
