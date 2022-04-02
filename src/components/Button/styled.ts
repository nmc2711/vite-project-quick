import styled from 'styled-components';

export const Btn = styled.button<{ contentWidth: string; btnColor?: string; contentHeight?: string; }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;  
  width: ${({ contentWidth }) => contentWidth};
  height: ${({ contentHeight }) => contentHeight};;
  padding: 0 8px;
  background-color: ${({ btnColor }) => btnColor ? btnColor : '#ebebeb'};
  border-radius: 2px;
  border: 0;
  color: #000;
  cursor: pointer;

  &:disabled {
    cursor: default;
    background-color: blue;
  }
`;