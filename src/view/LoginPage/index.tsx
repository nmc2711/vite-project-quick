import React from 'react';
import { useQuery, useMutation } from "react-query";

import { TUsers } from '~/types/api/users';

import apiCall from '~/util/apiCall';

function LoginPage() {
  const { isLoading } = useQuery<TUsers[], Error>(
    "users",
    async () => {
      return await apiCall.getUsers();
    }, {
      enabled: false,
      onSuccess: (res) => {
        console.log(res)
      },
      onError: (err: any) => {
        console.log(err)
      }
    }
  );
  return (
    <div>
      로그인 페이지
      {/* {data?.map((item, idx) => {
        return(
          <div>{item.id}</div>
        );
      })} */}
    </div>
  );
}

export default LoginPage;
