import { Currency } from 'components/Currency/Currency';
import { Header } from 'components/Header/Header';
import { Mobile } from 'components/Media/Media';
import Navigation from 'components/Navigation/Navigation';

const CurrencyPage = () => {
  return (
    <Mobile>
      <Header />
      <Navigation />
      <Currency />
    </Mobile>
  );
};

export default CurrencyPage;
