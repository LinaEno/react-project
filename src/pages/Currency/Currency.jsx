import { Currency } from 'components/Currency/Currency';
import { ContainerTotal } from 'components/Currency/Currency.styled';
import { Header } from 'components/Header/Header';
import { Mobile } from 'components/Media/Media';
import Navigation from 'components/Navigation/Navigation';
import WithAuthRedirect from 'hoc/WithAuthRedirect';

const CurrencyPage = () => {
  return (
    <Mobile>
      <Header />
      <main>
        <ContainerTotal>
          <Navigation />
          <Currency />
        </ContainerTotal>
      </main>
    </Mobile>
  );
};

export default WithAuthRedirect(CurrencyPage, '/login');
