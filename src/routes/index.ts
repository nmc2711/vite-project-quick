import { RouteType } from '../types/routeType';

import App from '../App';

import ErrorPage from '../view/ErrorPage';
import LoginPage from '../view/LoginPage';

const routes: Array<RouteType> = [
  {
    path: '/404',
    props: { active: true },
    component: ErrorPage,
  },
  {
    path: '/',
    exact: true,
    component: App,
  },
  {
    path: '/login',
    exact: true,
    component: LoginPage,
  }
];

export default routes;