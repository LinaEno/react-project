import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BiStats } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import { Mobile } from 'components/Media/Media';

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
        <Mobile>
          <li>
            <NavLink to={'/currency'}>Currency</NavLink>
          </li>
        </Mobile>
      </ul>
    </nav>
  );
};

export default Navigation;
