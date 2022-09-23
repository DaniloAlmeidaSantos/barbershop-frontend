import * as React from 'react';
import styled from 'styled-components/native';
import Colors from '../../constants/theme';

export const BTNConfirm = styled.TouchableOpacity`
    align-self: center;
    justify-content: center;
    align-items: center;

    width: 90%;

    margin-top: 33px;

    border-radius: 5px;

    padding-top: 10px;
    padding-bottom: 10px;

    background-color: ${Colors.Light};
`;

export const BtnText = styled.Text`
    color: ${Colors.Dark};
    font-size: 18px;
    font-family: 'SegoeSemibold';
`;