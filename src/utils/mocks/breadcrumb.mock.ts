import { matchPath } from 'react-router-dom';

export const routePath = [
  {
    title: 'Login',
    active: true,
    isParamRoute: false,
    match: matchPath({ path: '/login', end: false }, '/login'),
  },
];
