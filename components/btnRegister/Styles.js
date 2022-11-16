import React from 'react';
import styled from 'styled-components/native';
import Colors from '../../constants/Theme';

export const BtnRegister = styled.TouchableOpacity`
    align-self: center;
    justify-content: center;
    align-items: center;
    text-align: center;

    width: 45%;

    margin-top: 10%;
    margin-right: 2%;

    border-radius: 6px;

    padding: 7px;
    
    background-color: green;
`;

export const BtnText = styled.Text`
  color: ${Colors.Light};
  font-size: 20px;
  font-family: 'SegoeSemibold';
`;
