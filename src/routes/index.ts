import React from 'react';
import { RouteType } from '../types/routeType';

const MainPage = React.lazy(() => import('../App'));
const LoginPage = React.lazy(() => import('../view/LoginPage'));
const ErrorPage = React.lazy(() => import('../view/ErrorPage'));

const routes: Array<RouteType> = [
  {
    path: '/404',
    props: { active: true },
    component: ErrorPage,
  },
  {
    path: '/',
    exact: true,
    component: MainPage,
  },
  {
    path: '/login',
    exact: true,
    component: LoginPage,
  }
];

export default routes;