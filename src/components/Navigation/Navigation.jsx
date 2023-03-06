import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BiStats } from 'react-icons/bi';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/diagram'}>Statistics</NavLink>
        </li>
        {/* {isMobile && (
          <li>
            <NavLink to={'/currency'}>currency</NavLink>
          </li>
        )} */}
      </ul>
    </nav>
  );
};

export default Navigation;
