import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectUserBalance } from 'redux/auth/authSelectors';
// import { TbCurrencyHryvnia } from 'react-icons/tb';
import { Number, Sign, Text, Title, Wrapper } from './Balance.styled';

const Balance = () => {
  const { t } = useTranslation();
  const balance = useSelector(selectUserBalance);
  // const grn = &#8372;
  return (
    <Wrapper>
      <Title>{t('balance.balance')}</Title>
      <Text>
        {/* <TbCurrencyHryvnia /> */}
        <Sign>&#8372;</Sign>
        <Number>{balance}</Number>
      </Text>
    </Wrapper>
  );
};

export default Balance;
