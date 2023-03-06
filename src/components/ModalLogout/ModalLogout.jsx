import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from 'redux/auth/authOperation';
import { closeModalLogout } from 'redux/global/slice';

const ModalLogout = () => {
  const dispatch = useDispatch();

  const closeModal = () => dispatch(closeModalLogout());

  return (
    <div>
      <p>Are you sure you want to Logout</p>
      <div>
        <button type="button" onClick={() => dispatch(logOut())}>
          <NavLink to={'/login'}>Yes</NavLink>
        </button>
        <button type="button" onClick={closeModal}>
          No
        </button>
      </div>
    </div>
  );
};

export default ModalLogout;
