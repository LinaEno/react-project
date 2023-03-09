import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { addTransaction } from 'redux/transactions/operations';
import { selectCategories } from 'redux/transactions/selectors';
import { updateTransaction } from 'redux/transactions/operations';

import { selectModalTransactionData } from 'redux/global/selectors';

import { closeModalAddTransaction } from 'redux/global/slice';

// import { useTranslation } from 'react-i18next';

// import 'moment/min/locales';
// import 'moment/locale/en';
import 'moment/locale/uk';
import moment from 'moment';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

import {
  AddButtonForm,
  CloseButtonForm,
  ContainAmountDatetime,
  ContainerDate,
  DateInput,
  Forma,
  Options,
  FormInputAmount,
  FormInputComment,
  Icon,
  Section,
  Select,
  TitleH2,
  ToggleContainer,
} from './ModalAddTransaction.styled';

import dateSvg from 'images/svg/baseline-date.svg';

export default function ModalAddTransaction() {
  const { t } = useTranslation();
  const categories = useSelector(selectCategories);
  const modalTransactionData = useSelector(selectModalTransactionData);

  const isEdit = !!modalTransactionData;

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm({
    //    resolver: yupResolver(schema),
    defaultValues: {
      type: modalTransactionData?.category?.type ?? 'EXPENSE',
      amount: Math.abs(modalTransactionData?.amount),
      transactionDate: modalTransactionData?.transactionDate ?? new Date(),
      comment: modalTransactionData?.comment,
      categoryId: modalTransactionData?.categoryId,
    },
  });

  const dispatch = useDispatch();
  const { type } = watch();
  const options = categories.filter(category => {
    return category.type === type;
  });

  const onSubmit = ({ transactionDate, type, categoryId, comment, amount }) => {
    if (isEdit) {
      dispatch(
        updateTransaction({
          id: modalTransactionData.id,
          amount: type === 'INCOME' ? Number(amount) : -Number(amount),
          comment,
        })
      );
    } else {
      dispatch(
        addTransaction({
          transactionDate,
          type,
          categoryId: type === 'INCOME' ? options[0].id : categoryId,
          comment,
          amount: type === 'INCOME' ? Number(amount) : -Number(amount),
        })
      ).unwrap();
    }
    reset();
    dispatch(closeModalAddTransaction());
  };

  const today = moment();
  const disableFutureDt = current => {
    return current.isBefore(today);
  };
  return (
    <Section>
      <TitleH2 style={{ textAlign: 'center' }}>
        {isEdit ? 'Edit transaction' : 'Add transaction'}
      </TitleH2>
      <Forma
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
      >
        <ToggleContainer>
          <label>
            {t('modalAddTransactionIncomesType')}
            <input
              {...register('type')}
              type="radio"
              name="type"
              value="INCOME"
              disabled={isEdit}
            />
          </label>
          <label>
            <input
              {...register('type')}
              type="radio"
              name="type"
              value="EXPENSE"
              disabled={isEdit}
            />
            {t('modalAddTransactionOutcomesType')}
          </label>
        </ToggleContainer>

        <Select
          {...register('categoryId')}
          disabled={isEdit}
          style={{
            opacity: type === 'INCOME' ? 0 : 1,
            width: type === 'INCOME' ? 0 : '100px',
            height: type === 'INCOME' ? 0 : '32px',
          }}
        >
          <Options className="one" value="" disabled selected hidden>
            Select a category
          </Options>
          {options.map(category => {
            return (
              <Options key={category.id} value={category.id}>
                {category.name}
              </Options>
            );
          })}
        </Select>
        <ContainAmountDatetime>
          <label>
            <FormInputAmount
              type="number"
              {...register('amount')}
              placeholder="0.00"
            />
          </label>
          <ContainerDate>
            <Controller
              control={control}
              name="transactionDate"
              required
              render={({ field }) => {
                const { onChange, name, value } = field;
                return (
                  <DateInput
                    className=""
                    value={new Date(value)}
                    viewMode="time"
                    initialValue={Date.now()}
                    dateFormat={true}
                    timeFormat={false}
                    isValidDate={disableFutureDt}
                    closeOnSelect={true}
                    onChange={moment => {
                      onChange({
                        target: {
                          name,
                          value: moment.toISOString(),
                        },
                      });
                    }}
                  />
                );
              }}
            />
            <div style={{ height: '32px', borderBottom: '1px solid #e0e0e0' }}>
              <Icon src={dateSvg} alt="" />
            </div>
          </ContainerDate>
        </ContainAmountDatetime>
        <label>
          <FormInputComment
            type="text"
            {...register('comment')}
            maxlength="40"
            placeholder={t('modalAddTransactionComment')}
          />
        </label>

        <AddButtonForm type="submit">
          {t('modalAddTransactionAcceptBtn')}
        </AddButtonForm>

        <CloseButtonForm
          type="button"
          onClick={() => dispatch(closeModalAddTransaction())}
        >
          {t('modalAddTransactionCancelBtn')}
        </CloseButtonForm>
      </Forma>
    </Section>
  );
}
