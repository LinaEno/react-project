import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { addTransaction } from 'redux/transactions/operations';
import { selectCategories } from 'redux/transactions/selectors';
import { updateTransaction } from 'redux/transactions/operations';
import Toggle from './Toggle';
import { selectModalTransactionData } from 'redux/global/selectors';

import { closeModalAddTransaction } from 'redux/global/slice';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'moment/locale/uk';
import moment from 'moment';
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
  ContIcon,
} from './ModalAddTransaction.styled';

import dateSvg from 'images/svg/baseline-date.svg';
import { Error } from 'components/RegistrationForm/Registration.styled';

const INCOME_STR = 'INCOME';
const EXPENSE_STR = 'EXPENSE';

const BOOLEAN_TO_TRANSACTION_TYPE = {
  false: INCOME_STR,
  true: EXPENSE_STR,
};
const schema = yup.object({
  transactionDate: yup.date().default(() => new Date()),
  comment: yup
    .string()
    .max(40, 'Сomment cannot exceed more than 40 characters'),
});

export default function ModalAddTransaction() {
  const dispatch = useDispatch();
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
    resolver: yupResolver(schema),
    defaultValues: {
      type: isEdit
        ? modalTransactionData?.category?.type === EXPENSE_STR
        : true,
      amount: Math.abs(modalTransactionData?.amount),
      transactionDate: modalTransactionData?.transactionDate ?? new Date(),
      comment: modalTransactionData?.comment,
      categoryId: modalTransactionData?.categoryId,
    },
  });

  const { type } = watch();

  const options = categories.filter(category => {
    return category.type === BOOLEAN_TO_TRANSACTION_TYPE[type];
  });

  const onSubmit = ({ transactionDate, type, categoryId, comment, amount }) => {
    const typeOftransaction = BOOLEAN_TO_TRANSACTION_TYPE[type];

    if (isEdit) {
      dispatch(
        updateTransaction({
          id: modalTransactionData.id,
          amount: type === INCOME_STR ? Number(amount) : -Number(amount),
          comment,
        })
      );
    } else {
      dispatch(
        addTransaction({
          transactionDate,
          type: typeOftransaction,
          categoryId:
            typeOftransaction === INCOME_STR ? options[0].id : categoryId,
          comment,
          amount:
            typeOftransaction === INCOME_STR ? Number(amount) : -Number(amount),
        })
      );
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
          <Toggle name="type" control={control} disabled={isEdit} />
        </ToggleContainer>

        {BOOLEAN_TO_TRANSACTION_TYPE[type] === EXPENSE_STR && (
          <Select disabled={isEdit} {...register('categoryId')}>
            <Options className="one" value="" disabled selected hidden>
              Select category
            </Options>
            {options.map(category => {
              return (
                <Options key={category.id} value={category.id}>
                  {t(`categories.${category.name}`)}
                </Options>
              );
            })}
          </Select>
        )}
        <ContainAmountDatetime>
          <label>
            <FormInputAmount
              type="number"
              {...register('amount')}
              placeholder="0.00"
            />
          </label>
          {errors?.amount && <Error style={{}}>{errors.amount.message}</Error>}
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
                    inputProps={{
                      disabled: isEdit,
                    }}
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
            <ContIcon>
              <Icon src={dateSvg} alt="" />
            </ContIcon>
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
        {errors?.comment && <Error style={{}}>{errors.comment.message}</Error>}
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
