import {
  CurrencyStyled,
  ListStyled,
  ListLI,
  TypeStyled,
  ImgStyledVector,
  ImgStyledRectangle,
} from './Currency.styled';

import { useFetchCurrency } from 'services/currencyApi';
import Vector from '../../images/Currency/Vector.png';
import Rectangle from '../../images/Currency/Rectangle.png';
import { useTranslation } from 'react-i18next';
import Weather from 'components/WeatherApp/WeatherApp';
import { useEffect, useState } from 'react';

export const Currency = () => {
  const { t } = useTranslation();
  const data = useFetchCurrency();

  const [currency, setCurrency] = useState(
    () => JSON.parse(localStorage.getItem('currency')) ?? []
  );

  useEffect(() => {
    if (data.length === 0) return;
    setCurrency(data);
    localStorage.setItem('currency', JSON.stringify(currency));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, ['currency', currency, data]);

  return (
    <>
      {currency.length && (
        <CurrencyStyled>
          <ImgStyledRectangle src={Rectangle} alt="img" />
          <ListStyled>
            <ListLI>{t('currency')}</ListLI>
            <ListLI>{t('currencyPurchase')}</ListLI>
            <ListLI>{t('currencySale')}</ListLI>
          </ListStyled>
          <ImgStyledVector src={Vector} alt="img" />
          <TypeStyled>
            {currency.map(({ rateBuy, currencyCodeA, rateSell }) => {
              return (
                <li key={currencyCodeA}>
                  {currencyCodeA === 840 && <p>USD</p>}
                  {currencyCodeA === 978 && <p>EUR</p>}
                  <p>{rateBuy}</p>
                  <p>{rateSell.toFixed(2)}</p>
                </li>
              );
            })}
          </TypeStyled>
          <Weather />
        </CurrencyStyled>
      )}
    </>
  );
};
