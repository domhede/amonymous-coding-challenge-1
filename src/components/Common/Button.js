import React from 'react';
import styled from 'styled-components';
import { effects } from 'helpers/style-utils';

const Button = styled.div`
  border-radius: 4px;
  padding: 16px 24px;
  color: #fff;
  background-color: #6157ff;
  color: white;
  font-size: 15px;
  text-align: center;
  font-weight: bold;
  padding: 10px 35px;
  margin: auto;
  ${props => props.withShadow ? effects.boxShadow : ''}
  &:hover {
    cursor: pointer;
    background-color: #524ad9;
  }
`;

export default (props) => <Button {...props} />;
