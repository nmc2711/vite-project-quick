import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from 'react-query';

import { RouteType } from './types/routeType'

import RouterView from './hooks/useRoute';

import routes from './routes';

import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
      refetchOnMount: false, // 쿼리가 마운트 시 date를 다시 가져올지 유무
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchInterval: false,
    },
  }
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
