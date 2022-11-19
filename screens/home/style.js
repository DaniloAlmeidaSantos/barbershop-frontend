import * as React from 'react';
import styled from 'styled-components/native';
import Colors from '../../constants/Theme';

export const Home_Container = styled.View`
  flex: 1;
  background-color: ${Colors.Light}
`

export const Home_BarberStatus = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-left: 17px;
  padding-right: 17px;

  margin-top: 15px;
`

export const Home_BarberStatus_Text = styled.Text`
  font-family: 'Segoe';
  font-size: 17px;
`
