import React from 'react';

type TErrorProps = {
  active?: boolean;
};

function ErrorPage({ active }: TErrorProps) {
  console.log(active);
  return (
    <div>
      에러페이지
    </div>
  );
}

export default ErrorPage;
