import styled from 'styled-components';

export const RadioInput = styled.input<{ iconSize?: string }>`
  width: 24px;
  height: 24px;
  margin: 0;
  border: 0;
  border-radius: 0;
  background: beige center center no-repeat;
  background-size: cover;
  appearance: none;
  cursor: pointer;

  &:checked {
    background-color: blue;
  }

  &:disabled {
    background-color: #ebebeb;
  }

  &:checked:disabled {
    background-color: #ddd;
  }
`;

export const Label = styled.label<{ isDisabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  cursor: ${({ isDisabled }) => isDisabled ? 'default' : 'pointer'};
`;