import * as React from 'react';
import styled from 'styled-components/native';
import Colors from '../../constants/Theme';

export const InputWrapper = styled.View`
    flex-direction: row;
    align-self: center;

    width: 90%;

    margin-top: 15px;

    padding: 6px;

    border-radius: 20px;
    background-color: ${Colors.Light};
    border: 3px solid black;
`;

export const InputText = styled.TextInput`
    width: 100%;

    color: ${Colors.Dark};
    font-family: 'Segoe';
    font-size: 15px;
`;
