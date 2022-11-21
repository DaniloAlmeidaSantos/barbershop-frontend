import React from 'react';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconComunity from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../../constants/Theme';
import { InputWrapper, InputText } from './Styles';

export default ({
  onChangeText,
  value,
  placeholder,
  icon,
  secureTextEntry,
  onSubmitEditing
}) => {
  return (
    <InputWrapper>
      {icon === 'calendar-month' ?
        <IconComunity
          name={icon}
          size={35}
          style={{ color: Colors.SuperDark, marginRight: 12 }}
        />:
        <IconMaterial
          name={icon}
          size={35}
          style={{ color: Colors.SuperDark, marginRight: 12 }}
        />
      }
      <InputText
        onChangeText={onChangeText}
        value={value}
        minHeight={30}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#000"
        onSubmitEditing={onSubmitEditing}
      />
    </InputWrapper>
  );
};
