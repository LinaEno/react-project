import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

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
      <h3>Page not Found!</h3>
      <button>
        <NavLink to={'/'}>Go back</NavLink>
      </button>
    </div>
  );
}

export default PageNotFound404;
