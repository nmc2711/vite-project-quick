import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from "react-query";

import { TUsers } from '~/types/api/users';

import apiCall from '~/util/apiCall';

function LoginPage() {
  const { get, post } = apiCall();
  const queryClient = useQueryClient();

  const { data } = useQuery<TUsers[], Error>("users", () => get('users', { id: 1230 }));

  const addMutaion = useMutation((text: TUsers) => post("users", text), {
    onMutate: async text => {
      await queryClient.cancelQueries("users");

      const previousValue = queryClient.getQueriesData("users");

      queryClient.setQueryData('users', (old: any) => [...old, text]);

      return previousValue;
    },
  })

  console.log(data)

  return (
    <div>
      로그인 페이지
      {data?.map(item => {
        return <div key={item.id}>{item.id}</div>
      })}
      <button onClick={() => addMutaion.mutate({
        id: 9999,
        name: 'sanghan',
        email: 'nmc2711@naver.com',
        gender: 'm',
        status: 'on',
      })}>유저 생성</button>
    </div>
  );
}

export default LoginPage;
