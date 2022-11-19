import * as React from 'react';
import styled from 'styled-components/native';
import Colors from '../../constants/Theme';

export const EmptyList_Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;

  margin-top: -20%
`

export const EmptyList_MainText = styled.Text`
  padding-left: 100px;
  padding-right: 100px;

  margin-bottom: 8px;

  font-family: 'SegoeBold';
  text-align: center;
  font-size: 25px;
  color: ${Colors.Dark}
  line-height: 24px;
`

export const EmptyList_Text = styled.Text`
  padding-left: 20px;
  padding-right: 20px;

  margin-bottom: 20px;

  font-family: 'Segoe';
  text-align: center;
  font-size: 17px;
  color: ${Colors.Dark}
`
