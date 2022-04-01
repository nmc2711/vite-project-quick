import React, { useState } from 'react';
import { useQuery, useMutation } from "react-query";

import { TUsers } from '~/types/api/users';

import apiCall from '~/util/apiCall';

function LoginPage() {
  const { get, post } = apiCall();
  const { data } = useQuery<TUsers[], Error>("users", () => get('users', { id: 1230 }));

  const mutaion = useMutation((id: number) => post("users", { id }));

  return (
    <div>
      로그인 페이지
      {data?.map(item => {
        return <div key={item.id}>{item.id}</div>
      })}
      <button onClick={() => mutaion.mutate(100)}>유저 생성</button>
    </div>
  );
}

export default LoginPage;
