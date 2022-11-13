import * as React from 'react';
import styled from 'styled-components/native';
import Colors from '../../constants/Theme';

export const Register_Container = styled.View`
    background-color: ${Colors.Light};
    width: 100%;
    height: 100%;
`;

export const Register_Head = styled.View`
    align-self: center;
    align-items: center;
    justify-content: space-between;

    font-size: 38px;
    font-family: "SegoeBold";

    width: 88%;

    margin-top: 20px;
`;

export const Register_label = styled.Text`
  font-family: "SegoeBold";

`;

export const BtnRegister = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;

    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 15px;
    padding-right: 15px;

    border-radius: 8px;
    background-color: ${Colors.Dark};
`;

export const Header_Text = styled.Text`
    font-size: 25px;
    font-family: 'SegoeSemibold';
    color: ${Colors.Dark}; 
    text-align: center;
    margin: 20%;
`;

export const ButtonArea = styled.View`
  align-self: center;
  justify-content: center;
  align-items: center;
  flexDirection: "row";
  width: 100%;
`
