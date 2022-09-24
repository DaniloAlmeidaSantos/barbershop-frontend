import React from 'react';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../constants/Theme';
import { InputLogin_Wrapper, InputLogin_Input } from './styles';

export default ({ onChangeText, value, placeholder, icon, secureTextEntry }) => {
    return (
        <InputLogin_Wrapper>
            <IconMaterial name={icon} size={35} style={{ color: Colors.Light, marginRight: 12 }} />
            <InputLogin_Input
                onChangeText={onChangeText}
                value={value}
                minHeight={30}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                placeholderTextColor="#fff"
            />
        </InputLogin_Wrapper>
    )
}
