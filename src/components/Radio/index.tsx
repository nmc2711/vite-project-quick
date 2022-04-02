import { InputHTMLAttributes, ReactNode } from 'react';

import Radio from './radio';

import { Label } from './styled';

interface TRadioLabel extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode | ReactNode[];
  iconSize?: string;
}

function RadioLabel(props: TRadioLabel) {
  const { children, ...other} = props;
  return (
    <Label isDisabled={props.disabled}>
      <Radio {...other} />
      <span>{children}</span>
    </Label>
  );
}
export default RadioLabel;
