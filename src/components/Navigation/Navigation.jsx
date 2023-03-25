import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Default, Mobile } from 'components/Media/Media';
import {
  Icon,
  Nav,
  NavItem,
  NavList,
  // NewsIcon,
  Text,
} from './Navigation.styled';
import { ReactComponent as Currency } from '../../images/svg/Exclude.svg';
import { ReactComponent as Home } from '../../images/svg/home.svg';
import { ReactComponent as Stats } from '../../images/svg/Stats.svg';
// import { BiNews } from 'react-icons/bi';

const Navigation = () => {
  const { t } = useTranslation();
  return (
    <Nav>
      <NavList>
        <NavItem>
          <Mobile>
            <NavLink to={'/'}>
              <Home />
            </NavLink>
          </Mobile>
          <Default>
            <Icon>
              <Home width="18" height="18" />
            </Icon>
            <Text to={'/'}>{t('navHomeLink')}</Text>
          </Default>
        </NavItem>
        <NavItem>
          <Mobile>
            <NavLink to={'/diagram'}>
              <Stats />
            </NavLink>
          </Mobile>
          <Default>
            <Icon>
              <Stats width="18" height="18" />
            </Icon>
            <Text to={'/diagram'}>{t('navStatisticsLink')}</Text>
          </Default>
        </NavItem>
        {/* <NavItem>
          <Mobile>
            <NavLink to={'/news'}>
              <NewsIcon>
                <BiNews size={24} fill="#ffffffd5" />
              </NewsIcon>
            </NavLink>
          </Mobile>
          <Default>
            <NewsIcon>
              <BiNews size={14} fill="#fff" />
            </NewsIcon>
            <Text to={'/news'}>{t('navNewsLink')}</Text>
          </Default>
        </NavItem> */}
        <Mobile>
          <li>
            <NavLink to={'/currency'}>
              <Currency />
            </NavLink>
          </li>
        </Mobile>
      </NavList>
    </Nav>
  );
};

export default Navigation;
