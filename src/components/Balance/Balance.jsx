import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectBalance } from 'redux/transactions/selectors';
import { TbCurrencyHryvnia } from 'react-icons/tb';

const Balance = () => {
  const { t } = useTranslation();
  const balance = useSelector(selectBalance);
  // const grn = &#8372;
  return (
    <div>
      <p>{t('balance.balance')}</p>
      <p>
        <TbCurrencyHryvnia />
        {balance}
      </p>
    </div>
  );
};

export default Balance;
