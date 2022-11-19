import * as React from 'react';
import styled from 'styled-components/native';
import Colors from '../../constants/Theme';

export const CheckboxArea = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 90%;
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 20px;
  padding: 2%;
  border-radius: 6px;
  align-self: center;
  background-color: #F5F5F5;
`;

export const CheckboxLabel = styled.Text`
  font-size: 18px;
  color: ${Colors.SuperDark};
  margin-left: 5%;
`;