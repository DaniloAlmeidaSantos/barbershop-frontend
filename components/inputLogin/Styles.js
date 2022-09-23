import * as React from 'react';
import styled from 'styled-components/native';
import Colors from '../../constants/Theme';

export const InputLogin_Wrapper = styled.View`
    flex-direction: row;
    align-self: center;

    width: 90%;

    margin-top: 15px;

    padding: 6px;

    border-radius: 20px;

    background-color: ${Colors.Dark};
`;

export const InputLogin_Input = styled.TextInput`
    width: 100%;

    color: ${Colors.Light};
    font-family: 'Segoe';
    font-size: 15px;
`;