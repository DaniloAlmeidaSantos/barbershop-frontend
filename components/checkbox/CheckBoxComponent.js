import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from '../../constants/Theme';
import Icon from 'react-native-vector-icons/AntDesign';
import { CheckboxArea, CheckboxLabel } from './Styles';
  
const CheckBox = (props) => {
    const iconName = props.isChecked ?
        "checkcircle" : "checkcircleo";
  
    return (
      <CheckboxArea>
        <CheckboxLabel>{props.title}</CheckboxLabel>
        <Pressable onPress={props.onPress}>
          <Icon
            name={iconName}
            style={{
              color: iconName == "checkcircle" ? "#17D92B" : Colors.Medium,
              fontSize: 30,
              marginRight: 10
            }}
          />
        </Pressable>
      </CheckboxArea>
    );
};
  
export default CheckBox;