import React from 'react';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../constants/Theme';
import { InputWrapper, InputText } from './Styles';

export default ({
  onChangeText,
  value,
  placeholder,
  icon,
  secureTextEntry,
}) => {
  return (
    <InputWrapper>
      <IconMaterial
        name={icon}
        size={35}
        style={{ color: Colors.Dark, marginRight: 12 }}
      />
      <InputText
        onChangeText={onChangeText}
        value={value}
        minHeight={30}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#000"
      />
    </InputWrapper>
  );
};