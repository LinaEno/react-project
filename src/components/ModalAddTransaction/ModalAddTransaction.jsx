import { Controller, useForm } from 'react-hook-form';
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

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'moment/locale/uk';
import moment from 'moment';

export default function ModalAddTransaction() {
  const { t } = useTranslation();
  const categories = useSelector(selectCategories);
  const modalTransactionData = useSelector(selectModalTransactionData);
  // console.log(modalTransactionData);
  const { register, handleSubmit, watch, reset, control } = useForm({
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
    const ttt = dispatch(
      addTransaction({
        transactionDate,
        type,
        categoryId: type === 'INCOME' ? options[0].id : categoryId,
        comment,
        amount: type === 'INCOME' ? Number(amount) : -Number(amount),
      })
    );
    console.log(ttt);
    reset();
  };
  const [startDate, setStartDate] = useState(new Date());
  return (
    <section>

      <h2 style={{ textAlign: 'center' }}>Add transaction</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
      >
        <div>
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
        </div>


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
        <Controller
          control={control}
          name="transactionDate"
          // {...register('transactionDate')}
          render={({ field }) => (
            <DatePicker
              placeholderText={moment(startDate).format('L')}
              showIcon
              // maxDate={addDays(new Date(), 5)}
              onChange={date => field.onChange(date)}
              selected={field.value}
              // selected={startDate}
              dateFormat="dd.MM.yyyy"
            />
          )}
        />

        {/* <label>
          <input
            type="date"
            {...register('transactionDate')}
            placeholder="01.01.2023"
          />
        </label> */}
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
