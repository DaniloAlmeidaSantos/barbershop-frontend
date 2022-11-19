import * as React from 'react';
import styled from 'styled-components/native';
import Colors from '../../constants/Theme';

export const LabelContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: 5%;
  align-self: center;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: ${Colors.SuperDark};
  margin-left: 5px;
`;

export const BtnLabel = styled.TouchableOpacity`
    align-items: center;
    text-align: center;

    width: auto;
    margin-left: 2%;
    margin-right: 10%;
    border-radius: 15px;

    padding: 7px;
    
    background-color: #17D92B;
`;

export const BtnText = styled.Text`
  color: ${Colors.Light};
  font-size: 14px;
  font-family: 'SegoeSemibold';
`;
