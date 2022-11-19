import React from "react";
import { View, Button } from "react-native";
import Colors from '../../constants/Theme';
import Icon from 'react-native-vector-icons/AntDesign';
import { Label, LabelContainer, BtnLabel, BtnText } from './Styles';

export default function LabelDefaultComponent({text, isServiceScreen, onPress}) {
  return (
    <LabelContainer>
      <View
        style={{
          backgroundColor: Colors.Medium,
          borderTopRightRadius: 10,
          height:10,
          width: 20,
          borderBottomRightRadius: 10
        }}
      ></View>
      <Label>{text}</Label>
      
      {isServiceScreen ? 

        <BtnLabel onPress={onPress}>
          <BtnText>Adicionar serviço</BtnText>
        </BtnLabel>

        : <></>
      }
    </LabelContainer>
  );
}
