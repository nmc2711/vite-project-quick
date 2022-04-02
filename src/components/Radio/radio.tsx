import { InputHTMLAttributes } from 'react';
import { RadioInput } from './styled';

interface TRadio extends InputHTMLAttributes<HTMLInputElement> {
  iconSize?: string;
};

function Radio(props: TRadio) {
  return (
    <RadioInput
      {...props}
      type="radio"
      iconSize={props.iconSize}
    />
  );
}
export default Radio;
