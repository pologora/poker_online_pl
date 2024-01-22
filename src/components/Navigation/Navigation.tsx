import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Cards } from '../Cards/Cards';
import { Home } from '../Home/Home';
import { Promotions } from '../Promotions/Promotions';
import { Rules } from '../Rules/Rules';

import { NavigationItem } from './NavigationItem';

import style from './Navigation.module.css';

const navigationRoutes = [
  { title: 'Home', color: 'var(--bgHome)', route: '/', isActive: true, component: <Home /> },
  {
    title: 'Rules',
    color: 'var(--bgRules)',
    route: '/rules',
    isActive: false,
    component: <Rules />,
  },
  {
    title: 'Cards',
    color: 'var(--bgCards)',
    route: '/cards',
    isActive: false,
    component: <Cards />,
  },
  {
    title: 'Promotions',
    color: 'var(--bgPromotions)',
    route: '/promotions',
    isActive: false,
    component: <Promotions />,
  },
];

export const Navigation = () => {
  const [tabs, setTabs] = useState(navigationRoutes);
  const { page } = useParams();

  const handleChangeActiveTab = (page: string = '') => {
    setTabs((prev) => {
      const newArray = prev.map((item) => {
        if (item.route === `/${page}`) {
          return { ...item, isActive: true };
        } else {
          return { ...item, isActive: false };
        }
      });

      return newArray;
    });
  };

  useEffect(() => {
    handleChangeActiveTab(page);
  }, [page]);

  const renderedNavItem = tabs.map((item) => {
    return (
      <NavigationItem {...item} key={item.title}>
        {item.component}
      </NavigationItem>
    );
  });
  return <div className={style.navContainer}>{renderedNavItem}</div>;
};
