import { FunctionComponent, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { RouteType } from '../types/routeType';

import ErrorPage from '../view/ErrorPage';

interface RouteViewProps {
  routes: Array<RouteType>;
  onEnter: (to: string, next: (path?: string) => void) => void;
};

const RouterView: FunctionComponent<RouteViewProps> = ({ routes, onEnter }) => {
  const { pathname } = useLocation();
  
  let notFoundPathname: string = '';
  
  function next(path?: string) {
    if (path) {
      notFoundPathname = path;
    }
  }
  
  onEnter(pathname, next);
  
  return (
    <Suspense fallback={<h1>로딩중입니다...</h1>}>
      <Routes>
        {routes.map((route, index) => {
          if (notFoundPathname) {
            return (
              <Route path='*' key={index} element={<ErrorPage {...route.props} />} />
            );
          } else {  
            return (
              <Route
                key={index}
                path={!route.exact ? `${route.path}/*` : route.path}
                element={<route.component {...route.props} />}
              />
            );
          }
        })}
      </Routes>
    </Suspense>
  );
}
export default RouterView;