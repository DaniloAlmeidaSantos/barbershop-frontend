import * as React from 'react';
import styled from 'styled-components/native';
import Colors from '../../constants/Theme';
import Constants from 'expo-constants';

export const Header_Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: center;

  width: 95%;

  margin-top: ${Constants.statusBarHeight + 7}

  padding: 8px;

  border-radius: 20px;

  background-color: ${Colors.Medium};
`

export const Header_Name = styled.Text`
  margin-left: 5px;

  font-color: ${Colors.SuperDark};
  font-family: 'SegoeSemibold';
  font-size: 18px
`

export const Header_WrapperIcons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`


export const Header_Logo = styled.Image`
  height: 50px;
  width: 50px;

  padding: 10px;
  border-radius: 50px;

  background-color: #fff;
`