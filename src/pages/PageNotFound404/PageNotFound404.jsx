import { Header } from 'components/Header/Header';
import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Page404 from '../../images/page404.jpg';
import { Button, Container404, Img } from './PageNotFound404.styled';

function PageNotFound404() {
  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timerId);
  }, [navigate]);

  return (
    <div>
      <Header />
      <Container404>
        <Img src={Page404} alt="page not found" />
        <Button>
          <NavLink to={'/'}>Go back</NavLink>
        </Button>
      </Container404>
    </div>
  );
}

export default PageNotFound404;
