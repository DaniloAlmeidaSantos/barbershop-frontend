import * as React from 'react';
import styled from 'styled-components/native';
import Colors from '../../constants/Theme';
import { IMaskInput } from 'react-imask';

export const ManagerContainer = styled.ScrollView`
  flex: 1;
  margin-top: 10%;
  background-color: ${Colors.Light}
`;

export const HourArea = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: 1%;
  margin-left: 12%;
  margin-right: 2%;
  align-self: center;

`;

export const Label = styled.Text`
  font-size: 16px;
  color: ${Colors.SuperDark};
  align-self: center;
  margin-right: 1%;
  text-align: center;
`;

export const HourInput = styled.TextInput`
  flex-direction: row;
  background-color: #F5F5F5;
  font-size: 16px;
  text-align: center;
  width: 85px;
  height: 40px;
  border-radius: 6px; 
  color: #787878;
  font-family: 'SegoeSemibold';
`;

export const ServiceArea = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 90%;
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 20px;
  padding: 2%;
  border-radius: 6px;
  align-self: center;
  background-color: #F5F5F5;
`;

export const Joker = styled.View`
  margin-bottom: 10%;
`;

export const ModalContainer = styled.View`
  justify-content: center;
  aligin-items: center;
  margin-top: 45%;
`;

export const ModalView = styled.View`
  margin: 20px
  ;
  background-color: white;
  border-radius: 20px;
  padding: 15px;
  align-items: center;
`;

export const LabelTitle = styled.Text`
  font-size: 22px;
  color: ${Colors.SuperDark};
  align-self: center;
  margin: 1%;
  text-align: center;
`;

export const ButtonArea = styled.View`
  align-self: center;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
