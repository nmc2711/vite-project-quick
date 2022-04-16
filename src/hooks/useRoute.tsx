import { FunctionComponent, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { RouteType } from '~/types/routeType';

import ErrorPage from '~/view/ErrorPage';

interface RouteViewProps {
  routes: Array<RouteType>;
};

const RouterView: FunctionComponent<RouteViewProps> = ({ routes }) => {
  return (
    <Suspense fallback={<h1>로딩중입니다...</h1>}>
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={!route.exact ? `${route.path}/*` : route.path}
              element={<route.component {...route.props} />}
            />
          );
        })}
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Suspense>
  );
}
export default RouterView;