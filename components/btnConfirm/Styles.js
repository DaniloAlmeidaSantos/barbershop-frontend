import * as React from 'react';
import styled from 'styled-components/native';
import Colors from '../../constants/Theme';

export const BtnConfirm = styled.TouchableOpacity`
    align-self: center;
    justify-content: center;
    align-items: center;

    width: 45%;

    margin-top: 10%;
    margin-right: 2%;

    border-radius: 6px;

    padding-top: 10px;
    padding-bottom: 10px;
    
    background-color: ${Colors.Dark};
`;

export const BtnText = styled.Text`
  color: ${Colors.Light};
  font-size: 18px;
  font-family: 'SegoeSemibold';
`;
