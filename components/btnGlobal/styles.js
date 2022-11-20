import * as React from 'react';
import styled from 'styled-components/native';
import Colors from '../../constants/Theme';

export const BtnGlobal_Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: center;

  padding: 6px;
  padding-left: 12px;
  padding-right: 17px;

  border-radius: 4px;

  background-color: #17D92B;
`

export const BtnGlobal_Text = styled.Text`
  font-size: 15px
  color: ${Colors.Light};
  font-family: 'Segoe';

  margin-left: 5px;
`