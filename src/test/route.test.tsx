import { render, fireEvent } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import { createMemoryHistory } from 'history';

import Router from '../hooks/useRoute';

import routes from '../routes';

describe("라우트 이동을 통한 사용자 화면변화를 테스트 합니다.", () => {

  test("login 화면으로 이동을 테스트 합니다.", () => {
    const { container } = render(<Router routes={routes} />)

  });
});