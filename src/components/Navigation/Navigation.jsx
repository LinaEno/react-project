import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BiStats } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const { t } = useTranslation();
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={'/'}>{t('navHomeLink')}</NavLink>
        </li>
        <li>
          <NavLink to={'/diagram'}>{t('navStatisticsLink')}</NavLink>
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
