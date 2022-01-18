import React from 'react';
import styled from 'styled-components';

export const ArrowBtn = (props) => {
  const { type, children, _onClick } = props;

  return (
    <ButtonEl type={type} onClick={_onClick}>
      {children}
    </ButtonEl>
  );
};

const ButtonEl = styled.button`
  width: 30px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 194px;
  ${(props) => (props.type === 'left' ? 'left: 30px;' : 'right: 35px;')}
  z-index: 5;
  opacity: 0.5;
  border-radius: 15px;
  background-color: #fff;
  font-size: 16px;
`;
