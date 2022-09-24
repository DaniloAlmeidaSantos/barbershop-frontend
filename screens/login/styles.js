import * as React from 'react';
import styled from 'styled-components/native';
import Colors from '../../constants/Theme_Default';

export const Login_Container = styled.View`
    flex: 1;
    background-color: ${Colors.Medium};
`;

export const Login_Head = styled.View`
    flex-direction: row;
    align-self: center;
    align-items: center;
    justify-content: space-between;

    width: 88%;

    margin-top: 20px;
`;

export const Login_Desc = styled.Text`
    font-family: "SegoeBold";
    color: ${Colors.Light};
    font-size: 23px;
`;

export const Login_BtnRegister = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;

    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 15px;
    padding-right: 15px;

    border-radius: 5px;

    background-color: ${Colors.Light};
`;

export const Login_BtnText = styled.Text`
    font-family: "SegoeSemibold";
    color: ${Colors.Dark};
    font-size: 15px;
`;




