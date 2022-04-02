import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from "react-query";

import { TUsers } from '~/types/api/users';

import apiCall from '~/util/apiCall';

// toolkit
import { useAppDispatch, useAppSelector } from '~/util/toolkit/hooks';
import { changeMyInfo } from '~/features/myInfo';

import Button from '~/components/Button';
import Radio from '~/components/Radio';

function LoginPage() {
  const dispatch = useAppDispatch();
  const { myInfo } = useAppSelector((state) => state.myInfo);

  const { get, post } = apiCall();
  const queryClient = useQueryClient();

  const { data } = useQuery<TUsers[], Error>("users", () => get('users', { id: 1230 }));

  const addMutaion = useMutation((text: TUsers) => post("users", text), {
    onMutate: async text => {
      await queryClient.cancelQueries("users");
      //const previousValue = queryClient.getQueriesData("users");
      queryClient.setQueryData<TUsers[]>('users', (old) => [...old!, text]);
      //return previousValue;
    },
    onSuccess: async text => {
    },
    onError: async err => {
      alert(err);
    }
  })

  return (
    <div>
      로그인 페이지
      {data?.map(item => {
        return <div key={item.id}>{item.id}</div>
      })}
      <button onClick={() => addMutaion.mutate({
        id: Math.floor(Math.random() * 1000),
        name: 'sanghan',
        email: 'nmc2711@naver.com',
        gender: 'm',
        status: 'on',
      })}>유저 생성</button>

      <button onClick={() => dispatch(changeMyInfo({ name: '황상한', age: 29, gender: 'm' }))}>
        전역 상태 바꿔 보기
      </button>
      <div>
        <p>{myInfo.name || ''}</p>
        <p>{myInfo.age || ''}</p>
        <p>{myInfo.gender || ''}</p>
      </div>
      <Button
        contentWidth="200px"
        contentHeight="40px"
      >
        버튼테스트
      </Button>
      <Radio />
    </div>
  );
}

export default LoginPage;
