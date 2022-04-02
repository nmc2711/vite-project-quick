import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from "react-redux";
import { store } from '~/util/toolkit/store';

import RouterView from './hooks/useRoute';

import routes from './routes';

import GlobalStyled from '~/style/globalStyled';
import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
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
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyled />
        <BrowserRouter>
          <RouterView routes={routes}></RouterView>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
