import { ButtonHTMLAttributes } from 'react';
import { Btn } from './styled';

interface TButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  contentWidth: string;
  contentHeight?: string;
  btnColor?: string;
};

function Button(props: TButton) {
  return (
    <Btn
      {...props}
    >
      {props.children}
    </Btn>
  );
}
export default Button;
