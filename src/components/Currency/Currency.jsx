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
import { Loader } from 'components/Loader/Loader';

export const Currency = () => {
  const data = useFetchCurrency();
  let allCurrency;
  if (data.length > 0) {
    const usd = data[0];
    const eur = data[1];

    allCurrency = [usd, eur];
  }

  return (
    <>
      {!data.length > 0 ? (
        <Loader />
      ) : (
        <CurrencyStyled>
          <ImgStyledRectangle src={Rectangle} alt="img" />
          <ListStyled>
            <ListLI>Currency</ListLI>
            <ListLI>Purchase</ListLI>
            <ListLI>Sale</ListLI>
          </ListStyled>
          <ImgStyledVector src={Vector} alt="img" />
          <TypeStyled>
            {allCurrency.map(({ rateBuy, currencyCodeA, rateSell }) => {
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
        </CurrencyStyled>
      )}
    </>
  );
};
