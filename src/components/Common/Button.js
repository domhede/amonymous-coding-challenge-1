import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  font-family: monospace;
  width: 80%;
  border-radius: 4px;
  padding: 16px 24px;
  color: #fff;
  background-color: #6157ff;
  color: white;
  font-size: 15px;
  text-align: center;
  font-weight: bold;
  padding: 10px 35px;
  margin: 32px 0px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
  &:hover {
    cursor: pointer;
    background-color: #524ad9;
  }
`;

export default (props) => <Button {...props} />;
