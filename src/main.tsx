import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { RouteType } from './types/routeType'

import RouterView from './hooks/useRoute';

import routes from './routes';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterView
        routes={routes}
        onEnter={function (to: string, next: (path?: string) => void): void {
          function checkElementsInArr(element: RouteType) {
            if (element.path === to) {
              return true;
            }
          }
          if (!(routes.some(checkElementsInArr))) {
            next('/404');
          }
        }}
      >
      </RouterView>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
