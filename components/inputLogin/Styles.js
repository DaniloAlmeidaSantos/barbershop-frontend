import * as React from 'react';
import styled from 'styled-components/native';
import Colors from '../../constants/Theme';

export const InputWrapper = styled.View`
    flex-direction: row;
    align-self: center;

    width: 90%;

    margin-top: 15px;

    padding: 6px;

    border-radius: 10px;
    background-color: ${Colors.LightAlternative};
`;

export const InputText = styled.TextInput`
    width: 100%;

    color: ${Colors.Dark};
    font-family: 'Segoe';
    font-size: 15px;
`;
