import react from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../constants/Theme';

import {
  BtnGlobal_Container,
  BtnGlobal_Text
} from './styles';

export default function btnGlobal({ iconName, text, size, onPress }){
  return (
    <BtnGlobal_Container style={{marginRight: 5}} onPress={onPress}>
      {iconName ?
        <Icon name={iconName} size={size} style={text === 'Salvar' ? {marginRight: 5}:{marginRight: 0}} color={Colors.Light} />
      :<></>
      }
      <BtnGlobal_Text>{text}</BtnGlobal_Text>
    </BtnGlobal_Container>
  );
}

btnGlobal.defaultProps = {
}