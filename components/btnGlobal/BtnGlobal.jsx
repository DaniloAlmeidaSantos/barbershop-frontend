import react from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../constants/Theme';

import {
  BtnGlobal_Container,
  BtnGlobal_Text
} from './styles';

export default function btnGlobal({ iconName, text, size }){
  return (
    <BtnGlobal_Container>
      {iconName ?
      <Icon name={iconName} size={size} style={{marginRight: 5}} color={Colors.Light} />:<></>
      }
      <BtnGlobal_Text>{text}</BtnGlobal_Text>
    </BtnGlobal_Container>
  );
}

btnGlobal.defaultProps = {
}